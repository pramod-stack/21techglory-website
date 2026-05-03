"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
// @ts-ignore
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
// @ts-ignore
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

gsap.registerPlugin(ScrollTrigger);

export const Component = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const smoothCameraPos = useRef({ x: 0, y: 30, z: 100 });
  const cameraVelocity = useRef({ x: 0, y: 0, z: 0 });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const totalSections = 2; // 0, 1, 2
  
  const threeRefs = useRef<any>({
    scene: null,
    camera: null,
    renderer: null,
    composer: null,
    stars: [],
    nebula: null,
    mountains: [],
    animationId: null,
    targetCameraX: 0,
    targetCameraY: 30,
    targetCameraZ: 300,
    locations: []
  });

  // Initialize Three.js
  useEffect(() => {
    const initThree = () => {
      const { current: refs } = threeRefs;
      
      // Scene setup
      refs.scene = new THREE.Scene();
      refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

      // Camera
      refs.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      refs.camera.position.z = 100;
      refs.camera.position.y = 20;

      // Renderer
      refs.renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current!,
        antialias: true,
        alpha: false
      });
      refs.renderer.setClearColor(0x000000, 1);
      refs.renderer.setSize(window.innerWidth, window.innerHeight);
      refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      refs.renderer.toneMappingExposure = 0.5;

      // Post-processing
      refs.composer = new EffectComposer(refs.renderer);
      const renderPass = new RenderPass(refs.scene, refs.camera);
      refs.composer.addPass(renderPass);

      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.8,
        0.4,
        0.85
      );
      refs.composer.addPass(bloomPass);

      // Create scene elements
      createStarField();
      createNebula();
      createMountains();
      createAtmosphere();
      getLocation();

      // Start animation
      animate();
      
      // Mark as ready after Three.js is initialized
      setIsReady(true);
    };

    const createStarField = () => {
      const { current: refs } = threeRefs;
      const starCount = 5000;
      
      for (let i = 0; i < 3; i++) {
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let j = 0; j < starCount; j++) {
          const radius = 200 + Math.random() * 800;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos(Math.random() * 2 - 1);

          positions[j * 3] = radius * Math.sin(phi) * Math.cos(theta);
          positions[j * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
          positions[j * 3 + 2] = radius * Math.cos(phi);

          // Color variation
          const color = new THREE.Color();
          const colorChoice = Math.random();
          if (colorChoice < 0.7) {
            color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
          } else if (colorChoice < 0.9) {
            color.setHSL(0.08, 0.5, 0.8);
          } else {
            color.setHSL(0.6, 0.5, 0.8);
          }
          
          colors[j * 3] = color.r;
          colors[j * 3 + 1] = color.g;
          colors[j * 3 + 2] = color.b;

          sizes[j] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: {
            time: { value: 0 },
            depth: { value: i }
          },
          vertexShader: `
            attribute float size;
            attribute vec3 color;
            varying vec3 vColor;
            uniform float time;
            uniform float depth;
            
            void main() {
              vColor = color;
              vec3 pos = position;
              
              // Slow rotation based on depth
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
              pos.xy = rot * pos.xy;
              
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z);
              gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5));
              if (dist > 0.5) discard;
              
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist);
              gl_FragColor = vec4(vColor, opacity);
            }
          `,
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthWrite: false
        });

        const stars = new THREE.Points(geometry, material);
        refs.scene.add(stars);
        refs.stars.push(stars);
      }
    };

    const createNebula = () => {
      const { current: refs } = threeRefs;
      
      const geometry = new THREE.PlaneGeometry(8000, 4000, 100, 100);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color(0x06b6d4) }, // cyan 21TG brand
          color2: { value: new THREE.Color(0x9333ea) }, // purple 21TG brand
          opacity: { value: 0.3 }
        },
        vertexShader: `
          varying vec2 vUv;
          varying float vElevation;
          uniform float time;
          
          void main() {
            vUv = uv;
            vec3 pos = position;
            
            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0;
            pos.z += elevation;
            vElevation = elevation;
            
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          uniform float opacity;
          uniform float time;
          varying vec2 vUv;
          varying float vElevation;
          
          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time);
            vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0);
            alpha *= 1.0 + vElevation * 0.01;
            
            gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
        depthWrite: false
      });

      const nebula = new THREE.Mesh(geometry, material);
      nebula.position.z = -1050;
      nebula.rotation.x = 0;
      refs.scene.add(nebula);
      refs.nebula = nebula;
    };

    const createMountains = () => {
      const { current: refs } = threeRefs;
      
      const layers = [
        { distance: -50, height: 60, color: 0x1a1a2e, opacity: 1 },
        { distance: -100, height: 80, color: 0x16213e, opacity: 0.8 },
        { distance: -150, height: 100, color: 0x0f3460, opacity: 0.6 },
        { distance: -200, height: 120, color: 0x0a4668, opacity: 0.4 }
      ];

      layers.forEach((layer, index) => {
        const points = [];
        const segments = 50;
        
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments - 0.5) * 1000;
          const y = Math.sin(i * 0.1) * layer.height + 
                   Math.sin(i * 0.05) * layer.height * 0.5 +
                   Math.random() * layer.height * 0.2 - 100;
          points.push(new THREE.Vector2(x, y));
        }
        
        points.push(new THREE.Vector2(5000, -300));
        points.push(new THREE.Vector2(-5000, -300));

        const shape = new THREE.Shape(points);
        const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({
          color: layer.color,
          transparent: true,
          opacity: layer.opacity,
          side: THREE.DoubleSide
        });

        const mountain = new THREE.Mesh(geometry, material);
        mountain.position.z = layer.distance;
        mountain.position.y = layer.distance
        mountain.userData = { baseZ: layer.distance, index };
        refs.scene.add(mountain);
        refs.mountains.push(mountain);
      });
    };

    const createAtmosphere = () => {
      const { current: refs } = threeRefs;
      
      const geometry = new THREE.SphereGeometry(600, 32, 32);
      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 }
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vPosition = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vPosition;
          uniform float time;
          
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            vec3 atmosphere = vec3(0.3, 0.6, 1.0) * intensity;
            
            float pulse = sin(time * 2.0) * 0.1 + 0.9;
            atmosphere *= pulse;
            
            gl_FragColor = vec4(atmosphere, intensity * 0.25);
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      const atmosphere = new THREE.Mesh(geometry, material);
      refs.scene.add(atmosphere);
    };

    const animate = () => {
      const { current: refs } = threeRefs;
      refs.animationId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;

      // Update stars
      refs.stars.forEach((starField: any) => {
        if (starField.material.uniforms) {
          starField.material.uniforms.time.value = time;
        }
      });

      // Update nebula
      if (refs.nebula && refs.nebula.material.uniforms) {
        refs.nebula.material.uniforms.time.value = time * 0.5;
      }

      // Smooth camera movement with easing
      if (refs.camera && refs.targetCameraX !== undefined) {
        const smoothingFactor = 0.05;
        
        // Calculate smooth position with easing
        smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * smoothingFactor;
        smoothCameraPos.current.y += (refs.targetCameraY - smoothCameraPos.current.y) * smoothingFactor;
        smoothCameraPos.current.z += (refs.targetCameraZ - smoothCameraPos.current.z) * smoothingFactor;
        
        // Add subtle floating motion
        const floatX = Math.sin(time * 0.1) * 2;
        const floatY = Math.cos(time * 0.15) * 1;
        
        // Apply final position
        refs.camera.position.x = smoothCameraPos.current.x + floatX;
        refs.camera.position.y = smoothCameraPos.current.y + floatY;
        refs.camera.position.z = smoothCameraPos.current.z;
        refs.camera.lookAt(0, 10, -600);
      }

      // Parallax mountains with subtle animation
      refs.mountains.forEach((mountain: any, i: number) => {
        const parallaxFactor = 1 + i * 0.5;
        mountain.position.x = Math.sin(time * 0.1) * 2 * parallaxFactor;
        mountain.position.y = 50 + (Math.cos(time * 0.15) * 1 * parallaxFactor);
      });

      if (refs.composer) {
        refs.composer.render();
      }
    };

    initThree();

    // Handle resize
    const handleResize = () => {
      const { current: refs } = threeRefs;
      if (refs.camera && refs.renderer && refs.composer) {
        refs.camera.aspect = window.innerWidth / window.innerHeight;
        refs.camera.updateProjectionMatrix();
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
        refs.composer.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      const { current: refs } = threeRefs;
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener('resize', handleResize);

      refs.stars.forEach((starField: any) => {
        starField.geometry.dispose();
        starField.material.dispose();
      });

      refs.mountains.forEach((mountain: any) => {
        mountain.geometry.dispose();
        mountain.material.dispose();
      });

      if (refs.nebula) {
        refs.nebula.geometry.dispose();
        refs.nebula.material.dispose();
      }

      if (refs.renderer) {
        refs.renderer.dispose();
      }
    };
  }, []);

  const getLocation = () => {
    const { current: refs } = threeRefs;
    const locations: number[] = [];
    refs.mountains.forEach((mountain: any, i: number) => {
      locations[i] = mountain.position.z;
    });
    refs.locations = locations;
  }

  // GSAP Animations - Run after component is ready
  useEffect(() => {
    if (!isReady) return;
    
    gsap.set([menuRef.current, titleRef.current, subtitleRef.current, scrollProgressRef.current], {
      visibility: 'visible'
    });

    const tl = gsap.timeline();

    if (menuRef.current) {
      tl.from(menuRef.current, { x: -100, opacity: 0, duration: 1, ease: "power3.out" });
    }

    if (titleRef.current) {
      const titleChars = titleRef.current.querySelectorAll('.title-char');
      tl.from(titleChars, { y: 200, opacity: 0, duration: 1.5, stagger: 0.05, ease: "power4.out" }, "-=0.5");
    }

    if (subtitleRef.current) {
      const subtitleLines = subtitleRef.current.querySelectorAll('.subtitle-line');
      tl.from(subtitleLines, { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.8");
    }

    if (scrollProgressRef.current) {
      tl.from(scrollProgressRef.current, { opacity: 0, y: 50, duration: 1, ease: "power2.out" }, "-=0.5");
    }

    return () => { tl.kill(); };
  }, [isReady]);

  // Scroll handling scoped to component height
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Prevent negative maxScroll
      const maxScroll = Math.max(containerHeight - windowHeight, 1);
      
      // Calculate progress specifically for this container
      const localScroll = scrollY - containerTop;
      const progress = Math.max(0, Math.min(localScroll / maxScroll, 1));
      
      setScrollProgress(progress);
      
      const newSection = Math.floor(progress * totalSections);
      setCurrentSection(newSection);

      const { current: refs } = threeRefs;
      
      const totalProgress = progress * totalSections;
      const sectionProgress = totalProgress % 1;
      
      const cameraPositions = [
        { x: 0, y: 30, z: 300 },     // Section 0
        { x: 0, y: 40, z: -50 },     // Section 1
        { x: 0, y: 50, z: -700 }     // Section 2
      ];
      
      const currentPos = cameraPositions[newSection] || cameraPositions[0];
      const nextPos = cameraPositions[newSection + 1] || currentPos;
      
      // Smooth movement tracking
      refs.targetCameraX = currentPos.x + (nextPos.x - currentPos.x) * sectionProgress;
      refs.targetCameraY = currentPos.y + (nextPos.y - currentPos.y) * sectionProgress;
      refs.targetCameraZ = currentPos.z + (nextPos.z - currentPos.z) * sectionProgress;
      
      // Smooth parallax for mountains matching original component's logic
      refs.mountains.forEach((mountain: any, i: number) => {
        const speed = 1 + i * 0.9;
        // Use localScroll for parallax instead of global scrollY
        const targetZ = mountain.userData.baseZ + Math.max(0, localScroll) * speed * 0.5;
        
        if (refs.nebula) {
          refs.nebula.position.z = (targetZ + progress * speed * 0.01) - 100;
        }
        
        mountain.userData.targetZ = targetZ;
        
        if (progress > 0.7) {
          mountain.position.z = 600000;
        }
        if (progress <= 0.7) {
          if (refs.locations[i] !== undefined) {
             mountain.position.z = refs.locations[i];
          }
        }
      });
      
      if (refs.nebula && refs.mountains[3]) {
        refs.nebula.position.z = refs.mountains[3].position.z;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  const splitTitle = (text: string) => {
    return text.split('').map((char, i) => (
      <span key={i} className="title-char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  const sectionsData = [
    {
      title: "SCALE YOUR BUSINESS",
      lines: [
        "We build websites, AI systems & digital funnels",
        "that bring real paying customers to your business"
      ]
    },
    {
      title: "GROW FASTER",
      lines: [
        "From visibility to conversions,",
        "we handle your entire digital growth"
      ]
    },
    {
      title: "DOMINATE",
      lines: [
        "AI automation that works 24/7",
        "so you never miss a customer again"
      ]
    }
  ];

  return (
    <div ref={containerRef} className="hero-container cosmos-style relative">
      {/* Sticky Canvas Background */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden z-0 bg-black">
        <canvas ref={canvasRef} className="hero-canvas absolute inset-0 w-full h-full" />
      </div>
      
      {/* Fixed UI Overlays */}
      <div className="sticky top-0 w-full h-0 z-50 pointer-events-none">
        {/* Side menu */}
        <div ref={menuRef} className="side-menu absolute left-8 top-[50vh] -translate-y-1/2 mix-blend-difference" style={{ visibility: 'hidden' }}>
          <div className="vertical-text transform -rotate-90 origin-center text-white tracking-widest font-mono text-sm opacity-50">
            21TG
          </div>
        </div>

        {/* Scroll progress indicator */}
        <div ref={scrollProgressRef} className="scroll-progress absolute right-8 top-[50vh] -translate-y-1/2 flex flex-col items-center gap-4" style={{ visibility: 'hidden' }}>
          <div className="scroll-text text-white/50 text-xs tracking-widest" style={{ writingMode: 'vertical-rl' }}>SCROLL</div>
          <div className="progress-track w-[1px] h-32 bg-white/20 relative">
            <div 
              className="progress-fill absolute top-0 left-0 w-full bg-cyan-400 transition-all duration-100 ease-out" 
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="section-counter text-white/50 text-xs font-mono">
            {String(currentSection + 1).padStart(2, '0')} / {String(totalSections + 1).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Scrolling Sections Layer */}
      <div className="relative z-10 -mt-[100vh]">
        {sectionsData.map((section, i) => (
          <section key={i} className="h-screen w-full flex flex-col items-center justify-center text-center px-4 pointer-events-none">
            <div className="hero-content cosmos-content pointer-events-auto">
              {i === 0 ? (
                <h1 ref={titleRef} className="hero-title text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter" style={{ textShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}>
                  {splitTitle(section.title)}
                </h1>
              ) : (
                <h1 className="hero-title text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tighter" style={{ textShadow: '0 0 40px rgba(6, 182, 212, 0.5)' }}>
                  {splitTitle(section.title)}
                </h1>
              )}
              
              {i === 0 ? (
                <div ref={subtitleRef} className="hero-subtitle cosmos-subtitle text-lg sm:text-xl md:text-2xl text-cyan-100 font-light max-w-2xl mx-auto space-y-2 opacity-80">
                  {section.lines.map((line, j) => <p key={j} className="subtitle-line">{line}</p>)}
                </div>
              ) : (
                <div className="hero-subtitle cosmos-subtitle text-lg sm:text-xl md:text-2xl text-cyan-100 font-light max-w-2xl mx-auto space-y-2 opacity-80">
                  {section.lines.map((line, j) => <p key={j} className="subtitle-line">{line}</p>)}
                </div>
              )}
              
              {/* CTA Buttons only for the first section */}
              {i === 0 && (
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                  <a href="#contact" className="px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]">
                    Get Free Consultation
                  </a>
                  <a href="#work" className="px-8 py-4 rounded-full bg-transparent border border-purple-500 text-white font-medium hover:bg-purple-500/10 transition-all">
                    View Our Work
                  </a>
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
