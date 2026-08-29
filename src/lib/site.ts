export const site = {
  name: "SourceNeed",
  legalName: "Farachem Solutions Inc.",
  url: "https://sourceneed.com",
  tagline: "The North American marketplace for stocked and surplus chemicals",
  email: "info@sourceneed.com",
  phone: "+1-647-877-6665",
  phoneDisplay: "+1 (647) 877-6665",
  address: {
    street: "25 Greenview Ave",
    city: "Toronto",
    region: "ON",
    postalCode: "M2M 0A5",
    country: "CA",
  },
} as const;

export const nav = [
  { href: "/catalog", label: "Catalog" },
  { href: "/for-buyers", label: "For buyers" },
  { href: "/for-sellers", label: "For sellers" },
  { href: "/our-story", label: "Our story" },
  { href: "/blog", label: "Blog" },
] as const;

export const footerNav = {
  marketplace: [
    { href: "/catalog", label: "Browse catalog" },
    { href: "/for-buyers", label: "For buyers" },
    { href: "/for-sellers", label: "For sellers" },
    { href: "/pricing", label: "Pricing" },
    { href: "/register", label: "Create an account" },
  ],
  company: [
    { href: "/our-story", label: "Our story" },
    { href: "/compliance", label: "Compliance" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ],
} as const;
