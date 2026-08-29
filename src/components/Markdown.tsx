import { Fragment } from "react";

/** Minimal renderer for the markdown-lite used in blog/legal content:
 *  "## " headings, "- " lists, and plain paragraphs. */
export default function Markdown({ text }: { text: string }) {
  const blocks = text.trim().split(/\n\n+/);
  return (
    <Fragment>
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="mt-10 mb-3 font-display text-xl font-bold text-ink">
              {block.slice(3)}
            </h2>
          );
        }
        if (block.split("\n").every((l) => l.startsWith("- "))) {
          return (
            <ul key={i} className="my-4 list-disc space-y-2 pl-6 text-[0.95rem] leading-7 text-ink-soft">
              {block.split("\n").map((l, j) => (
                <li key={j}>{l.slice(2)}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="my-4 text-[0.95rem] leading-7 text-ink-soft">
            {block}
          </p>
        );
      })}
    </Fragment>
  );
}
