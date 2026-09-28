export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="24" y1="4" x2="24" y2="40" stroke="currentColor" strokeWidth="1.4" />
        <line x1="10" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M10 12 L4 24 Q10 30 16 24 L10 12 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M38 12 L32 24 Q38 30 44 24 L38 12 Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="24" cy="8" r="2.4" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <line x1="16" y1="40" x2="32" y2="40" stroke="currentColor" strokeWidth="1.4" />
        <line x1="24" y1="40" x2="24" y2="44" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <span className="font-display leading-none">
        <span className="block text-[0.95rem] tracking-[0.02em] text-parchment">
          Manish Kumar
        </span>
        <span className="block text-[0.55rem] tracking-[0.32em] text-parchment-dim mt-0.5">
         Advocate
        </span>
      </span>
    </span>
  );
}
