import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  emphasis?: boolean;
}

// 1. icon-engine (gears + orbital line)
export function IconEngine({ size = 24, className = '', emphasis = false, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <title>Engine Workflow</title>
      {/* Central Gear */}
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      {/* Orbital Motion Ring */}
      <path
        d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9"
        stroke={emphasis ? '#D9A441' : 'currentColor'}
        strokeDasharray="2 3"
      />
    </svg>
  );
}

// 2. icon-shield-audit (hex shield + internal gauge)
export function IconShieldAudit({ size = 24, className = '', emphasis = false, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <title>System & Growth Audit</title>
      {/* Hexagonal Shield */}
      <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" />
      {/* Internal Gauge Arch + Needle */}
      <path
        d="M8.5 13a4 4 0 0 1 7 0"
        stroke={emphasis ? '#D9A441' : 'currentColor'}
      />
      <line
        x1="12"
        y1="13"
        x2="14"
        y2="10"
        stroke={emphasis ? '#D9A441' : 'currentColor'}
      />
      <circle cx="12" cy="13" r="1" fill="currentColor" />
    </svg>
  );
}

// 3. icon-builder-node (hex node with two satellite nodes)
export function IconBuilderNode({ size = 24, className = '', emphasis = false, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <title>System Architecture Node</title>
      {/* Main Central Node */}
      <rect x="8" y="8" width="8" height="8" rx="2" stroke={emphasis ? '#D9A441' : 'currentColor'} />
      {/* Satellite Nodes */}
      <circle cx="4" cy="4" r="2" />
      <circle cx="20" cy="20" r="2" />
      <path d="M6 6l2 2M16 16l2 2M16 8l3-3M5 19l3-3" strokeDasharray="2 2" />
    </svg>
  );
}

// 4. icon-send-whatsapp (chat bubble + custom plane tail)
export function IconSendWhatsapp({ size = 24, className = '', emphasis = false, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <title>WhatsApp & Dispatch Engine</title>
      {/* Chat Bubble Outline */}
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      {/* Send Plane Glyphs */}
      <path
        d="M10 12l4-2-2 4 1 1 3-5-5 1 1 1"
        stroke={emphasis ? '#D9A441' : 'currentColor'}
      />
    </svg>
  );
}

// 5. icon-chart-perf (rising line + gold anchor dot)
export function IconChartPerf({ size = 24, className = '', emphasis = false, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <title>Growth & Performance Analytics</title>
      {/* Chart Axes */}
      <path d="M3 3v18h18" />
      {/* Rising Exponential Line */}
      <path
        d="M6 16l4-5 4 3 6-8"
        stroke={emphasis ? '#D9A441' : 'currentColor'}
      />
      {/* Anchor Dot */}
      <circle cx="20" cy="6" r="2" fill="#D9A441" stroke="#D9A441" />
    </svg>
  );
}
