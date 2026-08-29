import seed from "@/data/products.json";

export type Category =
  | "personal-care-cosmetics"
  | "food-nutraceuticals"
  | "industrial";

export interface Product {
  slug: string;
  name: string;
  casNumber: string | null;
  category: Category;
  grade: string | null;
  quantityValue: number;
  quantityUnit: string;
  packaging: string | null;
  locationCity: string | null;
  locationProvince: string | null;
  supplierName: string | null;
  supplierVerified: boolean;
  coaAvailable: boolean;
  sdsAvailable: boolean;
  /** When set, the SDS/COA buttons become direct downloads; otherwise they
   *  fall back to a document request link. */
  sdsUrl?: string | null;
  coaUrl?: string | null;
  listingType: "surplus" | "stocked";
  priceCad: number | null;
  priceUnit: string;
  description: string;
  featured: boolean;
}

export const categoryLabels: Record<Category, string> = {
  "personal-care-cosmetics": "Personal care & cosmetics",
  "food-nutraceuticals": "Food & nutraceuticals",
  industrial: "Industrial",
};

export const provinceLabels: Record<string, string> = {
  ON: "Ontario",
  QC: "Quebec",
  BC: "British Columbia",
  AB: "Alberta",
  MB: "Manitoba",
  SK: "Saskatchewan",
};

interface SupabaseRow {
  slug: string;
  name: string;
  cas_number: string | null;
  category: Category;
  grade: string | null;
  quantity_value: number;
  quantity_unit: string;
  packaging: string | null;
  location_city: string | null;
  location_province: string | null;
  supplier_name: string | null;
  supplier_verified: boolean;
  coa_available: boolean;
  sds_available: boolean;
  sds_url: string | null;
  coa_url: string | null;
  listing_type: "surplus" | "stocked";
  price_cad: number | null;
  price_unit: string;
  description: string;
  featured: boolean;
}

function fromRow(r: SupabaseRow): Product {
  return {
    slug: r.slug,
    name: r.name,
    casNumber: r.cas_number,
    category: r.category,
    grade: r.grade,
    quantityValue: Number(r.quantity_value),
    quantityUnit: r.quantity_unit,
    packaging: r.packaging,
    locationCity: r.location_city,
    locationProvince: r.location_province,
    supplierName: r.supplier_name,
    supplierVerified: r.supplier_verified,
    coaAvailable: r.coa_available,
    sdsAvailable: r.sds_available,
    sdsUrl: r.sds_url,
    coaUrl: r.coa_url,
    listingType: r.listing_type,
    priceCad: r.price_cad === null ? null : Number(r.price_cad),
    priceUnit: r.price_unit,
    description: r.description,
    featured: r.featured,
  };
}

/**
 * Products come from Supabase when NEXT_PUBLIC_SUPABASE_URL and
 * NEXT_PUBLIC_SUPABASE_ANON_KEY are set; otherwise from the committed seed
 * file so the site always builds and renders. Pages are statically generated
 * and revalidated, so this runs at build/revalidate time, not per request.
 */
export async function getProducts(): Promise<Product[]> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (url && key) {
    try {
      const res = await fetch(
        `${url}/rest/v1/sourceneed_products?select=*&order=name.asc`,
        {
          headers: { apikey: key, Authorization: `Bearer ${key}` },
          next: { revalidate: 3600 },
        }
      );
      if (res.ok) {
        const rows: SupabaseRow[] = await res.json();
        if (rows.length > 0) return rows.map(fromRow);
      }
    } catch {
      // fall through to seed data
    }
  }
  return seed as Product[];
}

export async function getProduct(slug: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((p) => p.slug === slug);
}

export async function getFeaturedProducts(limit = 6): Promise<Product[]> {
  const products = await getProducts();
  const featured = products.filter((p) => p.featured);
  return (featured.length >= limit ? featured : products).slice(0, limit);
}

export interface CatalogFilters {
  q?: string;
  category?: string;
  grade?: string;
  province?: string;
  supplier?: string;
  minQty?: number;
}

export function filterProducts(
  products: Product[],
  f: CatalogFilters
): Product[] {
  return products.filter((p) => {
    if (f.q) {
      const q = f.q.trim().toLowerCase();
      const hit =
        p.name.toLowerCase().includes(q) ||
        (p.casNumber ?? "").toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      if (!hit) return false;
    }
    if (f.category && p.category !== f.category) return false;
    if (f.grade && (p.grade ?? "").toLowerCase() !== f.grade.toLowerCase())
      return false;
    if (f.province && p.locationProvince !== f.province) return false;
    if (
      f.supplier &&
      !(p.supplierName ?? "").toLowerCase().includes(f.supplier.toLowerCase())
    )
      return false;
    if (f.minQty && p.quantityValue < f.minQty) return false;
    return true;
  });
}

export function formatQuantity(p: Product): string {
  return `${p.quantityValue.toLocaleString("en-CA")} ${p.quantityUnit}`;
}

export function formatPrice(p: Product): string {
  if (p.priceCad === null) return "RFQ";
  return `$${p.priceCad.toFixed(2)} ${p.priceUnit}`;
}
