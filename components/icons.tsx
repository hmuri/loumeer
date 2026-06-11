/**
 * 얇은 라인 아이콘 세트 — 이모지 대신 사용 (조용한 브랜드 톤)
 */
type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const LeafIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 19C5 11 10 5 20 4c0 10-5 15-13 15" />
    <path d="M5 19c2-5 6-9 11-11" />
  </svg>
);

export const BriefsIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 6h16l-1 5c-3 0-6 2-6.4 7h-1.2C11 13 8 11 5 11L4 6Z" />
    <path d="M4 9h16" />
  </svg>
);

export const PadIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="5" y="5" width="14" height="14" rx="3" />
    <path d="M5 12h14" />
  </svg>
);

export const SunIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
  </svg>
);

export const ChairIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M7 4h10v7H7zM6 11h12M8 11v6M16 11v6M6 21l1-4M18 21l-1-4" />
  </svg>
);

export const CalendarIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="4" y="5" width="16" height="15" rx="2" />
    <path d="M8 3v4M16 3v4M4 10h16" />
    <path d="M10.5 14.5c.5-1 2-1 2.5 0 .5-1 2-1 2.5 0 .3.8-.5 1.7-2.5 3-2-1.3-2.8-2.2-2.5-3Z" strokeWidth="1.3" />
  </svg>
);

export const SparkleIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 4l1.8 4.6L18 10l-4.2 1.4L12 16l-1.8-4.6L6 10l4.2-1.4L12 4Z" />
    <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" strokeWidth="1.3" />
  </svg>
);

export const ShieldIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const AwardIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="9" r="5" />
    <path d="M9 13.5L8 21l4-2 4 2-1-7.5" />
  </svg>
);

export const FlaskIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M10 3h4M11 3v6l-5.5 9A2 2 0 0 0 7.2 21h9.6a2 2 0 0 0 1.7-3L13 9V3" />
    <path d="M8.5 15h7" />
  </svg>
);

export const BuildingIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <rect x="5" y="4" width="14" height="17" rx="1.5" />
    <path d="M9 8h2M13 8h2M9 12h2M13 12h2M10.5 21v-4h3v4" />
  </svg>
);

export const PackageIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8l8-4 8 4v8l-8 4-8-4V8Z" />
    <path d="M4 8l8 4 8-4M12 12v8" />
  </svg>
);

export const TrashIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13M10 11v5M14 11v5" />
  </svg>
);

export const HandIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M8 12V6.5a1.5 1.5 0 0 1 3 0V11m0-5.5v-1a1.5 1.5 0 0 1 3 0V11m0-4.5a1.5 1.5 0 0 1 3 0V12m0-2a1.5 1.5 0 0 1 3 0v4c0 4-2.5 7-6.5 7S8 18 6.5 15L5 12a1.4 1.4 0 0 1 2.4-1.4L8 12" />
  </svg>
);
