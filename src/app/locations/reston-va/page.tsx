import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Reston, VA",
  description:
    "Professional website design and local SEO for small businesses in Reston, VA. Get found on Google by local customers - free audit from LevelUp Local today.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/reston-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Reston, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Reston, VA. Get found on Google by local customers - free audit from LevelUp Local today.",
    url: "https://lvluplocal.co/locations/reston-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lvluplocal.co/logo.png",
        width: 1200,
        height: 630,
        alt: "LevelUp Local - Web Design & SEO in Reston, VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Reston, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Reston, VA. Get found on Google by local customers - free audit from LevelUp Local today.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Reston",
  state: "VA",
  slug: "reston-va",
  headline: "Local SEO Services in Reston, VA for Small Businesses",
  subheadline:
    "Reston is a thriving tech-forward community in Fairfax County. We help local businesses cut through the noise and get found by customers actively searching on Google.",
  intro:
    "Reston is home to a highly educated, digitally connected population and a dense concentration of businesses across every category. Customers here expect to find businesses online and make decisions based on what they see - your website, your Google listing, and your reviews all matter enormously.",
  about:
    "LevelUp Local helps Reston businesses build a complete local SEO foundation: professional website, optimized Google Business Profile, and content targeted to the searches your customers are actually making. We know what it takes to rank in a competitive, tech-savvy market like Reston.",
  neighborhoods: [
    "Town Center",
    "Lake Anne",
    "South Lakes",
    "North Point",
    "Hunters Woods",
    "Wiehle",
    "Sunrise Valley",
    "Baron Cameron",
    "Golf Course Island",
    "Herndon Parkway",
  ],
  industries: [
    "Contractors",
    "HVAC",
    "Cleaning Services",
    "Landscaping",
    "Health & Wellness",
    "Professional Services",
    "Restaurants",
    "Childcare",
    "Retail",
    "IT & Tech Services",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "Is local SEO effective for tech-savvy communities like Reston?",
      a: "Especially so. Reston residents are highly online, do extensive research before purchasing, and rely heavily on Google to find local businesses. Strong local SEO and a professional website are essential to capturing this audience.",
    },
    {
      q: "Can you help a Reston business compete with large national companies in search results?",
      a: "Yes. Local SEO is specifically designed to help small businesses outrank national chains for local searches. Your proximity, community presence, and local reviews are competitive advantages we build on.",
    },
    {
      q: "How do I get started with local SEO for my Reston business?",
      a: "Book a free 15-minute audit call and we'll assess your current online presence and map out exactly what it will take to rank in Reston.",
    },
    {
      q: "Do you serve the Herndon area in addition to Reston?",
      a: "Yes - Reston and Herndon are neighboring communities and we serve both. We can optimize your presence across the entire Reston-Herndon corridor.",
    },
  ],
};

export default function RestonPage() {
  return <LocationPage data={data} />;
}
