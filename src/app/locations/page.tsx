import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Local SEO Services in Northern Virginia | LevelUp Local",
  description:
    "LevelUp Local provides local SEO and web design for small businesses across Northern Virginia - Stafford, Fredericksburg, Woodbridge, Manassas, Arlington, Alexandria, Fairfax & more.",
  alternates: {
    canonical: "https://lvluplocal.co/locations",
  },
  openGraph: {
    title: "Local SEO & Web Design Services Across Northern Virginia | LevelUp Local",
    description:
      "LevelUp Local provides local SEO and web design for small businesses across Northern Virginia - Stafford, Fredericksburg, Woodbridge, Manassas, Arlington, Alexandria, Fairfax & more.",
    url: "https://lvluplocal.co/locations",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://lvluplocal.co/logo.png", width: 1200, height: 630, alt: "LevelUp Local - Northern Virginia Local SEO & Web Design" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO & Web Design Services Across Northern Virginia | LevelUp Local",
    description:
      "LevelUp Local provides local SEO and web design for small businesses across Northern Virginia - Stafford, Fredericksburg, Woodbridge, Manassas, Arlington, Alexandria, Fairfax & more.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const locations = [
  {
    city: "Stafford",
    slug: "stafford-va",
    desc: "SEO services and web design for local businesses in Stafford, VA - helping you show up when customers search.",
  },
  {
    city: "Fredericksburg",
    slug: "fredericksburg-va",
    desc: "Rank higher on Google in Fredericksburg, VA with a professional website and local SEO strategy built for your business.",
  },
  {
    city: "Woodbridge",
    slug: "woodbridge-va",
    desc: "Get found by Woodbridge customers searching for your services with targeted local SEO and a conversion-ready website.",
  },
  {
    city: "Manassas",
    slug: "manassas-va",
    desc: "Help your Manassas business rank on Google Maps and capture more local leads with our SEO and web design services.",
  },
  {
    city: "Arlington",
    slug: "arlington-va",
    desc: "Stand out in Arlington's competitive market with a professional website and local SEO built to generate customers.",
  },
  {
    city: "Alexandria",
    slug: "alexandria-va",
    desc: "Get your Alexandria business found on Google with a fully optimized website, GBP setup, and local keyword strategy.",
  },
  {
    city: "Fairfax",
    slug: "fairfax-va",
    desc: "Local SEO and web design for Fairfax small businesses - rank higher, get more calls, and grow your customer base.",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(0,194,255,0.09) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Service Area
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[68px] leading-[1.03] tracking-[-0.01em] text-brand-text mb-6">
              Local SEO Services Across{" "}
              <span className="text-brand-blue">Northern Virginia</span>
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75] max-w-2xl mb-10">
              We help small businesses across NOVA rank on Google, get found by local
              customers, and turn their website into a lead generation machine.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-base hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
              style={{ boxShadow: "0 0 28px rgba(0,194,255,0.35)" }}
            >
              Book a Free SEO Audit →
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Cities We Serve
            </p>
            <h2 className="font-heading font-black text-4xl md:text-[48px] leading-[1.06] tracking-[-0.01em] text-brand-text">
              Find Your City Below
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((loc, i) => (
              <AnimateIn key={loc.slug} delay={i * 70}>
                <Link href={`/locations/${loc.slug}`} className="block group h-full">
                  <div
                    className="p-8 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-blue/30 transition-all duration-300 h-full flex flex-col"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-brand-blue border border-brand-blue/20"
                        style={{ background: "rgba(0,194,255,0.08)" }}
                      >
                        <svg
                          width="18"
                          height="18"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                      </div>
                      <h2 className="font-heading font-bold text-brand-text text-xl group-hover:text-brand-blue transition-colors duration-200">
                        {loc.city}, VA
                      </h2>
                    </div>
                    <p className="text-brand-muted text-sm leading-[1.8] flex-1 mb-5">
                      {loc.desc}
                    </p>
                    <div className="text-brand-blue text-sm font-medium flex items-center gap-1.5 group-hover:gap-2.5 transition-all duration-200">
                      View SEO services in {loc.city}
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local SEO */}
      <section className="bg-brand-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-2xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Why It Matters
            </p>
            <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-brand-text">
              Why Northern Virginia Businesses Need{" "}
              <span className="text-brand-blue">Local SEO</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                stat: "46%",
                title: "of all Google searches are local",
                desc: "Nearly half of every Google search has local intent - people looking for businesses, services, or products near them.",
              },
              {
                stat: "88%",
                title: "of local searches call within 24 hours",
                desc: "Customers who find you through local search convert at an extraordinarily high rate. Being visible means being chosen.",
              },
              {
                stat: "3x",
                title: "more leads from local SEO vs. paid ads",
                desc: "Over the long term, businesses with strong local SEO foundations consistently outperform those relying solely on paid advertising.",
              },
            ].map((item, i) => (
              <AnimateIn key={item.stat} delay={i * 80}>
                <div
                  className="p-8 rounded-2xl bg-brand-elevated border border-brand-border"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
                >
                  <div className="font-heading font-black text-5xl text-brand-blue mb-3 tracking-tight">
                    {item.stat}
                  </div>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-[1.8]">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-surface py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.05) 0%, transparent 60%)",
          }}
        />
        <AnimateIn className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
            Start Today
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-brand-text mb-6">
            Ready to Rank in Your{" "}
            <span className="text-brand-blue">Northern Virginia</span> City?
          </h2>
          <p className="text-brand-muted text-lg leading-[1.75] mb-10">
            Book a free 15-minute audit call and we&apos;ll map out exactly what your
            business needs to start showing up on Google in your area.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-lg hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface transition-all duration-200"
            style={{ boxShadow: "0 0 32px rgba(0,194,255,0.35)" }}
          >
            Book Your Free SEO Audit
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
