import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — LevelUp Local",
  description: "Professional website builds, lead capture systems, and ongoing support for local service businesses.",
};

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Website Setup — From Scratch",
    tag: "Core Service",
    tagColor: "#00C2FF",
    desc: "We build your business a complete, professional website from the ground up. No templates. No generic designs. A real site that looks like your business and works hard to bring you customers.",
    bullets: [
      "3–5 custom pages (Home, Services, About, Contact, + more)",
      "Professional design tailored to your industry",
      "Fast-loading, SEO-friendly structure",
      "Contact forms and click-to-call buttons",
      "Launched and ready in 3–5 business days",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Lead Capture Systems",
    tag: "Convert Visitors",
    tagColor: "#39FF14",
    desc: "A pretty website isn't enough — you need systems that capture leads and get them into your hands. We set up everything so that when someone visits your site, they become a real inquiry.",
    bullets: [
      "Optimized contact and quote request forms",
      "Strategic CTA placement throughout every page",
      "Click-to-call and click-to-email buttons",
      "Mobile-first form design for maximum conversions",
      "Inquiry notification setup so you never miss a lead",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Local Visibility (Google Presence)",
    tag: "Get Found",
    tagColor: "#00C2FF",
    desc: "Your website needs to show up when people in your area search for what you do. We build your site with local SEO in mind and help get you in front of customers actively looking for your services.",
    bullets: [
      "Local SEO-optimized page structure and content",
      "Google Business Profile guidance and setup",
      "Location and service area targeting",
      "Fast page speeds (a major Google ranking factor)",
      "Schema markup for local business visibility",
    ],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Ongoing Support & Updates",
    tag: "Long-Term Partner",
    tagColor: "#39FF14",
    desc: "We don't disappear after your site goes live. We're your ongoing tech partner — keeping your site up-to-date, making changes when your business evolves, and answering questions when you need help.",
    bullets: [
      "Content updates and page changes",
      "New service or team member additions",
      "Performance monitoring and fixes",
      "Security and software updates",
      "Direct access to your team — no ticketing system",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(0,194,255,0.08) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">What We Do</p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[68px] leading-[1.03] tracking-[-0.03em] text-brand-text mb-6">
              Everything You Need to Get Online and{" "}
              <span className="text-brand-blue">Start Growing</span>
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75] max-w-2xl mb-10">
              We focus on one thing: helping local service businesses get online quickly and start generating real customers — without the tech headache.
            </p>
            <Link href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-base hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
              style={{ boxShadow: "0 0 28px rgba(0,194,255,0.35)" }}>
              Book a Free Website Audit →
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((s, i) => (
            <AnimateIn key={s.title} delay={i * 60}>
              <div className="p-8 md:p-10 rounded-3xl bg-brand-elevated border border-brand-border hover:border-brand-blue/25 transition-all duration-300"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-brand-blue border border-brand-blue/20"
                        style={{ background: "rgba(0,194,255,0.08)" }}>
                        {s.icon}
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border"
                        style={{ color: s.tagColor, borderColor: `${s.tagColor}30`, background: `${s.tagColor}08` }}>
                        {s.tag}
                      </span>
                    </div>
                    <h2 className="font-heading font-black text-2xl md:text-3xl text-brand-text mb-4 tracking-tight">{s.title}</h2>
                    <p className="text-brand-muted text-base leading-[1.8]">{s.desc}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-5">What&apos;s Included</p>
                    <ul className="space-y-3.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ borderColor: `${s.tagColor}40`, background: `${s.tagColor}10` }}>
                            <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke={s.tagColor} strokeWidth={3}>
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span className="text-brand-text text-sm leading-[1.7]">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section className="bg-brand-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">Who We Serve</p>
            <h2 className="font-heading font-black text-4xl md:text-[48px] leading-[1.06] tracking-[-0.03em] text-brand-text">
              Built for Local <span className="text-brand-blue">Service Businesses</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Contractors", "Flooring", "HVAC", "Plumbing", "Electrical",
              "Landscaping", "Cleaning", "Barbershops", "Salons", "Painters",
              "Roofing", "Any Local Business",
            ].map((industry, i) => (
              <AnimateIn key={industry} delay={i * 40}>
                <div className="px-4 py-3.5 rounded-xl bg-brand-elevated border border-brand-border text-center text-sm font-medium text-brand-muted hover:text-brand-blue hover:border-brand-blue/30 transition-all duration-200 cursor-default">
                  {industry}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-surface py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.05) 0%, transparent 60%)" }} />
        <AnimateIn className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">Ready?</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.03em] text-brand-text mb-6">
            Let&apos;s Build Your <span className="text-brand-blue">Online Presence</span>
          </h2>
          <p className="text-brand-muted text-lg leading-[1.75] mb-10">
            Book a free 15-minute audit call and we&apos;ll map out exactly what your business needs to get online and start generating customers.
          </p>
          <Link href="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-lg hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface transition-all duration-200"
            style={{ boxShadow: "0 0 32px rgba(0,194,255,0.35)" }}>
            Book Your Free Website Audit
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
