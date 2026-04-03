import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Local SEO Services in Woodbridge, VA | LevelUp Local",
  description:
    "Local SEO and professional website design for small businesses in Woodbridge, VA. Rank on Google, get more local customers. Free SEO audit today.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/woodbridge-va",
  },
};

const data: LocationData = {
  city: "Woodbridge",
  state: "VA",
  slug: "woodbridge-va",
  headline: "Local SEO in Woodbridge, VA — Get Found by More Customers",
  subheadline:
    "Woodbridge is one of the most competitive local markets in Northern Virginia. We build the websites and SEO strategies that help your business stand out and capture more leads.",
  intro:
    "Woodbridge and the surrounding Prince William County area has seen explosive growth over the past decade. With tens of thousands of households and a thriving local business scene, the opportunity is enormous — but so is the competition. The businesses winning are the ones that have invested in their online presence.",
  about:
    "LevelUp Local works with Woodbridge businesses to build the full digital foundation: a fast, professional website built for local search, complete Google Business Profile optimization, and local keyword targeting across the service areas you actually serve. We turn your online presence into a consistent source of customer leads.",
  neighborhoods: [
    "Lake Ridge",
    "Occoquan",
    "Dale City",
    "Montclair",
    "Potomac Mills",
    "Old Bridge",
    "Marumsco",
    "Rippon Landing",
    "Belmont Bay",
    "Stonebridge",
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
    "Painters",
    "Auto Services",
    "Moving Services",
    "Childcare",
    "Fitness & Wellness",
    "Food & Beverage",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "How competitive is local SEO in Woodbridge, VA?",
      a: "Woodbridge is a high-growth, densely populated area with many businesses competing for the same customers. That means local SEO is highly valuable — businesses that rank well capture a significant share of local searches. It also means that getting your SEO foundation right from the start matters more.",
    },
    {
      q: "What's the most important thing I can do to rank in Woodbridge?",
      a: "For most Woodbridge businesses, optimizing your Google Business Profile and building a fast, well-structured website are the highest-impact starting points. Consistent reviews and local citations are the next layer. We handle all of this for you.",
    },
    {
      q: "Can I rank in Woodbridge and also target Dale City, Lake Ridge, or Occoquan?",
      a: "Yes — we build your website with location-specific content and set up your Google Business Profile to cover your entire service area, including Dale City, Lake Ridge, Occoquan, and surrounding neighborhoods.",
    },
    {
      q: "How much does it cost to get started with local SEO in Woodbridge?",
      a: "Our process starts with a free audit call — no commitment required. After that, packages start at $700 for a full website build with ongoing SEO support from $99/month. We'll customize a plan based on your business and goals.",
    },
  ],
};

export default function WoodbridgePage() {
  return <LocationPage data={data} />;
}
