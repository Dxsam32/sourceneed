import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Sellers — Turn Surplus Chemical Inventory Back Into Cash",
  description:
    "List surplus or stocked chemical inventory on SourceNeed. One-time supplier verification, lot documents required, and your listings reach procurement teams across North America.",
  alternates: { canonical: "/for-sellers" },
};

const steps = [
  {
    title: "Verify once",
    body: "We confirm your business registration, warehouse location, and documentation practices. It's a one-time review, and it's why buyers trust the badge.",
  },
  {
    title: "List with documents",
    body: "Upload the lot-specific COA and current SDS with each listing. Material without documents doesn't go live — which is exactly why documented material sells.",
  },
  {
    title: "Receive qualified quotes",
    body: "Buyers come to you with quantity and timeline already stated. No tire-kickers wading through your sales team's inbox.",
  },
  {
    title: "Ship and get paid",
    body: "Freight is coordinated through hazmat-capable partners where required. You confirm release; we handle the logistics paperwork.",
  },
];

const sells = [
  "Cancelled production runs and order reductions",
  "Reformulation leftovers with clean documentation",
  "Overbought raw materials approaching optimal resale window",
  "Discontinued SKUs in original sealed packaging",
  "Stocked distribution inventory you want in front of more buyers",
];

export default function ForSellersPage() {
  return (
    <>
      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <p className="label-mono">For sellers</p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-black tracking-tight sm:text-4xl">
            Surplus on the shelf is capital doing nothing.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            Every month a surplus lot sits, it ages toward its retest date and
            closer to a disposal invoice. List it while it&apos;s an asset.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/register" className="btn-primary">
              Become a seller
            </Link>
            <Link href="/pricing" className="btn-secondary">
              See seller pricing
            </Link>
          </div>
        </div>
      </div>

      <section aria-labelledby="steps-heading" className="border-b border-line">
        <div className="shell py-14">
          <h2 id="steps-heading" className="font-display text-2xl font-black tracking-tight">
            How selling works
          </h2>
          <ol className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-paper p-6">
                <span className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="what-heading" className="border-b border-line">
        <div className="shell grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <h2 id="what-heading" className="font-display text-2xl font-black tracking-tight">
              What sells on SourceNeed
            </h2>
            <ul className="mt-6 space-y-3">
              {sells.map((s) => (
                <li key={s} className="flex gap-3 text-[0.95rem] leading-7 text-ink-soft">
                  <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 bg-cobalt" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-ink bg-paper p-6">
            <p className="label-mono">The alternative</p>
            <h3 className="mt-2 font-display text-lg font-bold">
              Disposal is the worst exit
            </h3>
            <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">
              Licensed chemical disposal in Canada commonly costs hundreds of
              dollars per drum once transport and documentation are counted.
              Recovery through resale turns that liability into revenue — and
              the earlier you list, the more shelf life you have to sell.
            </p>
            <Link
              href="/blog/surplus-chemical-inventory-recovery-guide-for-sellers"
              className="mt-4 inline-block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cobalt hover:text-cobalt-deep"
            >
              Read the seller&apos;s recovery guide →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cobalt text-paper">
        <div className="shell flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display text-2xl font-black tracking-tight">
            Have a lot list ready? Send it over and we&apos;ll set you up.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-cobalt">
              Talk to us first
            </Link>
            <Link href="/register" className="btn-primary !bg-ink hover:!bg-black">
              Register as a seller
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
