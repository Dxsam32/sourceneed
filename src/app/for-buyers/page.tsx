import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Buyers — Source Surplus Chemicals Without the Overseas Wait",
  description:
    "How buying works on SourceNeed: search by name or CAS number, review the lot's COA and SDS before committing, and get compliant freight to your dock in days, not months.",
  alternates: { canonical: "/for-buyers" },
};

const steps = [
  {
    title: "Search the open catalog",
    body: "Filter by product name, CAS number, grade, quantity, and province. No account is required to browse — the inventory is public because hiding it helps no one.",
  },
  {
    title: "Read the documents first",
    body: "Every lot lists with its certificate of analysis and safety data sheet. Check the lot number, test results, and retest date before you spend a minute negotiating.",
  },
  {
    title: "Request a quote",
    body: "Tell us the quantity you need. You get an all-in quote — material plus freight to your dock — usually within one business day. Split lots are possible on most listings.",
  },
  {
    title: "Receive compliant freight",
    body: "Regulated materials move with TDG/DOT-certified carriers arranged by us. Domestic lots mean no customs brokerage, no duties, and no six-week ocean transit.",
  },
];

const reasons = [
  {
    title: "Landed cost, not list price",
    body: "Domestic surplus skips ocean freight, brokerage, duties, and the working capital cost of ten-week lead times. Compare delivered price to delivered price and the math often flips.",
  },
  {
    title: "Days, not months",
    body: "Material already warehoused in Canada can be on your dock the same week. That changes how much safety stock you need to carry.",
  },
  {
    title: "Documents before commitment",
    body: "You see the lot COA and SDS before you commit a dollar. If a document is missing, the lot doesn't list. Simple.",
  },
];

export default function ForBuyersPage() {
  return (
    <>
      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <p className="label-mono">For buyers</p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-black tracking-tight sm:text-4xl">
            Check the continent before you check overseas.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            The material you&apos;re about to order from across an ocean may
            already be sitting in a warehouse a day&apos;s drive away — at a
            discount, with documents you can read today.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/catalog" className="btn-primary">
              Browse the catalog
            </Link>
            <Link href="/register" className="btn-secondary">
              Create a buyer account
            </Link>
          </div>
        </div>
      </div>

      <section aria-labelledby="steps-heading" className="border-b border-line">
        <div className="shell py-14">
          <h2 id="steps-heading" className="font-display text-2xl font-black tracking-tight">
            How buying works
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

      <section aria-labelledby="why-heading" className="border-b border-line">
        <div className="shell py-14">
          <h2 id="why-heading" className="font-display text-2xl font-black tracking-tight">
            Why procurement teams use SourceNeed
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title}>
                <h3 className="border-t-2 border-cobalt pt-3 font-display text-base font-bold">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            Want the full cost breakdown? Read{" "}
            <Link
              href="/blog/why-local-chemical-sourcing-beats-overseas-price-lists"
              className="font-semibold text-cobalt hover:text-cobalt-deep"
            >
              why local sourcing often beats the overseas price list
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-cobalt text-paper">
        <div className="shell flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display text-2xl font-black tracking-tight">
            Can&apos;t find a material? Tell us what you&apos;re sourcing.
          </h2>
          <Link href="/contact" className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-cobalt">
            Request a material
          </Link>
        </div>
      </section>
    </>
  );
}
