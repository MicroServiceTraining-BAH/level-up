import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Alexandria, VA",
  description:
    "Get your Alexandria, VA business found on Google with professional website design and local SEO. More visibility, more calls, more customers. Free audit today.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/alexandria-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Alexandria, VA | LevelUp Local",
    description:
      "Get your Alexandria, VA business found on Google with professional website design and local SEO. More visibility, more calls, more customers. Free audit today.",
    url: "https://lvluplocal.co/locations/alexandria-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://lvluplocal.co/logo.png", width: 1200, height: 630, alt: "LevelUp Local - Web Design & SEO in Alexandria, VA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Alexandria, VA | LevelUp Local",
    description:
      "Get your Alexandria, VA business found on Google with professional website design and local SEO. More visibility, more calls, more customers. Free audit today.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Alexandria",
  state: "VA",
  slug: "alexandria-va",
  headline: "SEO Services in Alexandria, VA - Get Found by Local Customers",
  subheadline:
    "From Old Town to the West End, Alexandria customers are searching Google daily for local businesses. We make sure yours is what they find.",
  intro:
    "Alexandria is a vibrant, diverse city with a mix of historic character and modern growth. With a population that skews tech-savvy and values local businesses, the customer base here is rich - but so is the competition. Every category from cleaning services to contractors to restaurants has businesses fighting for the same local search visibility.",
  about:
    "LevelUp Local helps Alexandria businesses build the digital presence that converts local searchers into paying customers. We combine a professionally designed, fast-loading website with complete Google Business Profile optimization and local SEO strategy - so your business shows up when Alexandria residents search for what you offer.",
  neighborhoods: [
    "Old Town",
    "Del Ray",
    "Arlandria",
    "West End",
    "Landmark",
    "Potomac Yard",
    "Seminary Hill",
    "Belle View",
    "Rosemont",
    "Eisenhower Valley",
  ],
  industries: [
    "Restaurants",
    "Cleaning Services",
    "Contractors",
    "HVAC",
    "Plumbing",
    "Salons & Barbershops",
    "Fitness & Wellness",
    "Retail",
    "Legal & Professional Services",
    "Childcare",
    "Flooring",
    "Painters",
    "Moving Services",
    "Pet Services",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "What's the difference between ranking in Old Town Alexandria vs. the West End?",
      a: "Google tailors local results based on where the searcher is physically located. We optimize your Google Business Profile service areas and create neighborhood-specific content so your business is relevant to searchers across all of Alexandria - not just near your address.",
    },
    {
      q: "My Alexandria business relies heavily on walk-in traffic. Is SEO still important?",
      a: "More than ever. Today, most customers look up a business on Google before visiting - even if they already know about you. Reviews, photos, hours, and your website all influence whether they walk through your door. Strong local SEO drives both online inquiries and foot traffic.",
    },
    {
      q: "Do you help with Google reviews for Alexandria businesses?",
      a: "We can set up systems that make it easy to ask for and receive Google reviews consistently. Reviews are one of the most powerful local ranking factors, and we'll help you build a sustainable process for generating them ethically.",
    },
    {
      q: "Can you help a new Alexandria business rank quickly?",
      a: "New businesses take a bit longer to gain Google's trust, but we can accelerate the process significantly by building the right foundation from day one - optimized website, complete GBP, citations, and consistent review generation.",
    },
  ],
};

export default function AlexandriaPage() {
  return <LocationPage data={data} />;
}
