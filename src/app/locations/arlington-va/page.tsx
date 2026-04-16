import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Arlington, VA",
  description:
    "Stand out in Arlington, VA's competitive market with professional website design and local SEO. More Google visibility, more customers. Free audit today.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/arlington-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Arlington, VA | LevelUp Local",
    description:
      "Stand out in Arlington, VA's competitive market with professional website design and local SEO. More Google visibility, more customers. Free audit today.",
    url: "https://lvluplocal.co/locations/arlington-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lvluplocal.co/logo.png",
        width: 1200,
        height: 630,
        alt: "LevelUp Local - Web Design & SEO in Arlington, VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Arlington, VA | LevelUp Local",
    description:
      "Stand out in Arlington, VA's competitive market with professional website design and local SEO. More Google visibility, more customers. Free audit today.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Arlington",
  state: "VA",
  slug: "arlington-va",
  headline:
    "Local SEO Services in Arlington, VA - Stand Out From the Competition",
  subheadline:
    "Arlington is one of the most competitive markets in Northern Virginia. We help small businesses cut through the noise with professional websites and local SEO that drives real customer leads.",
  intro:
    "Arlington is home to a highly educated, tech-savvy population and some of the most competitive small business markets in the entire DC metro area. Customers here search online before making almost every purchasing decision. If your business isn't ranking on Google, you're handing business to competitors who are.",
  about:
    "LevelUp Local builds the digital infrastructure Arlington businesses need to compete and win online. That means a fast, mobile-optimized website that converts visitors, a fully optimized Google Business Profile, strategic local keyword targeting, and structured data that gives Google the signals it needs to show your business prominently in local search results.",
  neighborhoods: [
    "Rosslyn",
    "Ballston",
    "Clarendon",
    "Crystal City",
    "Pentagon City",
    "Courthouse",
    "Lyon Village",
    "Shirlington",
    "Aurora Highlands",
    "Nauck",
  ],
  industries: [
    "Contractors",
    "HVAC",
    "Plumbing",
    "Cleaning Services",
    "Landscaping",
    "Personal Training",
    "Salons & Spas",
    "Restaurants",
    "Retail",
    "Legal Services",
    "Accounting",
    "Healthcare",
    "Childcare",
    "Moving Services",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "Is local SEO worth it for an Arlington, VA business given how competitive the market is?",
      a: "Absolutely - and in fact, the higher the competition, the more important SEO becomes. In a market like Arlington where customers are constantly searching online, being on page one of Google gives you a massive, sustainable advantage over businesses that rely only on referrals or social media.",
    },
    {
      q: "How do you approach SEO differently for an urban market like Arlington vs. a suburban area?",
      a: "In urban markets, we focus more heavily on neighborhood-level targeting, zero-click search optimization, and mobile UX since most urban searches happen on phones. We also prioritize Google Business Profile optimization for the local pack, which is even more prominent in high-density search areas.",
    },
    {
      q: "Can you help a service business that serves Arlington but is based outside the city?",
      a: "Yes. If you serve Arlington customers from a base in another part of NOVA, we can optimize your service area targeting so you show up in Arlington searches without having a physical address there.",
    },
    {
      q: "How long does it take to see results from local SEO in Arlington?",
      a: "Arlington is competitive, so significant ranking movements typically take 4–6 months. That said, many of our clients start seeing increased profile views and calls within the first few weeks of a fully optimized Google Business Profile - even before the website is fully indexed.",
    },
  ],
};

export default function ArlingtonPage() {
  return <LocationPage data={data} />;
}
