import type { Metadata } from "next";
import Link from "next/link";
import ManifestTable from "@/components/ManifestTable";
import JsonLd from "@/components/JsonLd";
import { getProducts, getFeaturedProducts, categoryLabels } from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SourceNeed — Surplus & Stocked Chemicals Marketplace, North America",
  description:
    "Source surplus chemicals in North America from verified suppliers. Every lot lists with COA and SDS. Browse the open catalog — no registration required to see inventory.",
  alternates: { canonical: "/" },
};

export const revalidate = 3600;

const paths = [
  {
    title: "Buyer",
    body: "Search the open catalog by product name or CAS number. Review the lot's COA and SDS before you commit. Request a quote; we coordinate compliant freight to your dock.",
    cta: { href: "/for-buyers", label: "How buying works" },
  },
  {
    title: "Seller",
    body: "List surplus or stocked inventory with its lot documents. We verify your business once, then your listings reach procurement teams across North America.",
    cta: { href: "/for-sellers", label: "How selling works" },
  },
  {
    title: "Buyer + Seller",
    body: "Companies that both buy and sell on SourceNeed get volume discounts on transaction fees across both sides of their account.",
    cta: { href: "/pricing", label: "See pricing" },
  },
];

const trustItems = [
  {
    title: "COA on every lot",
    body: "A lot-specific certificate of analysis is required before any listing goes live. No generic spec sheets.",
  },
  {
    title: "SDS library",
    body: "Current safety data sheets are attached to every listing and downloadable before purchase.",
  },
  {
    title: "Verified suppliers",
    body: "We check business registration, warehouse location, and documentation practices before a supplier earns the badge.",
  },
  {
    title: "Hazmat-capable freight",
    body: "Regulated materials move only with TDG/DOT-certified carrier partners. We coordinate the paperwork.",
  },
];

