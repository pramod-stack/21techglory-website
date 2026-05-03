"use client"
import React, { useEffect, useState, memo } from 'react';
import { Globe, Search, TrendingUp, Bot, Users, Palette } from 'lucide-react';

// --- Type Definitions ---
type IconType = 'web' | 'seo' | 'ads' | 'ai' | 'crm' | 'brand';

type GlowColor = 'cyan' | 'purple';

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Improved SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  web: {
    component: () => <Globe className="w-full h-full text-[#06B6D4]" />,
    color: '#06B6D4'
  },
  seo: {
    component: () => <Search className="w-full h-full text-[#06B6D4]" />,
    color: '#06B6D4'
  },
  ads: {
    component: () => <TrendingUp className="w-full h-full text-[#06B6D4]" />,
    color: '#06B6D4'
  },
  ai: {
    component: () => <Bot className="w-full h-full text-[#9333EA]" />,
    color: '#9333EA'
  },
  crm: {
    component: () => <Users className="w-full h-full text-[#9333EA]" />,
    color: '#9333EA'
  },
  brand: {
    component: () => <Palette className="w-full h-full text-[#9333EA]" />,
    color: '#9333EA'
  }
};

// --- Memoized Icon Component ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configuration for the Orbiting Skills ---
const skillsConfig: SkillConfig[] = [
  // Inner orbit — core services
  { id: 'web', orbitRadius: 100, size: 44, speed: 1, iconType: 'web', phaseShift: 0, glowColor: 'cyan', label: 'Web Development' },
  { id: 'seo', orbitRadius: 100, size: 44, speed: 1, iconType: 'seo', phaseShift: (2*Math.PI)/3, glowColor: 'cyan', label: 'SEO & GMB' },
  { id: 'ads', orbitRadius: 100, size: 44, speed: 1, iconType: 'ads', phaseShift: (4*Math.PI)/3, glowColor: 'cyan', label: 'Paid Ads' },
  // Outer orbit — advanced services
  { id: 'ai', orbitRadius: 180, size: 50, speed: -0.6, iconType: 'ai', phaseShift: 0, glowColor: 'purple', label: 'AI Automation' },
  { id: 'crm', orbitRadius: 180, size: 46, speed: -0.6, iconType: 'crm', phaseShift: (2*Math.PI)/3, glowColor: 'purple', label: 'CRM Systems' },
  { id: 'brand', orbitRadius: 180, size: 44, speed: -0.6, iconType: 'brand', phaseShift: (4*Math.PI)/3, glowColor: 'purple', label: 'Branding' },
];

// --- Memoized Orbiting Skill Component ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Number((Math.cos(angle) * orbitRadius).toFixed(2));
  const y = Number((Math.sin(angle) * orbitRadius).toFixed(2));

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
        zIndex: isHovered ? 20 : 10,
      }}
      suppressHydrationWarning
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-2 bg-gray-900/90 backdrop-blur-sm
          border border-white/10
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
        style={{
          boxShadow: isHovered
            ? `0 0 30px ${iconComponents[iconType]?.color}40, 0 0 60px ${iconComponents[iconType]?.color}20`
            : undefined
        }}
      >
        <SkillIcon type={iconType} />
        {isHovered && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900/95 border border-white/10 backdrop-blur-sm rounded-lg text-sm text-white whitespace-nowrap pointer-events-none z-50">
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

// --- Optimized Orbit Path Component ---
const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: {
      primary: 'rgba(6, 182, 212, 0.4)',
      secondary: 'rgba(6, 182, 212, 0.1)',
      border: 'rgba(6, 182, 212, 0.2)'
    },
    purple: {
      primary: 'rgba(147, 51, 234, 0.4)',
      secondary: 'rgba(147, 51, 234, 0.1)',
      border: 'rgba(147, 51, 234, 0.2)'
    }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        animationDelay: `${animationDelay}s`,
      }}
    >
      {/* Glowing background */}
      <div
        className="absolute inset-0 rounded-full animate-pulse"
        style={{
          background: `radial-gradient(circle, transparent 40%, ${colors.secondary} 80%, ${colors.primary} 100%)`,
          boxShadow: `0 0 40px ${colors.primary}, inset 0 0 40px ${colors.secondary}`,
          animation: 'pulse 4s ease-in-out infinite',
          animationDelay: `${animationDelay}s`,
        }}
      />

      {/* Static ring for depth */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 0 10px ${colors.secondary}`,
        }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

// --- Main App Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const orbitConfigs: Array<{ radius: number; glowColor: GlowColor; delay: number }> = [
    { radius: 100, glowColor: 'cyan', delay: 0 },
    { radius: 180, glowColor: 'purple', delay: 1.5 }
  ];

  return (
    <section className="w-full bg-black py-24 flex flex-col items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #06B6D4 0%, transparent 40%),
                             radial-gradient(circle at 75% 75%, #9333EA 0%, transparent 40%)`,
          }}
        />
      </div>

      <div className="text-center z-10 mb-16 px-4">
        <h2 className="text-sm md:text-base font-semibold text-cyan-400 tracking-wider uppercase mb-2">Our Core Services</h2>
        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Everything your business needs to grow digitally
        </h3>
      </div>

      <div 
        className="relative w-[calc(100vw-40px)] h-[calc(100vw-40px)] md:w-[450px] md:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Central "Code" Icon with enhanced glow */}
        <div className="w-24 h-24 bg-gray-900 border border-white/10 rounded-full flex flex-col items-center justify-center z-10 relative shadow-2xl backdrop-blur-md">
          <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-purple-500/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-3xl font-black bg-gradient-to-br from-cyan-400 to-cyan-600 bg-clip-text text-transparent leading-none">21</span>
            <span className="text-[10px] font-bold text-white tracking-widest mt-1">TechGlory</span>
          </div>
        </div>

        {/* Render glowing orbit paths */}
        {orbitConfigs.map((config) => (
          <GlowingOrbitPath
            key={`path-${config.radius}`}
            radius={config.radius}
            glowColor={config.glowColor}
            animationDelay={config.delay}
          />
        ))}

        {/* Render orbiting skill icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill
              key={config.id}
              config={config}
              angle={angle}
            />
          );
        })}
      </div>
    </section>
  );
}
