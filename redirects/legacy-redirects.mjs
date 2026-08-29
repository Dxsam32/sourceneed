/**
 * 301 redirect map for every URL that existed on the legacy WordPress site
 * (inventoried from sourceneed.com/wp-sitemap.xml on 2026-08-29).
 *
 * Sources are listed without trailing slashes: Next.js normalizes /foo/ to
 * /foo before these rules run, so both forms of every legacy URL land here.
 */
export const legacyRedirects = [
  // ── Blog posts (leftover study-abroad template content) ────────────────
  { source: "/are-international-students-field-of-study-interests-aligned-with-job-market-needs", destination: "/blog" },
  { source: "/times-higher-education-reveals-the-worlds-most-international-universities-in-2023", destination: "/blog" },
  { source: "/search-in-seconds-for-your-study-abroad-destination", destination: "/blog" },
  { source: "/category/uncategorized", destination: "/blog" },
  { source: "/author/admin", destination: "/blog" },

  // ── WooCommerce shop plumbing ──────────────────────────────────────────
  { source: "/shop", destination: "/catalog" },
  { source: "/cart", destination: "/catalog" },
  { source: "/checkout", destination: "/catalog" },
  { source: "/a-z-list", destination: "/catalog" },
  { source: "/product-tag/product-tags", destination: "/catalog" },

  // ── Accounts ───────────────────────────────────────────────────────────
  { source: "/account", destination: "/login" },
  { source: "/account/login", destination: "/login" },
  { source: "/account/my-account", destination: "/login" },
  { source: "/account/register", destination: "/register" },
  { source: "/account/vendor-register", destination: "/register" },
  { source: "/store-manager", destination: "/for-sellers" },
  { source: "/vendor-membership", destination: "/pricing" },
  { source: "/store/farachem1", destination: "/catalog?supplier=Farachem" },

  // ── Template "inner" pages ─────────────────────────────────────────────
  { source: "/inner", destination: "/" },
  { source: "/inner/for-buyer", destination: "/for-buyers" },
  { source: "/inner/for-seller", destination: "/for-sellers" },
  { source: "/inner/for-buyer-and-seller", destination: "/pricing" },
  { source: "/inner/our-story", destination: "/our-story" },

  // ── Info pages ─────────────────────────────────────────────────────────
  { source: "/terms-and-conditions", destination: "/terms" },
  { source: "/refund_returns", destination: "/terms" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/faq", destination: "/contact" },

  // ── Products (real listings keep their material; demos go to catalog) ──
  { source: "/product/hydrolyzed-hyaluronic-acid-farahyal-hac-xs", destination: "/catalog/hydrolyzed-hyaluronic-acid-farahyal-hac-xs" },
  { source: "/product/zea-mays-corn-starch-polyvinyl-alcohol-glycerin-celus-bi-feel-10-2", destination: "/catalog/celus-bi-feel-10-2-corn-starch-blend" },
  { source: "/product/vitamin-k", destination: "/catalog/vitamin-k1-phytonadione" },
  { source: "/product/example-product-with-all-features", destination: "/catalog" },
  { source: "/product/example-product-with-all-featuresvariable-product-99-9-compilated", destination: "/catalog" },
  { source: "/product/:slug*", destination: "/catalog" },

  // ── Product taxonomies ─────────────────────────────────────────────────
  { source: "/product-category/personal-care", destination: "/catalog?category=personal-care-cosmetics" },
  { source: "/product-category/:slug*", destination: "/catalog" },
  { source: "/product_traits/:slug*", destination: "/catalog" },
  { source: "/product_functionality/:slug*", destination: "/catalog?category=personal-care-cosmetics" },
  { source: "/product_markets/:slug*", destination: "/catalog?category=personal-care-cosmetics" },
  { source: "/variable_product/:slug*", destination: "/catalog" },
];
