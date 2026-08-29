import type { Metadata } from "next";
import Markdown from "@/components/Markdown";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of the SourceNeed marketplace: accounts, listings, document requirements, quotes and transactions, regulated materials, liability, and governing law (Ontario).",
  alternates: { canonical: "/terms" },
};

const body = `These Terms & Conditions ("Terms") govern your access to and use of sourceneed.com and the SourceNeed marketplace (the "Services"), operated by ${site.legalName} ("SourceNeed", "we", "us"), ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}, Canada. By using the Services, you agree to these Terms. If you use the Services on behalf of a company, you represent that you are authorized to bind that company, and "you" refers to the company.

## 1. The Services

SourceNeed is a business-to-business marketplace that connects buyers and sellers of stocked and surplus chemicals in North America and coordinates related logistics. Browsing the catalog does not require an account. Listing materials, requesting quotes through an account, and transacting do.

SourceNeed is a marketplace intermediary. Unless expressly stated in a transaction document, we are not the seller of listed materials and we are not a party to the contract of sale between buyer and seller.

## 2. Business use only

The Services are offered to businesses and their authorized representatives. The Services are not offered to consumers, and materials listed on the marketplace are not for personal, household, or retail use.

## 3. Accounts

You are responsible for the accuracy of your registration information, for maintaining the confidentiality of your credentials, and for all activity under your account. We may suspend or terminate accounts that violate these Terms, provide false information, or use the Services unlawfully.

## 4. Listings and documents

Sellers must provide, for every listed lot: a certificate of analysis specific to the lot, a current safety data sheet compliant with applicable hazard-communication law (including WHMIS in Canada), and accurate information about quantity, packaging, storage, and location. Listings with missing, mismatched, or falsified documents will be removed, and falsification is grounds for immediate termination and may be reported to relevant authorities.

Sellers represent that they hold lawful title to listed materials and that sale of those materials by them, and purchase by an arm's-length business buyer, is lawful.

## 5. Quotes and transactions

Prices displayed are asking prices in Canadian dollars unless stated otherwise; lots marked RFQ are quoted on request. A quote becomes binding only when accepted in writing under the transaction documents exchanged between the parties. Fees payable to SourceNeed (including seller success fees and any agreed volume-discount rates) are set out in your account agreement.

## 6. Regulated and hazardous materials

Some materials on the marketplace are regulated dangerous goods. You are responsible for compliance with the laws that apply to you, including Canada's Transportation of Dangerous Goods Act, WHMIS, CEPA (including New Substances notification where applicable), and, for cross-border movements, US TSCA and DOT requirements. SourceNeed coordinates freight through carriers certified for the materials being moved, but this does not transfer your own regulatory obligations to us. You must not use the Services to acquire materials for any unlawful purpose.

## 7. No professional advice

Content on the Services, including blog articles and compliance summaries, is general information, not legal, regulatory, safety, or professional advice. Confirm requirements that apply to your operations with qualified advisors.

## 8. Buyer inspection

Buyers are responsible for reviewing lot documents before purchase and are encouraged to test material on receipt for critical applications. Claims regarding non-conforming material are between buyer and seller under their transaction documents, though we will assist in good faith with document verification.

## 9. Intellectual property

The Services, including their design, text, and software, are owned by ${site.legalName} or its licensors. You may not scrape, reproduce, or republish catalog data at scale without written permission. Sellers grant us a licence to display the content and documents they upload for the purpose of operating the marketplace.

## 10. Disclaimers

The Services are provided "as is" and "as available". To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that listings are error-free or that any material will meet your requirements; the document review and verification steps described on the Services describe our process, not a guarantee of outcomes.

## 11. Limitation of liability

To the maximum extent permitted by law, ${site.legalName} will not be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data, arising from or related to the Services. Our total aggregate liability for any claim arising from the Services will not exceed the greater of (a) the fees you paid to us in the twelve months preceding the claim and (b) CAD $1,000. Nothing in these Terms limits liability that cannot be limited under applicable law.

## 12. Indemnity

You will indemnify and hold harmless ${site.legalName} and its officers, employees, and agents from claims arising out of your listings, your materials, your breach of these Terms, or your violation of applicable law.

## 13. Termination

You may close your account at any time. We may suspend or terminate access for breach of these Terms on notice. Sections that by their nature survive termination (including 9 through 12) survive.

## 14. Governing law

These Terms are governed by the laws of the Province of Ontario and the federal laws of Canada applicable in Ontario. The parties attorn to the exclusive jurisdiction of the courts of Ontario, sitting in Toronto.

## 15. Changes

We may amend these Terms by posting an updated version on this page. Material changes will be indicated by a revised date, and continued use of the Services after the effective date constitutes acceptance.

## 16. Contact

Questions about these Terms: ${site.email} · ${site.phoneDisplay} · ${site.legalName}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}.

These Terms were last updated in ${new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long" })}.`;

export default function TermsPage() {
  return (
    <div className="shell max-w-3xl py-14">
      <p className="label-mono">Legal</p>
      <h1 className="mt-2 font-display text-3xl font-black tracking-tight sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <div className="prose-legal mt-6">
        <Markdown text={body} />
      </div>
    </div>
  );
}
