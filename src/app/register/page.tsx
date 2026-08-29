import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Register — Buyer & Seller Accounts",
  description:
    "Request a SourceNeed account as a buyer, seller, or both. Browsing is free without an account; registration unlocks listings, quotes, and volume pricing.",
  alternates: { canonical: "/register" },
};

export default function RegisterPage() {
  return (
    <div className="shell grid gap-10 py-14 lg:grid-cols-[1fr_28rem]">
      <div>
        <p className="label-mono">Register</p>
        <h1 className="mt-2 max-w-xl font-display text-3xl font-black tracking-tight sm:text-4xl">
          Accounts are set up personally. On purpose.
        </h1>
        <p className="mt-4 max-w-xl text-[0.95rem] leading-7 text-ink-soft">
          Chemicals is not a click-to-signup industry. During our launch phase
          every account — buyer or seller — is reviewed and set up by a person,
          usually within one business day. Sellers complete verification at the
          same time, so the badge means something.
        </p>
        <ul className="mt-6 max-w-xl space-y-3">
          {[
            "Buyers: quote history, saved searches, and priority sourcing",
            "Sellers: verified badge, unlimited documented listings",
            "Both: volume discounts on success fees",
          ].map((f) => (
            <li key={f} className="flex gap-3 text-sm leading-6 text-ink-soft">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-cobalt" />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink-soft">
          No account is needed to browse the catalog — it&apos;s open by
          design.
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}
