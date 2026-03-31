export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 40 30 Q 20 30 20 50 L 20 150 Q 20 170 40 170 L 160 170 Q 180 170 180 150 L 180 50 Q 180 30 160 30"
        fill="none"
        stroke="currentColor"
        strokeWidth="20"
        strokeLinecap="round"
      />

      <path
        d="M 60 70 Q 50 70 50 80 L 50 120 Q 50 130 60 130 L 140 130 Q 150 130 150 120 L 150 80 Q 150 70 140 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      <circle cx="70" cy="100" r="8" fill="currentColor" />
      <circle cx="100" cy="100" r="8" fill="currentColor" />
      <circle cx="130" cy="100" r="8" fill="currentColor" />
    </svg>
  );
}
