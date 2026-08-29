import Link from "next/link";
import { site, footerNav } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink bg-ink text-paper">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" aria-label="SourceNeed home" className="inline-block">
            <span className="inline-flex items-baseline gap-1.5">
              <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="translate-y-[2px]">
                <rect x="1" y="1" width="16" height="16" fill="none" stroke="#F7F5EF" strokeWidth="2" />
                <rect x="5" y="5" width="8" height="8" fill="#F7F5EF" />
              </svg>
              <span className="font-display text-lg font-extrabold tracking-tight">SourceNeed</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-paper/70">
            The North American marketplace for stocked and surplus chemicals.
            Operated by {site.legalName}, Toronto.
          </p>
        </div>

        <div>
          <h2 className="label-mono !text-paper/50">Marketplace</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.marketplace.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label-mono !text-paper/50">Company</h2>
          <ul className="mt-4 space-y-2.5">
            {footerNav.company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper/80 hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="label-mono !text-paper/50">Contact</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-paper">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-paper">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="leading-6">
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="shell flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.6875rem] text-paper/50">
            © {year} {site.legalName} · All rights reserved
          </p>
          <ul className="flex gap-5">
            {footerNav.legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[0.6875rem] text-paper/60 hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
