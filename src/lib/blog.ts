export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  readingMinutes: number;
  body: string; // markdown-lite: ## headings, - lists, paragraphs
}

export const articles: Article[] = [
  {
    slug: "why-local-chemical-sourcing-beats-overseas-price-lists",
    title: "Why local chemical sourcing often beats the overseas price list",
    description:
      "The per-kilo price on an overseas quote is not your landed cost. A breakdown of freight, duties, lead time, and working capital for North American chemical buyers.",
    date: "2026-08-10",
    readingMinutes: 6,
    body: `The overseas quote almost always looks cheaper. A drum of glycerin at $1.90 per kilo FOB Shanghai against $2.35 from a warehouse in Mississauga seems like an easy decision. It usually isn't, because the number on the quote is not the number that hits your P&L.

## What the FOB price leaves out

Landed cost is the only cost that matters. Getting from an FOB price to a landed price means adding:

- Ocean freight and destination charges, which have swung more than 300% in single years since 2020
- Customs brokerage, bonds, and entry fees on every shipment
- Duties and tariffs, which change with trade policy and can be applied retroactively to goods in transit
- Inland drayage from port to your dock
- Insurance on a container you will not see for six to ten weeks

On a typical 1,000 kg specialty ingredient order, these line items routinely add 15% to 40% to the FOB price before anything goes wrong.

## The costs that never appear on an invoice

Lead time is a cost. A ten-week supply line means ten weeks of demand you must forecast correctly, ten weeks of working capital tied up in inventory on the water, and a safety stock large enough to survive a delayed vessel. Companies quantify this as inventory carrying cost, usually 15% to 25% of inventory value per year.

Quality risk is a cost. If a lot arrives out of spec from a domestic supplier, you reject it and have replacement material in days. If it arrives out of spec from overseas, you are negotiating a claim across time zones while your production line waits.

## When local wins outright

Local sourcing tends to win whenever one of these is true: the order is under a full container, the material is needed within a month, the material is hazmat (where cross-border compliance stacks quickly), or your demand is uncertain enough that a forecast miss would strand inventory.

Surplus and stocked domestic material pushes the math further. A surplus lot already sitting in Ontario has already paid its freight from wherever it was made. You are buying at a discount to replacement cost, and it can be on your dock this week.

The point is not that overseas sourcing is wrong. At full-container volumes with stable demand, it often wins. The point is to compare landed cost to landed cost, and to know what your lead time is actually costing you.`,
  },
  {
    slug: "surplus-chemical-inventory-recovery-guide-for-sellers",
    title: "Turning surplus chemical inventory back into cash: a seller's guide",
    description:
      "Cancelled runs, reformulations, and overbuying leave chemical stock sitting on the balance sheet. How to recover value from surplus inventory instead of paying to dispose of it.",
    date: "2026-08-03",
    readingMinutes: 5,
    body: `Every manufacturer and distributor eventually ends up with chemical inventory it no longer needs. A customer cancels a contract. R&D reformulates away from an ingredient. Procurement overbuys ahead of a price increase that never materializes. The material is fine; the need is gone.

## What surplus actually costs you

Surplus stock is not neutral. It occupies racking you pay for, ties up working capital, ages toward its retest or expiry date, and eventually becomes a disposal liability. Licensed chemical disposal in Canada commonly runs hundreds of dollars per drum once transport and documentation are included. Material you paid to acquire becomes material you pay to destroy.

The window matters. A lot with 18 months of shelf life remaining is an asset. The same lot with 3 months left is a liability. Sellers who list early recover the most value.

## What buyers need before they will commit

Serious buyers of surplus material ask the same questions every time. Have the answers ready:

- The certificate of analysis for the specific lot, not a generic spec sheet
- The safety data sheet, current within the last revision cycle
- Manufacture date, retest or expiry date, and storage conditions since receipt
- Packaging condition: original sealed containers move at a premium over opened or repackaged stock
- Quantity and whether you will split the lot

Material with a clean, complete document trail sells faster and at meaningfully higher recovery rates than material with gaps.

## What recovery looks like

Recovery rates on surplus chemicals depend on shelf life remaining, documentation, and how common the material is. Commodity materials with long dating and full documents can recover a substantial share of replacement cost. Specialty materials find fewer buyers but often better prices when the right one appears, which is an argument for listing on a marketplace with search rather than calling around.

Listing costs nothing but the time to photograph the labels and upload the documents. The alternative is watching the retest date approach and then writing a cheque to a disposal company.`,
  },
  {
    slug: "cross-border-chemical-duty-costs-explained",
    title: "What crossing the border really adds to a chemical purchase",
    description:
      "Duties, brokerage, bonds, and compliance overhead on Canada-US chemical shipments, and why buying material already in your country often nets out cheaper.",
    date: "2026-07-27",
    readingMinutes: 6,
    body: `Chemical buyers in Canada quote US suppliers constantly, and vice versa. The border between the two markets is easy to underestimate as a cost line, because most of its costs are indirect.

## The direct costs

Every commercial chemical shipment crossing the Canada-US border incurs customs brokerage on entry, typically a flat fee plus disbursements per shipment. Many chemicals move duty-free under CUSMA when they qualify and the paperwork proves it, but qualification is not automatic: origin certification has to be obtained from the manufacturer and kept current. Materials that do not qualify, or shipments where the paperwork is incomplete, pay the applicable tariff rate, and recent years have shown how quickly tariff schedules can change under trade disputes.

Currency conversion adds its own spread, and GST/HST is collected at the border on the converted value, a cash flow cost even where it is later recovered as an input tax credit.

## The indirect costs

Hazmat shipments crossing the border need carriers certified on both sides, drivers with the right endorsements, and documentation compliant with both TDG (Canada) and DOT (US) regimes. That narrows the carrier pool and raises the rate. Border delays hit chemical loads harder than general freight because temperature-sensitive or time-sensitive material cannot simply wait out a secondary inspection.

There is also regulatory friction that has nothing to do with the truck. A substance fully registered for commerce in the US may require notification under Canada's CEPA New Substances program before import, and vice versa with TSCA. Getting this wrong is not a fee, it is a compliance incident.

## The practical takeaway

None of this makes cross-border sourcing wrong. It makes the comparison different from the quote sheet. A US price 10% below a Canadian price is frequently a Canadian price by the time it lands in Ontario, and slower.

When equivalent material already sits in your own country, with domestic documents, in a warehouse a day's drive away, the border simply disappears from your cost structure. That is a real, calculable saving, and it is one of the core reasons surplus and stocked domestic inventory deserves the first search, not the last one.`,
  },
  {
    slug: "coa-and-sds-basics-for-chemical-buyers",
    title: "COA and SDS basics: what to check before you buy any chemical lot",
    description:
      "A practical guide to reading certificates of analysis and safety data sheets when buying surplus or stocked chemicals, including the red flags that should stop a purchase.",
    date: "2026-07-20",
    readingMinutes: 7,
    body: `Two documents stand between you and a bad chemical purchase: the certificate of analysis and the safety data sheet. Neither is exotic, but both are routinely skimmed rather than read. Here is what each one is for and what to actually check.

## The certificate of analysis (COA)

A COA is the manufacturer's test results for one specific lot. It is not a spec sheet. A spec sheet says what the product should be; a COA says what this lot measured when it was tested.

Before buying, confirm:

- The lot number on the COA matches the lot number on the containers you are buying
- The tests reported match the grade claimed. USP, FCC, or ACS grades have defined test lists; a COA for "USP glycerin" that omits pharmacopeial tests is a spec sheet wearing a costume
- Manufacture date and retest or expiry date, against your own usage timeline
- Actual results sit comfortably within limits, not at the edge of them
- The issuing lab or manufacturer is identified, with a signature or QA release

For surplus material, the COA question is sharper: does the seller have the original lot COA, or only a generic document? On SourceNeed, every listed lot carries its own COA before it goes live. Material without one does not get listed.

## The safety data sheet (SDS)

The SDS is the hazard communication document, 16 standardized sections under GHS covering identification, hazards, composition, first aid, fire fighting, handling, storage, exposure controls, and transport information.

For a buyer, the SDS answers operational questions before the material arrives: what PPE your team needs, what storage class your warehouse must provide, whether the material is a regulated dangerous good for transport, and what your local fire code will say about it. In Canada, suppliers of hazardous workplace products are required under WHMIS to provide a compliant SDS, and buyers should treat a missing or ancient SDS as disqualifying.

## Red flags that should stop a purchase

- Lot number mismatch between documents and drums
- COA older than the material's retest interval with no retest documentation
- Photocopied or edited-looking documents, missing headers, missing signatures
- A seller who cannot say where and how the material has been stored
- "SDS available after purchase"

Documents cost nothing to provide when they exist. Reluctance to produce them is information.`,
  },
  {
    slug: "freight-emissions-math-regional-chemical-sourcing",
    title: "The freight emissions math of sourcing chemicals regionally",
    description:
      "Shorter supply lines cut freight emissions in ways you can actually calculate. The numbers on trucking a lot 100 km versus shipping it 15,000 km.",
    date: "2026-07-13",
    readingMinutes: 5,
    body: `Sustainability claims in chemical distribution are usually adjectives. This one is arithmetic.

Freight emissions are a function of distance, mode, and weight. Standard emission factors used in corporate GHG accounting put ocean container shipping at roughly 10 to 15 grams of CO2e per tonne-kilometre and heavy road freight at roughly 60 to 100 grams per tonne-kilometre. Ocean freight is far more efficient per kilometre, but overseas routes are two orders of magnitude longer, and they still end with a truck.

## A concrete comparison

Take one 10-tonne lot of a commodity ingredient delivered to a manufacturer in Toronto.

Sourced from an overseas producer: roughly 1,000 km of inland transport to a foreign port, about 15,000 km of ocean transit to an east coast port, and about 800 km of drayage and trucking to the plant. At standard factors, the ocean leg alone contributes on the order of 1.5 to 2.2 tonnes of CO2e, and the road legs add roughly another 1.1 to 1.8 tonnes. Call it approximately 3 to 4 tonnes of CO2e for the delivered lot.

Sourced from surplus stock already warehoused 100 km away: one regional truck movement, on the order of 0.06 to 0.1 tonnes of CO2e.

That is a 97% reduction, and it is not the result of any technology or offset. The material simply did not travel, because it was already here.

## Why surplus is the strongest case

A surplus lot has an additional property: its inbound freight emissions are sunk. The material already made whatever journey it made before its first buyer's plans changed. When a second buyer uses it instead of triggering new production and a new supply chain, the avoided emissions include not just freight but the manufacturing of a replacement lot, and the disposal of the surplus one.

For companies reporting Scope 3 emissions, purchased goods and upstream transportation are usually the largest and hardest categories to move. Sourcing decisions are one of the few levers that move both at once, and regional surplus is the shortest version of that lever.

None of this requires believing anything. Distance, mode, and weight are on every bill of lading. Run your own numbers.`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