export default async function HomePage() {
  const [products, featured] = await Promise.all([
    getProducts(),
    getFeaturedProducts(6),
  ]);
  const provinceCount = new Set(products.map((p) => p.locationProvince)).size;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SourceNeed",
          legalName: site.legalName,
          url: site.url,
          email: site.email,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address.street,
            addressLocality: site.address.city,
            addressRegion: site.address.region,
            postalCode: site.address.postalCode,
            addressCountry: site.address.country,
          },
          description:
            "B2B marketplace for surplus and stocked chemicals in North America, operated by Farachem Solutions Inc.",
        }}
      />

      {/* Hero */}
      <section className="border-b border-line">
        <div className="shell py-16 lg:py-24">
          <p className="label-mono">
            North American B2B marketplace · Operated by {site.legalName}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            The chemicals you need are already on this continent.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-soft">
            SourceNeed connects buyers with stocked and surplus chemical
            inventory across North America. Shorter freight, no border
            surprises, and lot documents you can read before you buy.
          </p>

          <form
            action="/catalog"
            method="get"
            role="search"
            className="mt-8 flex max-w-xl border-2 border-ink bg-paper"
          >
            <label htmlFor="hero-search" className="sr-only">
              Search the catalog by product name or CAS number
            </label>
            <input
              id="hero-search"
              type="search"
              name="q"
              placeholder="Product name or CAS number…"
              className="min-w-0 flex-1 bg-transparent px-4 py-3.5 font-mono text-sm placeholder:text-ink-soft/60 focus:outline-none"
            />
            <button type="submit" className="btn-primary shrink-0 !rounded-none">
              Search
            </button>
          </form>

          <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">
            {products.length} active lots · {provinceCount} provinces · No
            registration required to browse
          </p>
        </div>
      </section>

      {/* Live manifest preview */}
      <section aria-labelledby="manifest-heading" className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label-mono">Live from the catalog</p>
              <h2 id="manifest-heading" className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl">
                On the manifest right now
              </h2>
            </div>
            <Link href="/catalog" className="btn-secondary">
              Browse the full catalog
            </Link>
          </div>
          <ManifestTable products={featured} caption="Lot manifest — extract" />
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-heading" className="border-b border-line">
        <div className="shell py-14">
          <p className="label-mono">How it works</p>
          <h2 id="how-heading" className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl">
            Three ways to use SourceNeed
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {paths.map((p, i) => (
              <article key={p.title} className="flex flex-col bg-paper p-6">
                <span className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-cobalt">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">{p.body}</p>
                <Link
                  href={p.cta.href}
                  className="mt-5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cobalt hover:text-cobalt-deep"
                >
                  {p.cta.label} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Trust band */}
      <section aria-labelledby="trust-heading" className="border-b border-ink bg-ink text-paper">
        <div className="shell py-14">
          <p className="label-mono !text-paper/50">Compliance is the product</p>
          <h2 id="trust-heading" className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl">
            Built for a regulated industry
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((t) => (
              <div key={t.title}>
                <h3 className="border-t-2 border-amber pt-3 font-display text-base font-bold">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-paper/70">{t.body}</p>
              </div>
            ))}
          </div>
          <Link href="/compliance" className="btn-secondary mt-8 !border-paper !text-paper hover:!bg-paper hover:!text-ink">
            Read our compliance standards
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section aria-labelledby="cat-heading" className="border-b border-line">
        <div className="shell py-14">
          <p className="label-mono">Categories</p>
          <h2 id="cat-heading" className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl">
            What moves on SourceNeed
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {(Object.keys(categoryLabels) as Array<keyof typeof categoryLabels>).map(
              (key) => {
                const count = products.filter((p) => p.category === key).length;
                return (
                  <Link
                    key={key}
                    href={`/catalog?category=${key}`}
                    className="group bg-paper p-6 transition-colors hover:bg-paper-2"
                  >
                    <h3 className="font-display text-lg font-bold group-hover:text-cobalt">
                      {categoryLabels[key]}
                    </h3>
                    <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">
                      {count} active {count === 1 ? "lot" : "lots"} →
                    </p>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Sustainability as logistics */}
      <section aria-labelledby="sus-heading" className="border-b border-line bg-paper-2/50">
        <div className="shell grid gap-10 py-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="label-mono">Sustainability, as logistics</p>
            <h2 id="sus-heading" className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl">
              A lot trucked 100 km emits ~97% less freight CO₂e than one
              shipped 15,000 km.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-7 text-ink-soft">
              We don&apos;t do vague green language. Shorter supply lines mean
              lower freight cost, fewer border fees, faster delivery, and less
              material written off to disposal. The emissions reduction is a
              by-product of good logistics — and it&apos;s arithmetic you can
              check on any bill of lading.
            </p>
            <Link
              href="/blog/freight-emissions-math-regional-chemical-sourcing"
              className="mt-5 inline-block font-mono text-xs font-semibold uppercase tracking-[0.12em] text-cobalt hover:text-cobalt-deep"
            >
              See the full calculation →
            </Link>
          </div>
          <div className="border border-ink bg-paper p-6">
            <p className="label-mono">Worked example · 10-tonne lot to Toronto</p>
            <dl className="mt-4 space-y-4">
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <dt className="text-sm text-ink-soft">Overseas route (~16,800 km, ocean + road)</dt>
                <dd className="whitespace-nowrap font-mono text-sm font-semibold">≈ 3–4 t CO₂e</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <dt className="text-sm text-ink-soft">Regional surplus (~100 km, road)</dt>
                <dd className="whitespace-nowrap font-mono text-sm font-semibold">≈ 0.06–0.1 t CO₂e</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-sm font-semibold text-ink">Freight emissions avoided</dt>
                <dd className="whitespace-nowrap font-mono text-sm font-bold text-cobalt">≈ 97%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials — placeholder slots */}
      <section aria-labelledby="testimonial-heading" className="border-b border-line">
        <div className="shell py-14">
          <p className="label-mono">Customer results</p>
          <h2 id="testimonial-heading" className="mt-2 font-display text-2xl font-black tracking-tight sm:text-3xl">
            What buyers and sellers say
          </h2>
          <div className="mt-8 grid gap-px overflow-hidden border border-dashed border-line-dark bg-line md:grid-cols-2">
            {[1, 2].map((i) => (
              <div key={i} className="bg-paper p-6">
                <p className="font-mono text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-amber-deep">
                  Testimonial slot — awaiting verified customer
                </p>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  We only publish testimonials with a full name, title, and
                  company. This slot stays empty until a real customer fills it.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-cobalt text-paper">
        <div className="shell flex flex-col items-start gap-6 py-14 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-2xl font-black tracking-tight sm:text-3xl">
              Have surplus on the shelf? Need material this month?
            </h2>
            <p className="mt-2 max-w-xl text-paper/80">
              Browse without an account, or register to list inventory and
              request quotes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/catalog" className="btn-secondary !border-paper !text-paper hover:!bg-paper hover:!text-cobalt">
              Browse catalog
            </Link>
            <Link href="/register" className="btn-primary !bg-ink hover:!bg-black">
              Register free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
