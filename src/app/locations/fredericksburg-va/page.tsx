import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Fredericksburg, VA | LevelUp Local",
  description:
    "Professional website design and local SEO for small businesses in Fredericksburg, VA. Rank higher on Google, get more calls, and grow your customer base. Free audit today.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/fredericksburg-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Fredericksburg, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Fredericksburg, VA. Rank higher on Google, get more calls, and grow your customer base. Free audit today.",
    url: "https://lvluplocal.co/locations/fredericksburg-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://lvluplocal.co/logo.png", width: 1200, height: 630, alt: "LevelUp Local — Web Design & SEO in Fredericksburg, VA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Fredericksburg, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Fredericksburg, VA. Rank higher on Google, get more calls, and grow your customer base. Free audit today.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Fredericksburg",
  state: "VA",
  slug: "fredericksburg-va",
  headline: "SEO Services in Fredericksburg, VA to Grow Your Business",
  subheadline:
    "Help your Fredericksburg business show up on Google when local customers are searching. We build the websites and local SEO systems that drive real, consistent leads.",
  intro:
    "Fredericksburg sits at the heart of a rapidly growing corridor between Richmond and the DC metro area. The city's blend of historic character and new development means a diverse, expanding customer base — and a competitive local market. If your business isn't ranking on Google, you're leaving customers to competitors who are.",
  about:
    "LevelUp Local helps Fredericksburg businesses build a strong online presence: professional websites that load fast, convert visitors, and rank for the keywords your customers actually search. We combine technical SEO, Google Business Profile optimization, and compelling local content to put your business on the map — literally.",
  neighborhoods: [
    "Downtown Fredericksburg",
    "Central Park",
    "Celebrate Virginia",
    "Cosner's Corner",
    "Falmouth",
    "Shannon Park",
    "Lee's Hill",
    "Spotsylvania",
    "Massaponax",
    "Salem Fields",
  ],
  industries: [
    "Restaurants & Cafes",
    "Contractors",
    "HVAC",
    "Plumbing",
    "Cleaning Services",
    "Landscaping",
    "Roofing",
    "Flooring",
    "Auto Services",
    "Health & Wellness",
    "Childcare",
    "Retail",
    "Home Services",
    "Professional Services",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "Why isn't my Fredericksburg business showing up on Google Maps?",
      a: "The most common reasons are an incomplete or unverified Google Business Profile, no recent reviews, inconsistent business information across the web, or a website that isn't optimized for local searches. We audit all of these in our free consultation and fix what's holding you back.",
    },
    {
      q: "Can you help my Fredericksburg business rank for multiple services?",
      a: "Yes. We create separate, optimized pages for each major service you offer, so you can rank for multiple search terms rather than cramming everything onto one page. This is one of the most impactful things you can do for local SEO.",
    },
    {
      q: "Do you work with restaurants and retail in addition to contractors?",
      a: "Absolutely. While we work with a lot of service-based businesses, local SEO benefits any business that relies on customers finding them through Google. Restaurants, salons, retail shops, and professional services all benefit from our approach.",
    },
    {
      q: "How quickly can I get a website built for my Fredericksburg business?",
      a: "Most websites go live within 3–5 business days after we gather your content and complete the design. We move fast so you can start generating leads quickly.",
    },
  ],
};

export default function FredericksburgPage() {
  return <LocationPage data={data} />;
}
