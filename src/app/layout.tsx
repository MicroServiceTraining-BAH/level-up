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
  title: "LevelUp Local — Get Your Business Online",
  description:
    "We build professional websites for local service businesses and turn them into customer-generating machines. Book a free website audit today.",
  icons: {
    icon: "/favicon-logo.png",
    apple: "/favicon-logo.png",
  },
  openGraph: {
    title: "LevelUp Local — Get Your Business Online",
    description:
      "We build professional websites for local service businesses and turn them into customer-generating machines. Book a free website audit today.",
    url: "https://lvluplocal.co",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LevelUp Local — Get Your Business Online",
    description:
      "We build professional websites for local service businesses and turn them into customer-generating machines. Book a free website audit today.",
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
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
