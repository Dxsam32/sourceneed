import Link from "next/link";
import {
  Product,
  formatPrice,
  formatQuantity,
} from "@/lib/catalog";
import { DocBadge } from "./Badges";

export default function ManifestTable({
  products,
  caption,
}: {
  products: Product[];
  caption: string;
}) {
  return (
    <div className="border border-ink bg-paper">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink bg-ink px-4 py-2.5">
        <span className="text-[0.6875rem] font-semibold text-paper">
          {caption}
        </span>
        <span className="text-[0.6875rem] text-paper/60">
          {products.length} {products.length === 1 ? "lot" : "lots"}
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-ink">
              {["Material", "CAS №", "Grade", "Lot qty", "Location", "Docs", "Price"].map(
                (h) => (
                  <th
                    key={h}
                    scope="col"
                    className="whitespace-nowrap px-4 py-2.5 text-[0.6875rem] font-semibold text-ink-soft"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.slug}
                className="group border-b border-line transition-colors last:border-b-0 hover:bg-paper-2"
              >
                <td className="px-4 py-3">
                  <Link
                    href={`/catalog/${p.slug}`}
                    className="font-display text-sm font-bold text-ink group-hover:text-cobalt"
                  >
                    {p.name}
                  </Link>
                  <span className="mt-0.5 block text-[0.6875rem] capitalize text-ink-soft">
                    {p.listingType} · {p.supplierName}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs text-ink-soft">
                  {p.casNumber ?? "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs text-ink-soft">
                  {p.grade ?? "—"}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs text-ink">
                  {formatQuantity(p)}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs text-ink-soft">
                  {p.locationCity}, {p.locationProvince}
                </td>
                <td className="whitespace-nowrap px-4 py-3">
                  <span className="flex gap-1.5">
                    <DocBadge label="COA" available={p.coaAvailable} title="Certificate of analysis on file for this lot" />
                    <DocBadge label="SDS" available={p.sdsAvailable} title="Safety data sheet available for download" />
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-xs font-semibold text-ink">
                  {formatPrice(p)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
