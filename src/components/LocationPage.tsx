import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

export type LocationData = {
  city: string;
  state: string;
  slug: string;
  headline: string;
  subheadline: string;
  intro: string;
  about: string;
  neighborhoods: string[];
  industries: string[];
  faqs: { q: string; a: string }[];
};

type Props = { data: LocationData };

const otherLocations = [
  { city: "Stafford", slug: "stafford-va" },
  { city: "Fredericksburg", slug: "fredericksburg-va" },
  { city: "Woodbridge", slug: "woodbridge-va" },
  { city: "Manassas", slug: "manassas-va" },
  { city: "Arlington", slug: "arlington-va" },
  { city: "Alexandria", slug: "alexandria-va" },
  { city: "Fairfax", slug: "fairfax-va" },
];

export default function LocationPage({ data }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://lvluplocal.co/locations/${data.slug}`,
    name: "LevelUp Local",
    url: `https://lvluplocal.co/locations/${data.slug}`,
    description: `LevelUp Local provides local SEO services and professional website design for small businesses in ${data.city}, ${data.state}.`,
    areaServed: {
      "@type": "City",
      name: data.city,
      containedInPlace: { "@type": "State", name: "Virginia" },
    },
    serviceType: ["Local SEO", "Website Design", "Google Business Profile Optimization", "Lead Generation"],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lvluplocal.co/locations/${data.slug}`,
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,194,255,0.09) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              {data.city}, {data.state}
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[68px] leading-[1.03] tracking-[-0.01em] text-brand-text mb-6">
              {data.headline}
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75] max-w-2xl mb-10">
              {data.subheadline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-base hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
                style={{ boxShadow: "0 0 28px rgba(0,194,255,0.35)" }}>
                Get a Free SEO Audit →
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-brand-text font-bold text-base hover:border-brand-blue/40 hover:text-brand-blue active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200">
                View Our Services
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* About the Area */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn from="left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
                Why {data.city} Businesses Choose Us
              </p>
              <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-brand-text mb-6">
                Local SEO Services Built for{" "}
                <span className="text-brand-blue">{data.city}</span>
              </h2>
              <p className="text-brand-muted text-lg leading-[1.8] mb-6">{data.intro}</p>
              <p className="text-brand-muted text-base leading-[1.85]">{data.about}</p>
            </AnimateIn>
            <AnimateIn from="right">
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-5">
                  Areas We Serve in {data.city}
                </p>
                <div className="flex flex-wrap gap-3">
                  {data.neighborhoods.map((n) => (
                    <span key={n} className="px-4 py-2 rounded-xl bg-brand-elevated border border-brand-border text-brand-muted text-sm">
                      {n}
                    </span>
                  ))}
                </div>
                <div className="mt-8 p-6 rounded-2xl bg-brand-elevated border border-brand-blue/15"
                  style={{ boxShadow: "0 0 32px rgba(0,194,255,0.05)" }}>
                  <p className="text-brand-text font-semibold text-base mb-4">
                    What You Get With LevelUp Local
                  </p>
                  <ul className="space-y-3">
                    {[
                      `Professional website optimized for ${data.city} searches`,
                      "Google Business Profile setup & optimization",
                      "Local keyword targeting for your service area",
                      "Lead capture forms and click-to-call setup",
                      "Schema markup for local business visibility",
                      "Ongoing support from a real team",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: "rgba(0,194,255,0.08)", border: "1px solid rgba(0,194,255,0.25)" }}>
                          <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#00C2FF" strokeWidth={3}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="text-brand-muted text-sm leading-[1.7]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-brand-bg py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">Who We Help</p>
            <h2 className="font-heading font-black text-4xl md:text-[44px] leading-[1.06] tracking-[-0.01em] text-brand-text">
              Local Businesses in{" "}
              <span className="text-brand-blue">{data.city}</span> We Serve
            </h2>
          </AnimateIn>
          <div className="flex flex-wrap justify-center gap-3">
            {data.industries.map((ind, i) => (
              <AnimateIn key={ind} delay={i * 30}>
                <div className="px-5 py-3 rounded-xl bg-brand-elevated border border-brand-border text-brand-muted text-sm font-medium hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200 cursor-default">
                  {ind}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">FAQ</p>
            <h2 className="font-heading font-black text-4xl leading-[1.06] tracking-[-0.01em] text-brand-text">
              Common Questions from{" "}
              <span className="text-brand-blue">{data.city}</span> Businesses
            </h2>
          </AnimateIn>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <AnimateIn key={i} delay={i * 60}>
                <div className="p-7 rounded-2xl bg-brand-elevated border border-brand-border"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-3">{faq.q}</h3>
                  <p className="text-brand-muted text-sm leading-[1.85]">{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-3">Service Area</p>
            <h2 className="font-heading font-bold text-2xl text-brand-text">
              We Also Serve These Northern Virginia Cities
            </h2>
          </AnimateIn>
          <AnimateIn className="flex flex-wrap justify-center gap-3">
            {otherLocations
              .filter((l) => l.slug !== data.slug)
              .map((loc) => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`}
                  className="px-5 py-2.5 rounded-full bg-brand-elevated border border-brand-border text-sm text-brand-muted hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200">
                  {loc.city}, VA
                </Link>
              ))}
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-surface py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.05) 0%, transparent 60%)" }} />
        <AnimateIn className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">Ready?</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-brand-text mb-6">
            Grow Your {data.city} Business <span className="text-brand-blue">Online</span>
          </h2>
          <p className="text-brand-muted text-lg leading-[1.75] mb-10">
            Book a free 15-minute audit and find out exactly what it will take to rank your {data.city}{" "}
            business on Google and start generating more local customers.
          </p>
          <Link href="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-lg hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface transition-all duration-200"
            style={{ boxShadow: "0 0 32px rgba(0,194,255,0.35)" }}>
            Book Your Free SEO Audit
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
