"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

gsap.registerPlugin(ScrollTrigger);

export const Component = ({ onOpenModal }: { onOpenModal?: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollProgressRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const smoothCameraPos = useRef({ x: 0, y: 30, z: 100 });
  const cameraVelocity = useRef({ x: 0, y: 0, z: 0 });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const totalSections = 2; // Total scrollable sections (3 slides: 0, 1, 2)
  
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
      
      refs.scene = new THREE.Scene();
      refs.scene.fog = new THREE.FogExp2(0x000000, 0.00025);

      refs.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
      refs.camera.position.z = 100;
      refs.camera.position.y = 20;

      if (canvasRef.current) {
        refs.renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
        refs.renderer.setSize(window.innerWidth, window.innerHeight);
        refs.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        refs.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        refs.renderer.toneMappingExposure = 0.5;

        refs.composer = new EffectComposer(refs.renderer);
        refs.composer.addPass(new RenderPass(refs.scene, refs.camera));
        refs.composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.8, 0.4, 0.85));
      }

      createStarField();
      createNebula();
      createMountains();
      createAtmosphere();
      getLocation();
      animate();
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

          const color = new THREE.Color();
          const colorChoice = Math.random();
          if (colorChoice < 0.7) color.setHSL(0, 0, 0.8 + Math.random() * 0.2);
          else if (colorChoice < 0.9) color.setHSL(0.08, 0.5, 0.8);
          else color.setHSL(0.6, 0.5, 0.8);
          
          colors[j * 3] = color.r;
          colors[j * 3 + 1] = color.g;
          colors[j * 3 + 2] = color.b;
          sizes[j] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
          uniforms: { time: { value: 0 }, depth: { value: i } },
          vertexShader: `
            attribute float size; attribute vec3 color; varying vec3 vColor; uniform float time; uniform float depth;
            void main() {
              vColor = color; vec3 pos = position;
              float angle = time * 0.05 * (1.0 - depth * 0.3);
              mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle)); pos.xy = rot * pos.xy;
              vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
              gl_PointSize = size * (300.0 / -mvPosition.z); gl_Position = projectionMatrix * mvPosition;
            }
          `,
          fragmentShader: `
            varying vec3 vColor;
            void main() {
              float dist = length(gl_PointCoord - vec2(0.5)); if (dist > 0.5) discard;
              float opacity = 1.0 - smoothstep(0.0, 0.5, dist); gl_FragColor = vec4(vColor, opacity);
            }
          `,
          transparent: true, blending: THREE.AdditiveBlending, depthWrite: false
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
          time: { value: 0 }, color1: { value: new THREE.Color(0x0033ff) }, color2: { value: new THREE.Color(0xff0066) }, opacity: { value: 0.3 }
        },
        vertexShader: `
          varying vec2 vUv; varying float vElevation; uniform float time;
          void main() {
            vUv = uv; vec3 pos = position;
            float elevation = sin(pos.x * 0.01 + time) * cos(pos.y * 0.01 + time) * 20.0; pos.z += elevation; vElevation = elevation;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1; uniform vec3 color2; uniform float opacity; uniform float time; varying vec2 vUv; varying float vElevation;
          void main() {
            float mixFactor = sin(vUv.x * 10.0 + time) * cos(vUv.y * 10.0 + time); vec3 color = mix(color1, color2, mixFactor * 0.5 + 0.5);
            float alpha = opacity * (1.0 - length(vUv - 0.5) * 2.0); alpha *= 1.0 + vElevation * 0.01; gl_FragColor = vec4(color, alpha);
          }
        `,
        transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false
      });
      const nebula = new THREE.Mesh(geometry, material);
      nebula.position.z = -1050; nebula.rotation.x = 0;
      refs.scene.add(nebula); refs.nebula = nebula;
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
        const points = []; const segments = 50;
        for (let i = 0; i <= segments; i++) {
          const x = (i / segments - 0.5) * 1000;
          const y = Math.sin(i * 0.1) * layer.height + Math.sin(i * 0.05) * layer.height * 0.5 + Math.random() * layer.height * 0.2 - 100;
          points.push(new THREE.Vector2(x, y));
        }
        points.push(new THREE.Vector2(5000, -300)); points.push(new THREE.Vector2(-5000, -300));
        const shape = new THREE.Shape(points); const geometry = new THREE.ShapeGeometry(shape);
        const material = new THREE.MeshBasicMaterial({ color: layer.color, transparent: true, opacity: layer.opacity, side: THREE.DoubleSide });
        const mountain = new THREE.Mesh(geometry, material);
        mountain.position.z = layer.distance; mountain.position.y = layer.distance; mountain.userData = { baseZ: layer.distance, index };
        refs.scene.add(mountain); refs.mountains.push(mountain);
      });
    };

    const createAtmosphere = () => {
      const { current: refs } = threeRefs;
      const geometry = new THREE.SphereGeometry(600, 32, 32);
      const material = new THREE.ShaderMaterial({
        uniforms: { time: { value: 0 } },
        vertexShader: `
          varying vec3 vNormal; varying vec3 vPosition;
          void main() { vNormal = normalize(normalMatrix * normal); vPosition = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
        `,
        fragmentShader: `
          varying vec3 vNormal; varying vec3 vPosition; uniform float time;
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0); vec3 atmosphere = vec3(0.3, 0.6, 1.0) * intensity;
            float pulse = sin(time * 2.0) * 0.1 + 0.9; atmosphere *= pulse; gl_FragColor = vec4(atmosphere, intensity * 0.25);
          }
        `,
        side: THREE.BackSide, blending: THREE.AdditiveBlending, transparent: true
      });
      const atmosphere = new THREE.Mesh(geometry, material);
      refs.scene.add(atmosphere);
    };

    const animate = () => {
      const { current: refs } = threeRefs;
      refs.animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;

      refs.stars.forEach((starField: any) => { if (starField.material.uniforms) starField.material.uniforms.time.value = time; });
      if (refs.nebula && refs.nebula.material.uniforms) refs.nebula.material.uniforms.time.value = time * 0.5;

      if (refs.camera && refs.targetCameraX !== undefined) {
        const smoothingFactor = 0.05;
        smoothCameraPos.current.x += (refs.targetCameraX - smoothCameraPos.current.x) * smoothingFactor;
        smoothCameraPos.current.y += (refs.targetCameraY - smoothCameraPos.current.y) * smoothingFactor;
        smoothCameraPos.current.z += (refs.targetCameraZ - smoothCameraPos.current.z) * smoothingFactor;
        const floatX = Math.sin(time * 0.1) * 2; const floatY = Math.cos(time * 0.15) * 1;
        refs.camera.position.set(smoothCameraPos.current.x + floatX, smoothCameraPos.current.y + floatY, smoothCameraPos.current.z);
        refs.camera.lookAt(0, 10, -600);
      }

      refs.mountains.forEach((mountain: any, i: number) => {
        const parallaxFactor = 1 + i * 0.5;
        mountain.position.x = Math.sin(time * 0.1) * 2 * parallaxFactor;
        mountain.position.y = 50 + (Math.cos(time * 0.15) * 1 * parallaxFactor);
      });

      if (refs.composer) refs.composer.render();
    };

    initThree();

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

    return () => {
      const { current: refs } = threeRefs;
      if (refs.animationId) cancelAnimationFrame(refs.animationId);
      window.removeEventListener('resize', handleResize);
      refs.stars.forEach((s: any) => { s.geometry.dispose(); s.material.dispose(); });
      refs.mountains.forEach((m: any) => { m.geometry.dispose(); m.material.dispose(); });
      if (refs.nebula) { refs.nebula.geometry.dispose(); refs.nebula.material.dispose(); }
      if (refs.renderer) refs.renderer.dispose();
    };
  }, []);

  const getLocation = () => {
    const { current: refs } = threeRefs;
    const locations: number[] = [];
    refs.mountains.forEach((mountain: any, i: number) => { locations[i] = mountain.position.z; });
    refs.locations = locations;
  }

  // Handle GSAP specific to DOM elements
  useEffect(() => {
    if (!isReady || !containerRef.current) return;
    
    // Unhide HUD elements initially
    gsap.set([menuRef.current, scrollProgressRef.current], { autoAlpha: 1 });
    
    // Animate side menu
    gsap.from(menuRef.current, { x: -100, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    gsap.from(scrollProgressRef.current, { y: 50, opacity: 0, duration: 1, ease: "power2.out", delay: 0.5 });

    // Iterate through all sections to add scroll-triggered entrance animations
    const sections = gsap.utils.toArray('.content-section');
    sections.forEach((section: any, i: number) => {
      const titleChars = section.querySelectorAll('.title-char');
      const subtitleLines = section.querySelectorAll('.subtitle-line');
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center", // Trigger when top of section hits center of viewport
          end: "bottom center",
          toggleActions: "play reverse play reverse", // Play when scrolling down, reverse scrolling up
        }
      });

      if (titleChars.length > 0) {
        tl.from(titleChars, { y: 100, opacity: 0, duration: 1, stagger: 0.05, ease: "power4.out" });
      } else {
        const h1 = section.querySelector('h1');
        if (h1) tl.from(h1, { y: 50, opacity: 0, duration: 1, ease: "power4.out" });
      }

      if (subtitleLines.length > 0) {
        tl.from(subtitleLines, { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.5");
      }
    });

  }, [isReady]);

  // Scroll logic for Three.js Camera & Progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      
      // Calculate scroll progress relative to the container height
      const windowHeight = window.innerHeight;
      const rect = containerRef.current.getBoundingClientRect();
      const documentHeight = rect.height; 
      const maxScroll = Math.max(documentHeight - windowHeight, 1);
      
      // Calculate progress (0 to 1) based on container position relative to viewport
      // If container is at the top of the viewport, rect.top is 0
      const progress = Math.max(0, Math.min(-rect.top / maxScroll, 1));
      
      setScrollProgress(progress);
      
      // Calculate currentSection indicator (0, 1, 2)
      // Transition thresholds: < 0.33 -> 0, 0.33 to 0.66 -> 1, > 0.66 -> 2
      const currentSectionIndicator = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2;
      setCurrentSection(currentSectionIndicator);

      const { current: refs } = threeRefs;
      
      // Define camera positions for each section milestone
      const cameraPositions: Record<number, {x: number, y: number, z: number}> = {
        0: { x: 0, y: 30, z: 300 },    // Section 0 - GROWTH
        1: { x: 0, y: 40, z: -50 },     // Section 1 - VISIBILITY
        2: { x: 0, y: 55, z: -400 }     // Section 2 - AUTOMATION
      };
      
      // Interpolate smoothly across the 2 transitions (0 -> 1 and 1 -> 2)
      const bracketProgress = progress * totalSections; // goes from 0 to 2
      let newSection = Math.floor(bracketProgress);
      let sectionProgress = bracketProgress - newSection;
      
      if (newSection >= totalSections) {
        newSection = totalSections - 1;
        sectionProgress = 1;
      }
      
      const currentPos = cameraPositions[newSection];
      const nextPos = cameraPositions[newSection + 1] || currentPos;
      
      refs.targetCameraX = currentPos.x + (nextPos.x - currentPos.x) * sectionProgress;
      refs.targetCameraY = currentPos.y + (nextPos.y - currentPos.y) * sectionProgress;
      refs.targetCameraZ = currentPos.z + (nextPos.z - currentPos.z) * sectionProgress;
      
      refs.mountains.forEach((mountain: any, i: number) => {
        const speed = 1 + i * 0.9;
        const targetZ = mountain.userData.baseZ + scrollY * speed * 0.5;
        if (refs.nebula) refs.nebula.position.z = (targetZ + progress * speed * 0.01) - 100;
        
        mountain.userData.targetZ = targetZ;
        if (progress > 0.7) {
          mountain.position.z = 600000; // Hide mountains at end
        } else {
          if (refs.locations && refs.locations.length > i) {
             mountain.position.z = refs.locations[i];
          }
        }
      });
      if (refs.nebula && refs.mountains.length > 3) {
        refs.nebula.position.z = refs.mountains[3].position.z;
      }

      // Constrain WebGL canvas and HUD visibility smoothly as hero scrolls out
      // Starts fading out at progress 0.85 and is completely hidden by progress 1.0 (before next section enters)
      const opacity = progress > 0.85 ? Math.max(0, (1 - progress) / 0.15) : 1;
      if (canvasRef.current) {
        canvasRef.current.style.opacity = String(opacity);
        canvasRef.current.style.visibility = opacity === 0 ? 'hidden' : 'visible';
      }
      if (menuRef.current) {
        menuRef.current.style.opacity = String(opacity);
        menuRef.current.style.visibility = opacity === 0 ? 'hidden' : 'visible';
      }
      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.opacity = String(opacity);
        scrollProgressRef.current.style.visibility = opacity === 0 ? 'hidden' : 'visible';
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
      title: 'Growth',
      subtitle1: 'We grow when our clients grow.',
      subtitle2: 'Building digital systems that help businesses attract more customers, save time, and scale confidently.'
    },
    {
      title: 'Visibility',
      subtitle1: 'Helping businesses stand out in the digital world.',
      subtitle2: 'From premium websites to SEO and branding, we create powerful online identities that build trust and visibility.'
    },
    {
      title: 'Automation',
      subtitle1: 'Smarter systems. Better results.',
      subtitle2: 'We use AI automation and modern technology to simplify operations, generate leads, and help businesses grow faster with less manual work.'
    }
  ];

  return (
    <div ref={containerRef} className="relative w-full bg-black text-white" style={{ height: '300vh' }}>
      {/* 3D Background Canvas - Fixed to viewport */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />
      
      {/* Side HUD Menu */}
      <div ref={menuRef} className="fixed left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-8 text-white/50 invisible mix-blend-difference">
        <div className="flex flex-col gap-1.5 cursor-pointer hover:text-white transition-colors">
          <span className="w-6 h-0.5 bg-current block"></span>
          <span className="w-6 h-0.5 bg-current block"></span>
          <span className="w-4 h-0.5 bg-current block"></span>
        </div>
        <div className="writing-vertical-rl rotate-180 tracking-[0.3em] text-xs font-medium uppercase">SPACE</div>
      </div>

      {/* Scroll Progress HUD */}
      <div ref={scrollProgressRef} className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 invisible mix-blend-difference">
        <div className="text-white/50 text-xs tracking-widest uppercase rotate-90 mb-8">SCROLL</div>
        <div className="w-0.5 h-32 bg-white/10 rounded-full relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full bg-white transition-all duration-300 ease-out" 
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
        <div className="text-white/50 text-xs font-mono">
          {String(currentSection + 1).padStart(2, '0')} / {String(totalSections + 1).padStart(2, '0')}
        </div>
      </div>

      {/* Scrollable Content Sections */}
      <div className="relative z-10 w-full">
        {sectionsData.map((section, i) => (
          <section key={i} className="content-section h-screen w-full flex flex-col items-center justify-center text-center px-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-5xl md:text-[7vw] font-extrabold leading-none tracking-tighter mb-6 overflow-hidden uppercase text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                {splitTitle(section.title)}
              </h2>
            </div>
        
            <div className="text-lg md:text-2xl font-light tracking-wide max-w-2xl text-red-200/85 drop-shadow-[0_0_6px_rgba(239,68,68,0.2)]">
              <p className="subtitle-line overflow-hidden font-medium text-red-100">
                {section.subtitle1}
              </p>
              <p className="subtitle-line overflow-hidden mt-3 text-red-300/70">
                {section.subtitle2}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
