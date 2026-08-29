import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import Markdown from "@/components/Markdown";
import { articles, getArticle } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const a = getArticle(params.slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/blog/${a.slug}` },
    openGraph: {
      type: "article",
      publishedTime: a.date,
      title: a.title,
      description: a.description,
    },
  };
}

const dateFmt = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = getArticle(params.slug);
  if (!a) notFound();

  const others = articles.filter((x) => x.slug !== a.slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.date,
          url: `${site.url}/blog/${a.slug}`,
          author: {
            "@type": "Organization",
            name: "SourceNeed",
            url: site.url,
          },
          publisher: {
            "@type": "Organization",
            name: site.legalName,
            url: site.url,
          },
          mainEntityOfPage: `${site.url}/blog/${a.slug}`,
        }}
      />

      <article>
        <div className="border-b border-line bg-paper-2/50">
          <div className="shell max-w-3xl py-14">
            <nav aria-label="Breadcrumb" className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-ink-soft">
              <Link href="/blog" className="hover:text-cobalt">← All articles</Link>
            </nav>
            <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-ink-soft">
              <time dateTime={a.date}>{dateFmt.format(new Date(a.date))}</time>
              {" · "}
              {a.readingMinutes} min read
            </p>
            <h1 className="mt-2 font-display text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {a.title}
            </h1>
          </div>
        </div>

        <div className="shell max-w-3xl py-12">
          <Markdown text={a.body} />
        </div>
      </article>

      <aside aria-label="More articles" className="border-t border-line bg-paper-2/50">
        <div className="shell py-12">
          <h2 className="label-mono">Keep reading</h2>
          <div className="mt-4 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/blog/${o.slug}`} className="group bg-paper p-6 hover:bg-paper-2">
                <h3 className="font-display text-base font-bold group-hover:text-cobalt">
                  {o.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-soft">{o.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
