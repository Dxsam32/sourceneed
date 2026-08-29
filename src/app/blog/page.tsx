import type { Metadata } from "next";
import Link from "next/link";
import { articles } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Practical Guides on Surplus Chemical Sourcing",
  description:
    "Guides on chemical sourcing economics, surplus inventory recovery, cross-border duty costs, COA/SDS basics, and the freight emissions math of regional supply chains.",
  alternates: { canonical: "/blog" },
};

const dateFmt = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default function BlogIndexPage() {
  const sorted = [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <div className="border-b border-line bg-paper-2/50">
        <div className="shell py-14">
          <h1 className="mt-2 max-w-2xl font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Sourcing, spelled out.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">
            Practical writing for people who buy and sell chemicals for a
            living. Numbers over adjectives.
          </p>
        </div>
      </div>

      <div className="shell py-14">
        <div className="grid gap-px overflow-hidden border border-line bg-line">
          {sorted.map((a) => (
            <article key={a.slug} className="group bg-paper p-6 transition-colors hover:bg-paper-2 sm:p-8">
              <p className="text-[0.6875rem] text-ink-soft">
                <time dateTime={a.date}>{dateFmt.format(new Date(a.date))}</time>
                {" · "}
                {a.readingMinutes} min read
              </p>
              <h2 className="mt-2 font-display text-xl font-bold sm:text-2xl">
                <Link href={`/blog/${a.slug}`} className="group-hover:text-cobalt">
                  {a.title}
                </Link>
              </h2>
              <p className="mt-2 max-w-3xl text-[0.95rem] leading-7 text-ink-soft">
                {a.description}
              </p>
              <Link
                href={`/blog/${a.slug}`}
                className="mt-4 inline-block text-xs font-semibold text-cobalt hover:text-cobalt-deep"
                aria-label={`Read: ${a.title}`}
              >
                Read the article →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
