/**
 * Crawls the running site and fails on any broken internal link or any
 * href="#" anchor. Usage: node scripts/check-links.mjs [baseUrl]
 * Default base: http://localhost:3000
 */
const base = process.argv[2] ?? "http://localhost:3000";
const origin = new URL(base).origin;

const seen = new Set();
const queue = ["/"];
const failures = [];
let checked = 0;

function extractHrefs(html) {
  const hrefs = [];
  const re = /href="([^"]*)"/g;
  let m;
  while ((m = re.exec(html))) hrefs.push(m[1]);
  return hrefs;
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);

  const res = await fetch(origin + path, { redirect: "follow" });
  checked++;
  if (!res.ok) {
    failures.push(`${res.status} ${path}`);
    continue;
  }
  const type = res.headers.get("content-type") ?? "";
  if (!type.includes("text/html")) continue;

  const html = await res.text();
  for (const href of extractHrefs(html)) {
    if (href === "#" || href.startsWith("#!")) {
      failures.push(`dead anchor href="#" on ${path}`);
      continue;
    }
    if (
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("#") ||
      href.startsWith("data:")
    )
      continue;
    if (href.startsWith("http")) {
      const u = new URL(href);
      // The production domain is "internal" even when crawling localhost —
      // canonical tags and OG URLs point there by design.
      const allowed = [origin, "https://sourceneed.com", "https://fonts.googleapis.com", "https://fonts.gstatic.com"];
      if (!allowed.includes(u.origin))
        failures.push(`external link ${href} on ${path}`);
      continue;
    }
    const clean = href.split("#")[0];
    const noQuery = clean.split("?")[0];
    if (noQuery && !seen.has(noQuery)) queue.push(noQuery);
  }
}

console.log(`Checked ${checked} URLs.`);
if (failures.length) {
  console.error("FAILURES:");
  for (const f of failures) console.error("  " + f);
  process.exit(1);
}
console.log("No broken links, no dead anchors, no external domain leaks.");
