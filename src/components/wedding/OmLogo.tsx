export function OmLogo({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className} 
      style={{ width: "1em", height: "1em", display: "inline-block", fill: "currentColor", ...style }}
    >
      <path d="M 45 35 C 45 25 30 25 30 35 C 30 45 45 45 45 55 C 45 65 30 65 30 55 M 50 35 C 65 25 65 45 50 35 M 65 45 C 75 45 75 55 65 55 M 50 25 C 55 20 60 20 65 25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M 30 55 C 30 70 45 75 55 65" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
      <circle cx="60" cy="15" r="5" fill="currentColor" />
    </svg>
  );
}
