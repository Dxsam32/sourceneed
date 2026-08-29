import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Quotes, Listings & Material Searches",
  description:
    "Reach the SourceNeed team for quote requests, seller onboarding, or a material search. Email info@sourceneed.com or call +1 (647) 877-6665. Toronto, Canada.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { subject?: string };
}) {
  return (
    <>
      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <p className="label-mono">Contact</p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-black tracking-tight sm:text-4xl">
            Talk to a person who knows the inventory.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            Quote requests, seller onboarding, or a material you can&apos;t
            find — typical response within one business day.
          </p>
        </div>
      </div>

      <div className="shell grid gap-10 py-14 lg:grid-cols-[22rem_1fr]">
        <aside>
          <div className="border border-ink bg-paper p-6">
            <h2 className="label-mono">Direct lines</h2>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                  Email
                </dt>
                <dd className="mt-0.5">
                  <a href={`mailto:${site.email}`} className="font-semibold text-cobalt hover:text-cobalt-deep">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                  Phone
                </dt>
                <dd className="mt-0.5">
                  <a href={`tel:${site.phone}`} className="font-semibold text-cobalt hover:text-cobalt-deep">
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
                  Office
                </dt>
                <dd className="mt-0.5 leading-6 text-ink-soft">
                  {site.legalName}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.region} {site.address.postalCode}
                </dd>
              </div>
            </dl>
          </div>
        </aside>

        <div>
          <ContactForm defaultSubject={searchParams.subject} />
        </div>
      </div>
    </>
  );
}
