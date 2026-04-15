import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Manassas, VA",
  description:
    "Professional website design and local SEO for small businesses in Manassas, VA. Get more customers from Google - free audit from LevelUp Local today.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/manassas-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Manassas, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Manassas, VA. Get more customers from Google - free audit from LevelUp Local today.",
    url: "https://lvluplocal.co/locations/manassas-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://lvluplocal.co/logo.png", width: 1200, height: 630, alt: "LevelUp Local - Web Design & SEO in Manassas, VA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Manassas, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Manassas, VA. Get more customers from Google - free audit from LevelUp Local today.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Manassas",
  state: "VA",
  slug: "manassas-va",
  headline: "Local SEO Services in Manassas, VA for Small Businesses",
  subheadline:
    "Help your Manassas business appear at the top of Google when local customers are searching for your services. We build the websites and SEO systems that make it happen.",
  intro:
    "Manassas - including Manassas City and Manassas Park - is a growing, diverse community with a strong base of local businesses serving the surrounding Prince William County area. Customers here are searching online first, and the businesses that show up at the top are the ones getting called.",
  about:
    "LevelUp Local helps Manassas businesses build a dominant local presence online. We build professional, fast websites designed to rank in local search, optimize your Google Business Profile for maximum Maps visibility, and create the content strategy that positions you as the go-to business in your category across Manassas and the surrounding region.",
  neighborhoods: [
    "Old Town Manassas",
    "Manassas Park",
    "Signal Hill",
    "Yorkshire",
    "Sudley",
    "Wellington",
    "Blooms Corner",
    "Manassas Battlefield",
    "Bull Run",
    "Liberia",
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
    "Restaurants",
    "Retail",
    "Health & Wellness",
    "Professional Services",
    "Childcare",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "Why should Manassas businesses invest in local SEO?",
      a: "Manassas is a growing market with increasing competition. Local SEO ensures your business appears in front of customers actively searching for your services - at the exact moment they're ready to hire or buy. The businesses ranking on page one of Google in Manassas are capturing a disproportionate share of local spending.",
    },
    {
      q: "What is Google Business Profile optimization and why does it matter for Manassas businesses?",
      a: "Your Google Business Profile is what powers your listing in Google Maps and the local pack - those three businesses that appear at the top of search results. A fully optimized profile with accurate information, photos, service areas, and consistent reviews significantly increases your visibility in Manassas local searches.",
    },
    {
      q: "Do you build websites or only do SEO for Manassas businesses?",
      a: "We do both - and for most businesses, the two go together. A well-designed website built with SEO in mind performs dramatically better than one that has SEO bolted on afterward. We build your website and SEO strategy together as one integrated system.",
    },
    {
      q: "Can you help my Manassas business rank in both Manassas City and Manassas Park?",
      a: "Yes. We optimize your Google Business Profile service areas and build website content to target both Manassas City, Manassas Park, and surrounding Prince William County areas as needed.",
    },
  ],
};

export default function ManassasPage() {
  return <LocationPage data={data} />;
}
