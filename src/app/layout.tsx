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
    default: "LevelUp Local — Website Builder for Local Businesses",
    template: "%s | LevelUp Local",
  },
  description:
    "LevelUp Local builds professional websites for local service businesses. Custom website design, lead capture, and local SEO — live in 3–5 days. Get a free audit today.",
  keywords: [
    "website builder for small businesses",
    "website builder for local businesses",
    "local business website design",
    "professional website builder",
    "small business web design",
    "custom website design",
    "affordable website builder",
    "website design for contractors",
    "local SEO website",
    "get your business online",
    "website design agency",
    "web design for service businesses",
  ],
  icons: {
    icon: "/favicon-logo.png",
    apple: "/favicon-logo.png",
  },
  openGraph: {
    title: "LevelUp Local — Website Builder for Local Businesses",
    description:
      "LevelUp Local builds professional websites for local service businesses. Custom website design, lead capture, and local SEO — live in 3–5 days. Get a free audit today.",
    url: "https://lvluplocal.co",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelUp Local — Website Builder for Local Businesses",
    description:
      "LevelUp Local builds professional websites for local service businesses. Custom website design, lead capture, and local SEO — live in 3–5 days. Get a free audit today.",
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
              "@type": "ProfessionalService",
              name: "LevelUp Local",
              url: "https://lvluplocal.co",
              logo: "https://lvluplocal.co/favicon-logo.png",
              description:
                "LevelUp Local builds professional websites for local service businesses. Custom website design, lead capture, and local SEO — live in 3–5 days.",
              serviceType: [
                "Website Builder",
                "Web Design",
                "Local SEO",
                "Lead Generation",
              ],
              areaServed: "United States",
              priceRange: "$$",
              sameAs: [],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Design Services",
                itemListElement: [
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
                      name: "Lead Capture Systems",
                      description:
                        "Optimized contact forms, CTAs, and click-to-call buttons that turn visitors into real inquiries.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Local SEO",
                      description:
                        "Local SEO-optimized website structure and content to help your business show up in Google search.",
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
