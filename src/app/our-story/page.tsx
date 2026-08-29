import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story — Why Farachem Built SourceNeed",
  description:
    "SourceNeed was built by Farachem Solutions Inc., a Toronto chemical distributor, after years of watching good material sit idle in one warehouse while buyers ordered the same product from overseas.",
  alternates: { canonical: "/our-story" },
};

export default function OurStoryPage() {
  return (
    <>
      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <p className="label-mono">Our story</p>
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-black tracking-tight sm:text-4xl">
            We kept watching the same absurd trade happen.
          </h1>
        </div>
      </div>

      <section className="border-b border-line">
        <div className="shell max-w-3xl py-14">
          <p className="text-[0.95rem] leading-7 text-ink-soft">
            {site.legalName} is a chemical distributor based in Toronto. For
            years, our day job put us inside warehouses and procurement calls
            across Ontario and beyond, and we kept seeing the same pattern: a
            manufacturer in one city paying to store — and eventually dispose
            of — the exact material a company two hours away was ordering from
            overseas at a ten-week lead time.
          </p>
          <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
            Both sides lost. The seller wrote off good inventory. The buyer
            paid ocean freight, brokerage, and duties for material that
            already existed on this continent, documented and ready to ship.
            The only thing missing was a place where the two could find each
            other.
          </p>
          <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
            SourceNeed is that place. It&apos;s a working marketplace, not a
            directory: lots list with their actual documents, suppliers are
            verified before they earn the badge, and freight — including
            regulated hazmat carriage — is coordinated as part of every quote.
            We built the compliance layer first because in this industry,
            nothing moves without it.
          </p>
          <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
            We are not the only company working on surplus chemical trading,
            and that&apos;s fine by us. The surplus problem is bigger than any
            one platform. Our bet is simple: the marketplace that treats
            documents, verification, and freight as the product — not an
            afterthought — is the one procurement teams will actually use
            twice.
          </p>

          <div className="mt-10 border border-ink bg-paper p-6">
            <p className="label-mono">The operating company</p>
            <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">
              SourceNeed is operated by {site.legalName}, {site.address.street},{" "}
              {site.address.city}, {site.address.region}{" "}
              {site.address.postalCode}. Reach the team directly at{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-cobalt hover:text-cobalt-deep">
                {site.email}
              </a>{" "}
              or{" "}
              <a href={`tel:${site.phone}`} className="font-semibold text-cobalt hover:text-cobalt-deep">
                {site.phoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cobalt text-paper">
        <div className="shell flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display text-2xl font-black tracking-tight">
            See what&apos;s on the manifest today.
          </h2>
          <Link href="/catalog" className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-cobalt">
            Browse the catalog
          </Link>
        </div>
      </section>
    </>
  );
}
