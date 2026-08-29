import type { Metadata } from "next";
import Markdown from "@/components/Markdown";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SourceNeed (Farachem Solutions Inc.) collects, uses, discloses, and protects personal information under Canada's PIPEDA, including your rights of access and correction.",
  alternates: { canonical: "/privacy" },
};

const body = `SourceNeed is operated by ${site.legalName} ("we", "us"), ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode}, Canada. This policy explains how we collect, use, disclose, and protect personal information in connection with sourceneed.com and our marketplace services, in accordance with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation.

SourceNeed is a business-to-business marketplace. Most information we handle relates to companies, but information that identifies an individual — a name, a business email address, a direct phone line — is personal information and is treated as described here.

## What we collect

- Account information: name, business email, phone number, company name and role, provided when you register or contact us
- Transaction information: quote requests, listings, correspondence about lots, and purchase records
- Technical information: IP address, browser type, and pages visited, collected through standard server logs
- Communications: emails and phone records when you contact us

We collect personal information directly from you. We do not buy marketing lists and we do not collect personal information from data brokers.

## Why we collect it

We use personal information only for purposes a reasonable person would consider appropriate in the circumstances:

- Operating your account and processing quote requests, listings, and transactions
- Verifying supplier businesses under our verified supplier program
- Coordinating freight, including sharing delivery contact details with carriers
- Responding to inquiries and providing support
- Meeting legal obligations, including tax, customs, and dangerous-goods documentation requirements
- Improving the website, using aggregated, de-identified analytics

We do not sell personal information. We do not use it for advertising to third parties.

## Consent

By providing personal information for the purposes above, you consent to its collection, use, and disclosure as described in this policy. You may withdraw consent at any time, subject to legal or contractual restrictions and reasonable notice, by contacting us at ${site.email}. Withdrawing consent may limit our ability to provide marketplace services.

## Disclosure

We disclose personal information only:

- To freight carriers and logistics partners, to the extent needed to deliver a shipment (for example, a receiving contact's name and phone number)
- To counterparties in a transaction you initiate (for example, your business contact details accompany a quote request you send to a supplier)
- To service providers who process data on our behalf (such as website hosting and database services), bound by contractual confidentiality and used only for the services we engage them for; some providers store data outside Canada, and while it is in another jurisdiction it is subject to the laws of that jurisdiction
- Where required by law, regulation, subpoena, or court order

## Retention

We keep personal information only as long as needed for the purposes above or as required by law. Transaction records, including associated contact details, are retained to meet tax and regulatory record-keeping obligations, then securely destroyed or anonymized.

## Safeguards

We protect personal information with safeguards appropriate to its sensitivity, including encrypted connections (TLS), access controls limiting data access to personnel who need it, and hosting with providers that maintain recognized security certifications. No system is perfectly secure; if a breach of security safeguards creates a real risk of significant harm, we will report and notify as required by PIPEDA.

## Your rights

You may request access to the personal information we hold about you, ask how it has been used or disclosed, and challenge its accuracy and completeness. We will respond within 30 days as PIPEDA requires. To make a request, contact our privacy officer:

Privacy Officer, ${site.legalName}, ${site.address.street}, ${site.address.city}, ${site.address.region} ${site.address.postalCode} — ${site.email} — ${site.phoneDisplay}

If you are not satisfied with our response, you may complain to the Office of the Privacy Commissioner of Canada.

## Cookies and analytics

The website uses only cookies necessary for it to function (such as session cookies when you log in). We do not use third-party advertising cookies or cross-site trackers.

## Changes

We may update this policy from time to time. Material changes will be posted on this page with a revised date. Continued use of the site after changes take effect constitutes acceptance of the updated policy.

This policy was last updated in ${new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long" })}.`;

export default function PrivacyPage() {
  return (
    <div className="shell max-w-3xl py-14">
      <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <div className="prose-legal mt-6">
        <Markdown text={body} />
      </div>
    </div>
  );
}
