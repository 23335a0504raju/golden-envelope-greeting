export function MandalaBorder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 560"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5E6A3" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#8a6f24" />
        </linearGradient>
      </defs>
      <g stroke="url(#goldStroke)" strokeWidth="1.2">
        <rect x="14" y="14" width="372" height="532" rx="6" />
        <rect x="22" y="22" width="356" height="516" rx="4" strokeDasharray="2 4" opacity="0.6" />
        <rect x="30" y="30" width="340" height="500" rx="3" />
      </g>
      {/* corner mandalas */}
      {[
        [50, 50],
        [350, 50],
        [50, 510],
        [350, 510],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`} stroke="url(#goldStroke)" strokeWidth="1" fill="none">
          <circle r="22" />
          <circle r="14" opacity="0.7" />
          <circle r="6" fill="#C9A84C" stroke="none" />
          {Array.from({ length: 12 }).map((_, k) => {
            const a = (k / 12) * Math.PI * 2;
            return (
              <line
                key={k}
                x1={Math.cos(a) * 14}
                y1={Math.sin(a) * 14}
                x2={Math.cos(a) * 22}
                y2={Math.sin(a) * 22}
              />
            );
          })}
        </g>
      ))}
      {/* top arch */}
      <g stroke="url(#goldStroke)" fill="none" strokeWidth="1">
        <path d="M120 60 Q200 20 280 60" />
        <path d="M140 70 Q200 38 260 70" opacity="0.7" />
        <circle cx="200" cy="38" r="3" fill="#C9A84C" stroke="none" />
      </g>
      {/* bottom flourish */}
      <g stroke="url(#goldStroke)" fill="none" strokeWidth="1">
        <path d="M120 500 Q200 540 280 500" />
        <path d="M140 490 Q200 522 260 490" opacity="0.7" />
      </g>
    </svg>
  );
}

export function OmSymbol({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="omGold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F5E6A3" />
          <stop offset="100%" stopColor="#8a6f24" />
        </radialGradient>
      </defs>
      <text
        x="50"
        y="68"
        textAnchor="middle"
        fontSize="58"
        fontFamily="'Noto Sans Devanagari', serif"
        fill="url(#omGold)"
        style={{ fontWeight: 700 }}
      >
        ॐ
      </text>
    </svg>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 50" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* flame */}
      <g className="w-flicker">
        <ellipse cx="20" cy="14" rx="4" ry="9" fill="#F5E6A3" />
        <ellipse cx="20" cy="16" rx="2.4" ry="6" fill="#fff8d6" />
      </g>
      {/* lamp */}
      <path
        d="M4 32 Q20 46 36 32 Q34 40 20 42 Q6 40 4 32 Z"
        fill="#C9A84C"
        stroke="#8a6f24"
        strokeWidth="0.8"
      />
      <ellipse cx="20" cy="32" rx="16" ry="3" fill="#8a6f24" />
    </svg>
  );
}