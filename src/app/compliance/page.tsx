import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance — COA, SDS, Verified Suppliers & Hazmat Freight",
  description:
    "How SourceNeed handles compliance in chemical trading: lot-specific COAs, a current SDS library, a verified supplier program, and hazmat-capable freight partners under TDG/DOT.",
  alternates: { canonical: "/compliance" },
};

const pillars = [
  {
    title: "COA on every lot",
    body: "A certificate of analysis for the specific lot — not a generic spec sheet — is required before any listing goes live. The lot number on the COA must match the lot number on the containers. Buyers can review the COA before committing to a purchase, and it ships with the material.",
  },
  {
    title: "SDS library",
    body: "Every listing carries a current safety data sheet in the 16-section GHS format. In Canada, WHMIS requires suppliers of hazardous workplace products to provide a compliant SDS; we treat a missing or outdated SDS as disqualifying for a listing, full stop.",
  },
  {
    title: "Verified supplier program",
    body: "Before a supplier earns the verified badge, we confirm business registration, warehouse location, storage conditions, and documentation practices. Listings from suppliers still in review are marked 'verification pending' so buyers can make their own call.",
  },
  {
    title: "Hazmat-capable freight partners",
    body: "Regulated materials — corrosives, oxidizers, flammables — move only with carriers certified under Canada's TDG regulations and, for cross-border loads, the US DOT regime. We coordinate placards, shipping documents, and emergency contact requirements as part of every quote.",
  },
];

const buyerChecks = [
  "Match the lot number on the COA to the lot number on the packaging",
  "Confirm the grade claimed matches the tests reported",
  "Check the manufacture and retest/expiry dates against your usage timeline",
  "Read the SDS transport section before booking your own freight",
  "Ask where and how the material has been stored — sellers on SourceNeed are expected to answer",
];

export default function CompliancePage() {
  return (
    <>
      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Chemicals are regulated. Our marketplace acts like it.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            Trust in chemical trading isn&apos;t a brand value — it&apos;s
            documents, verification, and carriers with the right
            certifications. Here is exactly what we require.
          </p>
        </div>
      </div>

      <section aria-label="Compliance pillars" className="border-b border-line">
        <div className="shell grid gap-px overflow-hidden border border-line bg-line py-0 md:grid-cols-2">
          {pillars.map((p) => (
            <article key={p.title} className="bg-paper p-8">
              <h2 className="border-t-2 border-amber pt-3 font-display text-xl font-bold">
                {p.title}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="checklist-heading" className="border-b border-line">
        <div className="shell grid gap-10 py-14 lg:grid-cols-2">
          <div>
            <h2 id="checklist-heading" className="font-display text-2xl font-extrabold tracking-tight">
              The buyer&apos;s five-point document check
            </h2>
            <ol className="mt-6 space-y-3">
              {buyerChecks.map((c, i) => (
                <li key={c} className="flex gap-3 text-[0.95rem] leading-7 text-ink-soft">
                  <span className="mt-0.5 text-xs font-semibold text-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {c}
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-ink-soft">
              New to lot documents? Start with{" "}
              <Link
                href="/blog/coa-and-sds-basics-for-chemical-buyers"
                className="font-semibold text-cobalt hover:text-cobalt-deep"
              >
                COA and SDS basics for chemical buyers
              </Link>
              .
            </p>
          </div>
          <div className="border border-ink bg-paper p-6">
            <p className="label-mono">A note on scope</p>
            <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">
              SourceNeed is a marketplace, not a laboratory or a regulator. We
              verify that documents exist, match their lots, and come from
              identified suppliers — we do not independently retest material.
              Buyers with critical applications should retest on receipt, as
              they would with any supplier. We&apos;ll always tell you what we
              have verified and what we haven&apos;t.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="shell flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display text-2xl font-extrabold tracking-tight">
            Questions about a specific material or shipment?
          </h2>
          <Link href="/contact" className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-ink">
            Ask our compliance desk
          </Link>
        </div>
      </section>
    </>
  );
}
