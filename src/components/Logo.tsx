export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        aria-hidden="true"
        className="translate-y-[2px]"
      >
        <rect x="1" y="1" width="16" height="16" fill="none" stroke="#1D3FC4" strokeWidth="2" />
        <rect x="5" y="5" width="8" height="8" fill="#1D3FC4" />
      </svg>
      <span className="font-display text-lg font-extrabold tracking-tight text-ink">
        Source<span className="text-cobalt">Need</span>
      </span>
    </span>
  );
}
