import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Fairfax, VA | LevelUp Local",
  description:
    "Professional website design and local SEO for small businesses in Fairfax, VA. Rank on Google, get more local customers, and grow. Free SEO audit from LevelUp Local.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/fairfax-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Fairfax, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Fairfax, VA. Rank on Google, get more local customers, and grow. Free SEO audit from LevelUp Local.",
    url: "https://lvluplocal.co/locations/fairfax-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://lvluplocal.co/logo.png", width: 1200, height: 630, alt: "LevelUp Local — Web Design & SEO in Fairfax, VA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Fairfax, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Fairfax, VA. Rank on Google, get more local customers, and grow. Free SEO audit from LevelUp Local.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Fairfax",
  state: "VA",
  slug: "fairfax-va",
  headline: "Local SEO Services in Fairfax, VA for Small Businesses",
  subheadline:
    "Fairfax County is one of the largest and wealthiest markets in all of Northern Virginia. We help local businesses rank on Google and capture their share of a massive customer base.",
  intro:
    "Fairfax County is home to over 1.1 million residents and thousands of small businesses. The sheer size of the market is both an opportunity and a challenge — there's an enormous customer base, but the competition for local search visibility is intense. Businesses that invest in local SEO consistently outperform those that don't.",
  about:
    "LevelUp Local builds the digital marketing foundation Fairfax businesses need to compete: professional websites engineered for speed and local search, complete Google Business Profile optimization across Fairfax's neighborhoods and zip codes, and local keyword strategies that match exactly what your customers are searching for in their specific area of the county.",
  neighborhoods: [
    "Fairfax City",
    "Tysons",
    "Reston",
    "Herndon",
    "Vienna",
    "Springfield",
    "Burke",
    "Centreville",
    "Chantilly",
    "Oakton",
  ],
  industries: [
    "Contractors",
    "HVAC",
    "Plumbing",
    "Electrical",
    "Cleaning Services",
    "Landscaping",
    "Roofing",
    "Flooring",
    "Auto Repair",
    "Health & Wellness",
    "Professional Services",
    "Childcare",
    "Restaurants",
    "Retail",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "Fairfax County is huge — can you target specific areas within the county?",
      a: "Yes. Fairfax County includes many distinct communities — Reston, Herndon, Vienna, Springfield, Burke, Centreville, Chantilly, and more. We build location-targeted pages and optimize your service areas so you rank in the specific zip codes and neighborhoods where your customers live.",
    },
    {
      q: "How do I compete with larger businesses for local SEO in Fairfax?",
      a: "Larger businesses often have weak local SEO because they focus on broad, national strategies. As a local business, you have an inherent advantage in hyper-local search — your proximity, your reviews, and your community connections all work in your favor. We build on those strengths strategically.",
    },
    {
      q: "Does my Fairfax business need separate pages for Reston, Herndon, and Vienna?",
      a: "If you actively serve multiple distinct communities within Fairfax County, having individual location pages for each significantly improves your ranking in those specific areas. We create these pages with unique, genuine content — not duplicate pages with the city name swapped.",
    },
    {
      q: "What results can I realistically expect from local SEO in Fairfax?",
      a: "Most Fairfax businesses see meaningful ranking improvements within 3–6 months. More importantly, they typically see an increase in Google Business Profile views, website visits, and direct calls within the first 30–60 days of a fully optimized profile and website.",
    },
  ],
};

export default function FairfaxPage() {
  return <LocationPage data={data} />;
}
