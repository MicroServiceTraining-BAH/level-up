import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Herndon, VA",
  description:
    "Professional website design and local SEO for small businesses in Herndon, VA. Rank on Google, attract more customers. Free audit from LevelUp Local.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/herndon-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Herndon, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Herndon, VA. Rank on Google, attract more customers. Free audit from LevelUp Local.",
    url: "https://lvluplocal.co/locations/herndon-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lvluplocal.co/logo.png",
        width: 1200,
        height: 630,
        alt: "LevelUp Local - Web Design & SEO in Herndon, VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Herndon, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Herndon, VA. Rank on Google, attract more customers. Free audit from LevelUp Local.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Herndon",
  state: "VA",
  slug: "herndon-va",
  headline: "Local SEO & Web Design for Herndon, VA Businesses",
  subheadline:
    "Help your Herndon business show up on Google when local customers are searching. We build the websites and local SEO strategies that drive consistent leads.",
  intro:
    "Herndon is a growing town in Fairfax County with a diverse business community serving the broader NOVA corridor. With Silver Line expansion and continued development, the customer base continues to grow - and so does the competition for local search visibility.",
  about:
    "LevelUp Local builds the digital presence Herndon businesses need to stay competitive: a fast, professional website designed to convert, a fully optimized Google Business Profile, and local keyword targeting that puts you in front of the right customers at the right moment.",
  neighborhoods: [
    "Downtown Herndon",
    "Worldgate",
    "Dulles Town Center",
    "McNair Farms",
    "Clearview",
    "Pinecrest",
    "Spring Branch",
    "Fortnightly",
    "Elden Street",
    "Sterling Park",
  ],
  industries: [
    "Contractors",
    "HVAC",
    "Cleaning Services",
    "Landscaping",
    "Flooring",
    "Painters",
    "Restaurants",
    "Retail",
    "Professional Services",
    "Auto Services",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "How does local SEO help a Herndon business attract more customers?",
      a: "Local SEO ensures your business appears in Google search results and Google Maps when customers nearby search for what you offer. The vast majority of local customers use Google to find businesses before making a purchase decision - local SEO puts you in front of them at that critical moment.",
    },
    {
      q: "Can you target both Herndon and nearby Reston or Sterling with the same campaign?",
      a: "Yes. We can expand your service area targeting to cover the full Herndon-Reston-Sterling corridor so you capture customers across the broader area, not just within Herndon's town limits.",
    },
    {
      q: "Does my Herndon business need a new website, or can you work with what I have?",
      a: "We can assess your current site and either optimize it or build a new one depending on what will be most effective. Some existing sites are a good foundation; others are better replaced. We'll give you an honest assessment in the free audit.",
    },
    {
      q: "What's the first step to getting started?",
      a: "Book a free 15-minute audit call. We'll look at your current online presence, identify the gaps, and map out a clear plan to get your Herndon business ranking on Google.",
    },
  ],
};

export default function HerndonPage() {
  return <LocationPage data={data} />;
}
