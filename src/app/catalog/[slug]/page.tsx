import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { DocBadge, VerifiedBadge, TypeBadge } from "@/components/Badges";
import {
  getProduct,
  getProducts,
  categoryLabels,
  provinceLabels,
  formatPrice,
  formatQuantity,
} from "@/lib/catalog";
import { site } from "@/lib/site";

export const revalidate = 3600;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const p = await getProduct(params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.grade ?? "Bulk"} ${
      p.listingType === "surplus" ? "Surplus" : "Stocked"
    } Lot, ${p.locationProvince}`,
    description: `${formatQuantity(p)} of ${p.name}${
      p.casNumber ? ` (CAS ${p.casNumber})` : ""
    } in ${p.locationCity}, ${p.locationProvince}. COA and SDS on file. ${
      p.priceCad ? `Asking $${p.priceCad.toFixed(2)} CAD ${p.priceUnit}.` : "Quoted on request."
    }`,
    alternates: { canonical: `/catalog/${p.slug}` },
  };
}

function docHref(p: { name: string }, doc: "SDS" | "COA", url?: string | null) {
  if (url) return url;
  return `mailto:${site.email}?subject=${encodeURIComponent(
    `${doc} request — ${p.name}`
  )}`;
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const p = await getProduct(params.slug);
  if (!p) notFound();

  const specRows: Array<[string, string]> = [
    ["Material", p.name],
    ["CAS number", p.casNumber ?? "Not applicable (blend)"],
    ["Category", categoryLabels[p.category]],
    ["Grade", p.grade ?? "Unspecified"],
    ["Lot quantity", formatQuantity(p)],
    ["Packaging", p.packaging ?? "Ask supplier"],
    [
      "Location",
      `${p.locationCity}, ${provinceLabels[p.locationProvince ?? ""] ?? p.locationProvince}, Canada`,
    ],
    ["Listing type", p.listingType === "surplus" ? "Surplus lot" : "Stocked inventory"],
    ["Supplier", p.supplierName ?? "Undisclosed until quote"],
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          sku: p.slug,
          url: `${site.url}/catalog/${p.slug}`,
          category: categoryLabels[p.category],
          ...(p.casNumber
            ? {
                additionalProperty: {
                  "@type": "PropertyValue",
                  name: "CAS Number",
                  value: p.casNumber,
                },
              }
            : {}),
          offers: {
            "@type": "Offer",
            url: `${site.url}/catalog/${p.slug}`,
            priceCurrency: "CAD",
            ...(p.priceCad !== null ? { price: p.priceCad } : {}),
            availability: "https://schema.org/InStock",
            itemCondition: "https://schema.org/NewCondition",
            areaServed: ["CA", "US"],
            seller: {
              "@type": "Organization",
              name: p.supplierName ?? "SourceNeed verified supplier",
            },
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Catalog", item: `${site.url}/catalog` },
            {
              "@type": "ListItem",
              position: 3,
              name: p.name,
              item: `${site.url}/catalog/${p.slug}`,
            },
          ],
        }}
      />

      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-8">
          <nav aria-label="Breadcrumb" className="text-[0.6875rem] text-ink-soft">
            <ol className="flex flex-wrap gap-1.5">
              <li>
                <Link href="/" className="hover:text-cobalt">Home</Link>
                <span aria-hidden="true"> /</span>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-cobalt">Catalog</Link>
                <span aria-hidden="true"> /</span>
              </li>
              <li aria-current="page" className="text-ink">{p.name}</li>
            </ol>
          </nav>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <TypeBadge type={p.listingType} />
            <DocBadge label="COA on file" available={p.coaAvailable} title="Certificate of analysis for this specific lot" />
            <DocBadge label="SDS available" available={p.sdsAvailable} title="Current safety data sheet" />
            <VerifiedBadge verified={p.supplierVerified} />
          </div>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {p.name}
          </h1>
          {p.casNumber && (
            <p className="mt-2 text-sm text-ink-soft">CAS {p.casNumber}</p>
          )}
        </div>
      </div>

      <div className="shell grid gap-10 py-10 lg:grid-cols-[1fr_22rem]">
        <div>
          <section aria-labelledby="spec-heading" className="border border-ink bg-paper">
            <h2
              id="spec-heading"
              className="border-b border-ink bg-ink px-4 py-2.5 text-[0.6875rem] font-semibold text-paper"
            >
              Lot specification
            </h2>
            <dl>
              {specRows.map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line px-4 py-3 last:border-b-0 sm:grid-cols-[12rem_1fr]"
                >
                  <dt className="text-[0.6875rem] font-medium text-ink-soft">
                    {k}
                  </dt>
                  <dd className="text-sm text-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="desc-heading" className="mt-8">
            <h2 id="desc-heading" className="font-display text-xl font-bold">
              About this lot
            </h2>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
              {p.description}
            </p>
          </section>

          <section aria-labelledby="docs-heading" className="mt-8">
            <h2 id="docs-heading" className="font-display text-xl font-bold">
              Documents
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={docHref(p, "SDS", p.sdsUrl)}
                className="btn-secondary"
                {...(p.sdsUrl ? { download: true } : {})}
              >
                {p.sdsUrl ? "Download SDS (PDF)" : "Request SDS copy"}
              </a>
              <a
                href={docHref(p, "COA", p.coaUrl)}
                className="btn-secondary"
                {...(p.coaUrl ? { download: true } : {})}
              >
                {p.coaUrl ? "Download lot COA (PDF)" : "Request lot COA"}
              </a>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-soft">
              Every SourceNeed listing requires a lot-specific certificate of
              analysis and a current safety data sheet before it goes live.
              Document copies are released to serious buyers on request and
              always before any purchase commitment.
            </p>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="border-2 border-ink bg-paper p-5">
            <p className="label-mono">Asking price</p>
            <p className="mt-1 font-display text-3xl font-extrabold">
              {formatPrice(p)}
              {p.priceCad !== null && (
                <span className="ml-2 align-middle text-xs font-medium text-ink-soft">
                  CAD
                </span>
              )}
            </p>
            {p.priceCad === null && (
              <p className="mt-1 text-sm text-ink-soft">
                Quoted on request — pricing depends on quantity and freight.
              </p>
            )}
            <Link
              href={`/contact?subject=${encodeURIComponent(`Quote request — ${p.name} (${formatQuantity(p)})`)}`}
              className="btn-primary mt-5 w-full"
            >
              Request a quote
            </Link>
            <p className="mt-4 border-t border-line pt-4 text-sm leading-6 text-ink-soft">
              Quotes include freight options to your dock, hazmat-compliant
              where required. Typical response within one business day.
            </p>
            <p className="mt-3 text-[0.6875rem] text-ink-soft">
              Or call{" "}
              <a href={`tel:${site.phone}`} className="text-cobalt hover:text-cobalt-deep">
                {site.phoneDisplay}
              </a>
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
