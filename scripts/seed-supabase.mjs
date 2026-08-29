/**
 * Pushes src/data/products.json into the sourceneed_products table.
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... node scripts/seed-supabase.mjs
 */
import { readFileSync } from "node:fs";

const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) {
  console.error("Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const products = JSON.parse(
  readFileSync(new URL("../src/data/products.json", import.meta.url), "utf8")
);

const rows = products.map((p) => ({
  slug: p.slug,
  name: p.name,
  cas_number: p.casNumber,
  category: p.category,
  grade: p.grade,
  quantity_value: p.quantityValue,
  quantity_unit: p.quantityUnit,
  packaging: p.packaging,
  location_city: p.locationCity,
  location_province: p.locationProvince,
  supplier_name: p.supplierName,
  supplier_verified: p.supplierVerified,
  coa_available: p.coaAvailable,
  sds_available: p.sdsAvailable,
  listing_type: p.listingType,
  price_cad: p.priceCad,
  price_unit: p.priceUnit,
  description: p.description,
  featured: p.featured,
}));

const res = await fetch(`${url}/rest/v1/sourceneed_products?on_conflict=slug`, {
  method: "POST",
  headers: {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
    Prefer: "resolution=merge-duplicates",
  },
  body: JSON.stringify(rows),
});

if (!res.ok) {
  console.error("Seed failed:", res.status, await res.text());
  process.exit(1);
}
console.log(`Seeded ${rows.length} products.`);
