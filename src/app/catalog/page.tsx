import type { Metadata } from "next";
import ManifestTable from "@/components/ManifestTable";
import JsonLd from "@/components/JsonLd";
import {
  getProducts,
  filterProducts,
  categoryLabels,
  provinceLabels,
  type Category,
} from "@/lib/catalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chemical Catalog — Browse Surplus & Stocked Lots",
  description:
    "Browse surplus and stocked chemical lots across North America. Filter by product name, CAS number, category, grade, quantity, province, and supplier. No registration required.",
  alternates: { canonical: "/catalog" },
};

export const revalidate = 3600;

interface SearchParams {
  q?: string;
  category?: string;
  grade?: string;
  province?: string;
  supplier?: string;
  minQty?: string;
}

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const products = await getProducts();

  const grades = Array.from(
    new Set(products.map((p) => p.grade).filter(Boolean))
  ).sort() as string[];
  const provinces = Array.from(
    new Set(products.map((p) => p.locationProvince).filter(Boolean))
  ).sort() as string[];
  const suppliers = Array.from(
    new Set(products.map((p) => p.supplierName).filter(Boolean))
  ).sort() as string[];

  const filters = {
    q: searchParams.q,
    category: searchParams.category,
    grade: searchParams.grade,
    province: searchParams.province,
    supplier: searchParams.supplier,
    minQty: searchParams.minQty ? Number(searchParams.minQty) : undefined,
  };
  const results = filterProducts(products, filters);
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: site.url },
            { "@type": "ListItem", position: 2, name: "Catalog", item: `${site.url}/catalog` },
          ],
        }}
      />

      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-10">
          <p className="label-mono">Open catalog · No account needed</p>
          <h1 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
            Lot catalog
          </h1>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-ink-soft">
            Every listing carries a lot-specific COA and a current SDS. Prices
            shown are asking prices in CAD; lots marked RFQ are quoted on
            request.
          </p>
        </div>
      </div>

      <div className="shell py-10">
        <form
          action="/catalog"
          method="get"
          className="mb-8 grid gap-4 border border-ink bg-paper p-4 sm:grid-cols-2 lg:grid-cols-6"
        >
          <div className="sm:col-span-2">
            <label htmlFor="q" className="label-mono block">
              Product or CAS №
            </label>
            <input
              id="q"
              name="q"
              type="search"
              defaultValue={searchParams.q ?? ""}
              placeholder="e.g. glycerin or 56-81-5"
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2 font-mono text-sm focus:border-cobalt focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="category" className="label-mono block">
              Category
            </label>
            <select
              id="category"
              name="category"
              defaultValue={searchParams.category ?? ""}
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2 font-mono text-sm focus:border-cobalt focus:outline-none"
            >
              <option value="">All</option>
              {(Object.keys(categoryLabels) as Category[]).map((c) => (
                <option key={c} value={c}>
                  {categoryLabels[c]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="grade" className="label-mono block">
              Grade
            </label>
            <select
              id="grade"
              name="grade"
              defaultValue={searchParams.grade ?? ""}
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2 font-mono text-sm focus:border-cobalt focus:outline-none"
            >
              <option value="">All</option>
              {grades.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="province" className="label-mono block">
              Province
            </label>
            <select
              id="province"
              name="province"
              defaultValue={searchParams.province ?? ""}
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2 font-mono text-sm focus:border-cobalt focus:outline-none"
            >
              <option value="">All</option>
              {provinces.map((p) => (
                <option key={p} value={p}>
                  {provinceLabels[p] ?? p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="supplier" className="label-mono block">
              Supplier
            </label>
            <select
              id="supplier"
              name="supplier"
              defaultValue={searchParams.supplier ?? ""}
              className="mt-1.5 w-full border border-line bg-paper px-3 py-2 font-mono text-sm focus:border-cobalt focus:outline-none"
            >
              <option value="">All</option>
              {suppliers.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end gap-2 sm:col-span-2 lg:col-span-6">
            <div className="flex-1 sm:max-w-[12rem]">
              <label htmlFor="minQty" className="label-mono block">
                Min quantity
              </label>
              <input
                id="minQty"
                name="minQty"
                type="number"
                min="0"
                defaultValue={searchParams.minQty ?? ""}
                placeholder="kg / L"
                className="mt-1.5 w-full border border-line bg-paper px-3 py-2 font-mono text-sm focus:border-cobalt focus:outline-none"
              />
            </div>
            <button type="submit" className="btn-primary">
              Apply filters
            </button>
            {hasFilters && (
              <a href="/catalog" className="btn-secondary">
                Clear
              </a>
            )}
          </div>
        </form>

        {results.length > 0 ? (
          <ManifestTable
            products={results}
            caption={hasFilters ? "Lot manifest — filtered" : "Lot manifest — all lots"}
          />
        ) : (
          <div className="border border-dashed border-line-dark bg-paper p-10 text-center">
            <p className="font-display text-lg font-bold">No lots match those filters.</p>
            <p className="mt-2 text-sm text-ink-soft">
              Try clearing a filter, or tell us what you&apos;re sourcing — new
              lots list weekly.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <a href="/catalog" className="btn-secondary">
                Clear filters
              </a>
              <a href="/contact" className="btn-primary">
                Request a material
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
