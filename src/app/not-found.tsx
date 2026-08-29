import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex flex-col items-center py-24 text-center">
      <p className="label-mono">Error 404</p>
      <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        That page isn&apos;t on the manifest.
      </h1>
      <p className="mt-3 max-w-md text-[0.95rem] leading-7 text-ink-soft">
        The link may be outdated — the old site had a few of those. Everything
        current is reachable from the catalog or the homepage.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/catalog" className="btn-primary">
          Browse the catalog
        </Link>
        <Link href="/" className="btn-secondary">
          Go to the homepage
        </Link>
      </div>
    </div>
  );
}
