export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer abstract shape */}
      <path
        d="M 50 35 Q 35 45 35 65 L 35 135 Q 35 155 50 165 L 150 165 Q 165 155 165 135 L 165 65 Q 165 45 150 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Vertical line on left */}
      <path
        d="M 70 50 Q 65 55 65 65 L 65 135 Q 65 145 70 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Inner circular shape */}
      <path
        d="M 85 75 Q 80 80 80 90 L 80 110 Q 80 120 90 120 L 145 120 Q 155 115 155 105 L 155 95 Q 155 85 145 80 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Three animated dots */}
      <circle cx="95" cy="100" r="7" fill="currentColor" className="animate-think-1" />
      <circle cx="117" cy="100" r="7" fill="currentColor" className="animate-think-2" />
      <circle cx="139" cy="100" r="7" fill="currentColor" className="animate-think-3" />
    </svg>
  );
}
