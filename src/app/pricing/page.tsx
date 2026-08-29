import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Free to Browse, Pay Only When Material Moves",
  description:
    "SourceNeed pricing: browsing and buying are free, sellers pay a success fee only when a lot sells, and companies that both buy and sell earn volume discounts.",
  alternates: { canonical: "/pricing" },
};

const tiers = [
  {
    name: "Buyer",
    price: "Free",
    detail: "No subscription, no per-quote fees",
    features: [
      "Browse the full catalog without an account",
      "Unlimited quote requests",
      "COA and SDS review before commitment",
      "Freight coordination included in quotes",
    ],
    cta: { href: "/register", label: "Create a buyer account" },
    highlight: false,
  },
  {
    name: "Seller",
    price: "Success fee",
    detail: "A percentage of the sale, only when a lot sells",
    features: [
      "Free supplier verification",
      "Unlimited listings with documents",
      "Qualified quote requests, not cold inquiries",
      "No listing fees, no monthly minimums",
    ],
    cta: { href: "/register", label: "Become a seller" },
    highlight: true,
  },
  {
    name: "Buyer + Seller",
    price: "Volume discounts",
    detail: "Reduced success fees as your volume grows",
    features: [
      "Everything in Buyer and Seller",
      "Discounted fees across both sides of your account",
      "Priority sourcing for materials not yet listed",
      "A single account manager who knows your inventory",
    ],
    cta: { href: "/contact", label: "Talk to us about volume" },
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <p className="label-mono">Pricing</p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-black tracking-tight sm:text-4xl">
            You pay when material moves. Not before.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            No subscriptions, no listing fees, no charge to browse. Exact
            success-fee rates are confirmed when your account is set up, before
            your first listing goes live.
          </p>
        </div>
      </div>

      <section aria-label="Pricing tiers" className="border-b border-line">
        <div className="shell py-14">
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`flex flex-col border bg-paper p-6 ${
                  t.highlight ? "border-2 border-cobalt" : "border-ink"
                }`}
              >
                {t.highlight && (
                  <span className="mb-3 self-start bg-cobalt px-2 py-1 font-mono text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-paper">
                    Most common
                  </span>
                )}
                <h2 className="font-display text-lg font-bold">{t.name}</h2>
                <p className="mt-2 font-display text-3xl font-black">{t.price}</p>
                <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                  {t.detail}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-6 text-ink-soft">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-cobalt" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={t.cta.href}
                  className={`mt-6 ${t.highlight ? "btn-primary" : "btn-secondary"}`}
                >
                  {t.cta.label}
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-ink-soft">
            Freight is quoted per shipment and passed through at cost plus
            coordination — hazmat-certified carriage where the material
            requires it. Questions about a specific scenario?{" "}
            <Link href="/contact" className="font-semibold text-cobalt hover:text-cobalt-deep">
              Ask us directly
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
