import type { Metadata } from "next";
import LocationPage from "@/components/LocationPage";
import type { LocationData } from "@/components/LocationPage";

export const metadata: Metadata = {
  title: "Web Design & Local SEO Services in Stafford, VA",
  description:
    "Professional website design and local SEO for small businesses in Stafford, VA. Rank on Google, get more calls, and grow your customer base. Free audit today.",
  alternates: {
    canonical: "https://lvluplocal.co/locations/stafford-va",
  },
  openGraph: {
    title: "Web Design & Local SEO Services in Stafford, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Stafford, VA. Rank on Google, get more calls, and grow your customer base. Free audit today.",
    url: "https://lvluplocal.co/locations/stafford-va",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://lvluplocal.co/logo.png", width: 1200, height: 630, alt: "LevelUp Local — Web Design & SEO in Stafford, VA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Local SEO Services in Stafford, VA | LevelUp Local",
    description:
      "Professional website design and local SEO for small businesses in Stafford, VA. Rank on Google, get more calls, and grow your customer base. Free audit today.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const data: LocationData = {
  city: "Stafford",
  state: "VA",
  slug: "stafford-va",
  headline: "Local SEO Services in Stafford, VA That Get You Customers",
  subheadline:
    "We help Stafford small businesses rank on Google, show up on Maps, and convert visitors into paying customers — with professional websites and targeted local SEO.",
  intro:
    "Stafford County is one of the fastest-growing areas in Northern Virginia, and competition for local customers is fierce. Whether you're a contractor in Garrisonville, a cleaning service near Embrey Mill, or a landscaper serving the whole county — if you're not showing up on Google, you're invisible to the customers actively searching for you.",
  about:
    "LevelUp Local builds the digital foundation Stafford businesses need to compete: a fast, professional website optimized for local searches, a fully optimized Google Business Profile, and a lead generation system that turns site visitors into real customer inquiries. We know the Stafford market and build strategies around what your specific customers are actually searching for.",
  neighborhoods: [
    "Garrisonville",
    "Embrey Mill",
    "Aquia Harbour",
    "Colonial Forge",
    "Widewater",
    "Mountain View",
    "Stafford Courthouse",
    "Falmouth",
    "North Stafford",
    "South Stafford",
  ],
  industries: [
    "Contractors",
    "HVAC",
    "Plumbing",
    "Electrical",
    "Landscaping",
    "Cleaning Services",
    "Roofing",
    "Flooring",
    "Painters",
    "Tree Services",
    "Pressure Washing",
    "Auto Repair",
    "Childcare",
    "Pet Services",
    "Any Local Business",
  ],
  faqs: [
    {
      q: "How long does it take to rank on Google in Stafford, VA?",
      a: "For most local service businesses in Stafford, you can expect to see meaningful movement in Google rankings within 3–6 months of consistent SEO work. Competitive categories may take longer. The businesses that rank well invest in SEO consistently over time — not as a one-time fix.",
    },
    {
      q: "Do I need a website to rank on Google Maps in Stafford?",
      a: "You can rank on Google Maps without a website, but having a well-optimized website dramatically improves your local rankings and helps Google trust your business. A website also gives customers a place to learn about your services and contact you directly.",
    },
    {
      q: "What does local SEO cost for a Stafford small business?",
      a: "Our services for Stafford businesses start with a free audit call. After that, our website and SEO packages start at $700 for the initial build, with ongoing support from $99/month. We'll give you a clear quote after understanding your specific business and goals.",
    },
    {
      q: "Can you help me show up in Stafford AND nearby cities like Fredericksburg or Woodbridge?",
      a: "Yes — we can build location-targeted pages and optimize your Google Business Profile service area to help you rank across multiple Northern Virginia cities, not just Stafford.",
    },
  ],
};

export default function StaffordPage() {
  return <LocationPage data={data} />;
}
