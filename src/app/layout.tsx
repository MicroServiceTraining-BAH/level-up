import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lvluplocal.co"),
  title: {
    default: "Local SEO & Web Design for Small Businesses | LevelUp Local",
    template: "%s | LevelUp Local",
  },
  description:
    "LevelUp Local helps local businesses rank on Google with professional websites and local SEO. Serving Northern Virginia — Stafford, Fredericksburg, Woodbridge, Manassas & more. Free audit today.",
  keywords: [
    "local SEO services",
    "small business SEO",
    "local business marketing agency",
    "local business website design",
    "small business web design",
    "Northern Virginia SEO",
    "Stafford VA SEO",
    "Fredericksburg VA SEO",
    "Woodbridge VA web design",
    "Manassas VA SEO",
    "Arlington VA small business marketing",
    "Alexandria VA web design",
    "Fairfax VA SEO services",
    "Google Business Profile optimization",
    "website design for contractors",
    "local SEO for cleaning businesses",
    "NOVA small business marketing",
  ],
  icons: {
    icon: "/favicon-logo.png",
    apple: "/favicon-logo.png",
  },
  openGraph: {
    title: "Local SEO & Web Design for Small Businesses | LevelUp Local",
    description:
      "LevelUp Local helps local businesses rank on Google with professional websites and local SEO. Serving all of Northern Virginia. Free audit today.",
    url: "https://lvluplocal.co",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Web Design for Small Businesses | LevelUp Local",
    description:
      "LevelUp Local helps local businesses rank on Google with professional websites and local SEO. Serving all of Northern Virginia. Free audit today.",
  },
  alternates: {
    canonical: "https://lvluplocal.co",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-logo.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-brand-bg text-brand-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://lvluplocal.co",
              name: "LevelUp Local",
              url: "https://lvluplocal.co",
              logo: "https://lvluplocal.co/favicon-logo.png",
              image: "https://lvluplocal.co/logo.png",
              description:
                "LevelUp Local helps local businesses in Northern Virginia rank on Google with professional websites and local SEO services. Website design, Google Business Profile optimization, and lead generation — live in 3–5 days.",
              telephone: "",
              email: "Jcphilipps@lvluplocal.co",
              address: {
                "@type": "PostalAddress",
                addressRegion: "VA",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.4220,
                longitude: -77.4071,
              },
              areaServed: [
                { "@type": "City", name: "Stafford", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Fredericksburg", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Woodbridge", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Manassas", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Arlington", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Alexandria", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Fairfax", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Reston", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Herndon", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "McLean", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Vienna", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Falls Church", containedInPlace: { "@type": "State", name: "Virginia" } },
                { "@type": "City", name: "Dumfries", containedInPlace: { "@type": "State", name: "Virginia" } },
              ],
              serviceType: [
                "Local SEO Services",
                "Website Design",
                "Google Business Profile Optimization",
                "Lead Generation",
                "Small Business Marketing",
              ],
              priceRange: "$$",
              sameAs: [],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Local SEO & Web Design Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Local SEO Services",
                      description:
                        "Complete local SEO strategy including website optimization, Google Business Profile setup, and local keyword targeting to rank your business in Northern Virginia.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Website Design",
                      description:
                        "Professional custom websites built from scratch for local service businesses. No templates. Live in 3–5 business days.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Business Profile Optimization",
                      description:
                        "Complete Google Business Profile setup and optimization to help your business appear in Google Maps and local search results.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lead Generation Systems",
                      description:
                        "Optimized contact forms, CTAs, and click-to-call buttons that turn website visitors into real customer inquiries.",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
