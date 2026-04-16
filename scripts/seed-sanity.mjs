import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

const testimonials = [
  {
    _type: "testimonial",
    quote:
      "I had zero online presence before LevelUp Local. Within a week I had a site live and started getting calls I never would have gotten. Best investment I've made.",
    name: "Marcus T.",
    role: "Owner, M&T Flooring",
    initials: "MT",
    order: 1,
  },
  {
    _type: "testimonial",
    quote:
      "They made the whole process completely painless. I don't know anything about websites and they handled everything. My phone hasn't stopped ringing.",
    name: "Diana R.",
    role: "Owner, DianaClean Services",
    initials: "DR",
    order: 2,
  },
  {
    _type: "testimonial",
    quote:
      "Customers tell me they found me on Google now. That never happened before. LevelUp Local got my business on the map - literally.",
    name: "Carlos V.",
    role: "Owner, GreenLawn Landscapes",
    initials: "CV",
    order: 3,
  },
];

const services = [
  {
    _type: "service",
    title: "Website Setup - From Scratch",
    tag: "Core Service",
    tagColor: "#00C2FF",
    description:
      "We build your business a complete, professional website from the ground up. No templates. No generic designs. A real site that looks like your business and works hard to bring you customers.",
    bullets: [
      "3-5 custom pages (Home, Services, About, Contact, + more)",
      "Professional design tailored to your industry",
      "Fast-loading, SEO-friendly structure",
      "Contact forms and click-to-call buttons",
      "Launched and ready in 3-5 business days",
    ],
    order: 1,
  },
  {
    _type: "service",
    title: "Lead Capture Systems",
    tag: "Convert Visitors",
    tagColor: "#39FF14",
    description:
      "A pretty website isn't enough - you need systems that capture leads and get them into your hands. We set up everything so that when someone visits your site, they become a real inquiry.",
    bullets: [
      "Optimized contact and quote request forms",
      "Strategic CTA placement throughout every page",
      "Click-to-call and click-to-email buttons",
      "Mobile-first form design for maximum conversions",
      "Inquiry notification setup so you never miss a lead",
    ],
    order: 2,
  },
  {
    _type: "service",
    title: "Local Visibility (Google Presence)",
    tag: "Get Found",
    tagColor: "#00C2FF",
    description:
      "Your website needs to show up when people in your area search for what you do. We build your site with local SEO in mind and help get you in front of customers actively looking for your services.",
    bullets: [
      "Local SEO-optimized page structure and content",
      "Google Business Profile guidance and setup",
      "Location and service area targeting",
      "Fast page speeds (a major Google ranking factor)",
      "Schema markup for local business visibility",
    ],
    order: 3,
  },
  {
    _type: "service",
    title: "Ongoing Support & Updates",
    tag: "Long-Term Partner",
    tagColor: "#39FF14",
    description:
      "We don't disappear after your site goes live. We're your ongoing tech partner - keeping your site up-to-date, making changes when your business evolves, and answering questions when you need help.",
    bullets: [
      "Content updates and page changes",
      "New service or team member additions",
      "Performance monitoring and fixes",
      "Security and software updates",
      "Direct access to your team - no ticketing system",
    ],
    order: 4,
  },
];

const teamMembers = [
  {
    _type: "teamMember",
    name: "Jean Carlo Philipps",
    role: "Sales & Client Strategy",
    initials: "JC",
    bio: "Jean Carlo leads client relationships and growth strategy. With a background in sales and local business development, he understands what it takes to help service businesses win more customers. He's the first person you'll talk to - and he makes sure every client feels heard.",
    color: "#00C2FF",
    order: 1,
  },
  {
    _type: "teamMember",
    name: "Gabriel Cajigas",
    role: "Design & Development",
    initials: "GC",
    bio: "Gabriel handles all design and development. He builds fast, conversion-focused websites that look professional and work hard for the businesses behind them. His philosophy: every pixel should serve a purpose, and every page should generate results.",
    color: "#39FF14",
    order: 2,
  },
];

const values = [
  {
    _type: "value",
    title: "Results Over Aesthetics",
    description:
      "A beautiful website that doesn't bring in customers is just decoration. We build for outcomes - calls, leads, and booked jobs.",
    order: 1,
  },
  {
    _type: "value",
    title: "Speed Matters",
    description:
      "Every day your business isn't online is revenue lost. We move fast because we know how much it matters to you.",
    order: 2,
  },
  {
    _type: "value",
    title: "Plain English, Always",
    description:
      "No jargon, no confusing tech talk. We explain everything in plain language and make the process simple.",
    order: 3,
  },
  {
    _type: "value",
    title: "Long-Term Partnership",
    description:
      "We don't disappear after launch. We're your ongoing tech partner - there when you need us.",
    order: 4,
  },
];

const portfolioItems = [
  {
    _type: "portfolioItem",
    name: "Pacheco's Hardwood Floors",
    category: "Flooring Contractor",
    description:
      "A premium, conversion-focused website for a family-owned hardwood flooring company serving Northern Virginia since 2021. Built to showcase their craftsmanship and drive free quote requests from homeowners.",
    highlights: [
      "Free quote request form",
      "Project photo gallery",
      "Service area coverage",
      "Google Reviews integration",
    ],
    accentColor: "#C8A96E",
    url: "pachecoshardwoodfloor.vercel.app",
    live: "https://pachecoshardwoodfloor.vercel.app",
    imageUrl: "https://lvluplocal.co/portfolio-pacheco.png",
    order: 1,
  },
];

async function seed() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error("ERROR: SANITY_API_TOKEN is not set in .env.local");
    console.error(
      "Get a token from sanity.io/manage > API > Tokens > Add API token (Editor role)",
    );
    process.exit(1);
  }

  const all = [
    ...testimonials,
    ...services,
    ...teamMembers,
    ...values,
    ...portfolioItems,
  ];

  console.log(`Seeding ${all.length} documents...`);

  for (const doc of all) {
    const result = await client.create(doc);
    console.log(
      `  Created ${doc._type}: ${doc.name ?? doc.title ?? doc.quote?.slice(0, 40)}`,
    );
  }

  console.log("\nDone! All data is now in Sanity.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
