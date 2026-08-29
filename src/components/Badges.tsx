export function DocBadge({
  label,
  available,
  title,
}: {
  label: string;
  available: boolean;
  title?: string;
}) {
  return (
    <span
      title={title}
      className={`inline-flex items-center gap-1 border px-1.5 py-0.5 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.1em] ${
        available
          ? "border-amber/50 bg-amber-soft text-amber-deep"
          : "border-line text-line-dark"
      }`}
    >
      {available ? "✓" : "–"} {label}
    </span>
  );
}

export function VerifiedBadge({ verified }: { verified: boolean }) {
  return verified ? (
    <span
      title="This supplier has completed SourceNeed's verification: business registration, warehouse location, and document practices reviewed."
      className="inline-flex items-center gap-1 border border-cobalt/40 bg-cobalt/5 px-1.5 py-0.5 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-cobalt"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
        <path d="M1 5l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      Verified supplier
    </span>
  ) : (
    <span
      title="Verification of this supplier is in progress."
      className="inline-flex items-center border border-line px-1.5 py-0.5 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-ink-soft"
    >
      Verification pending
    </span>
  );
}

export function TypeBadge({ type }: { type: "surplus" | "stocked" }) {
  return (
    <span className="inline-flex items-center border border-line bg-paper-2 px-1.5 py-0.5 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-ink-soft">
      {type}
    </span>
  );
}
