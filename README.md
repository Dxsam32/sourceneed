# sourceneed.com — rebuild

B2B marketplace for surplus and stocked chemicals in North America, operated by
Farachem Solutions Inc. (Toronto). Next.js 14 (App Router) + TypeScript +
Tailwind CSS, deployed on Vercel, product data in Supabase Postgres.

## Architecture

Catalog + lead-gen first, transactions later.

- **Product data**: the `sourceneed_products` table in Supabase. When
  `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` are unset (or
  the table is unreachable), the site falls back to the committed seed file
  `src/data/products.json`, so it always builds and renders. Pages are
  statically generated and revalidate hourly.
- **Blog**: 5 seed articles in `src/lib/blog.ts` (no CMS needed yet).
- **Forms**: contact/register compose pre-filled emails in the visitor's own
  mail client (`mailto:`) — zero backend, zero personal data stored, matching
  the launch-phase "accounts are set up personally" positioning. Swap for a
  real backend when self-serve accounts ship.
- **Redirects**: every legacy WordPress URL 301s via
  `redirects/legacy-redirects.mjs` (loaded by `next.config.mjs`). The map was
  inventoried from the old site's `wp-sitemap.xml` on 2026-08-29.

## Environment variables (Vercel → Project Settings)

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Publishable (anon) key — table has public read RLS |

## Commands

```bash
npm run dev          # local dev
npm run build        # production build
npm run check-links  # crawl a running instance; fails on broken links,
                     # href="#" anchors, or external-domain leaks
node scripts/seed-supabase.mjs  # push products.json to Supabase
                                # (needs SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY)
```

## Content notes for launch

- **Demo listings**: the three Farachem lots (Farahyal HAC-XS, Celus-Bi Feel
  10/2, Vitamin K1) carry over from the old site. The other 21 listings are
  realistic seed data — replace supplier names/lots with real inventory before
  marketing the catalog.
- **Testimonials**: placeholder slots render on the homepage and are clearly
  labelled. Only publish testimonials with full name, title, and company.
- **SDS/COA downloads**: buttons fall back to "request a copy" mailto links
  until `sds_url` / `coa_url` are populated on a product row, at which point
  they become direct downloads automatically.
- **DNS cutover**: point sourceneed.com at Vercel; all legacy URLs 301 to
  their new equivalents.

## Deployment state (2026-08-29)

Live at **https://sourceneed-prod.vercel.app** (project `sourceneed-prod`,
team dxsam32s-projects). Because the Vercel MCP connector could only create
projects (not redeploy them), the project's build command fetches the source
tarball from GitHub master:

```
curl -sL https://github.com/Dxsam32/sourceneed/archive/refs/heads/master.tar.gz | tar xz --strip-components=1 && next build
```

**To do in the Vercel dashboard** (one-time cleanup):

1. Connect the `Dxsam32/sourceneed` GitHub repo to the project in
   Settings → Git, and clear the custom build command — then every push
   deploys normally and the repo can go private again.
2. Delete the dead partial projects: `sourceneed`, `sourceneed-site`,
   `sourceneed-web`, `sourceneed-live`, `sourceneed-app`.
3. Add the env vars above so the catalog reads from Supabase.
4. Add the `sourceneed.com` domain when ready to cut over DNS.
