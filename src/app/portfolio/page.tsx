import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — LevelUp Local",
  description: "Example websites built by LevelUp Local for local service businesses.",
};

const projects = [
  {
    name: "Miller's Flooring Co.",
    category: "Flooring Contractor",
    desc: "A clean, conversion-focused website for a family-owned flooring company. Built to showcase their work and drive quote requests from homeowners.",
    highlights: ["Quote request form", "Project gallery", "Service area page", "Google Maps integration"],
    gradient: "from-[#0a1628] to-[#0d1f3c]",
    accentColor: "#00C2FF",
    img: "https://placehold.co/1200x700/0d1f3c/00C2FF?text=Miller%27s+Flooring+Co.",
  },
  {
    name: "GreenScape Landscaping",
    category: "Landscaping Company",
    desc: "A bold, imagery-driven website for a landscaping company targeting suburban homeowners. Heavy focus on before/after photos and seasonal service promos.",
    highlights: ["Seasonal promotions section", "Before/after gallery", "Instant quote form", "Service package pages"],
    gradient: "from-[#061a0e] to-[#0a2614]",
    accentColor: "#39FF14",
    img: "https://placehold.co/1200x700/0a2614/39FF14?text=GreenScape+Landscaping",
  },
  {
    name: "The Fade Shop",
    category: "Barbershop",
    desc: "A sleek, modern website for a high-end urban barbershop. Designed to drive online bookings and showcase the shop's vibe and expertise.",
    highlights: ["Online booking integration", "Team member profiles", "Service menu with pricing", "Instagram feed embed"],
    gradient: "from-[#1a0a0a] to-[#2a0f0f]",
    accentColor: "#FF6B35",
    img: "https://placehold.co/1200x700/2a0f0f/FF6B35?text=The+Fade+Shop",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(0,194,255,0.07) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">Our Work</p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[68px] leading-[1.03] tracking-[-0.01em] text-brand-text mb-6">
              Real Websites for{" "}
              <span className="text-brand-blue">Real Businesses</span>
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75] max-w-2xl">
              Here&apos;s a look at example websites we build for local service businesses — clean, professional, and built to convert visitors into customers.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-brand-surface py-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {projects.map((project, i) => (
            <AnimateIn key={project.name} delay={i * 80}>
              <div className="rounded-3xl overflow-hidden border border-brand-border"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
                {/* Browser chrome */}
                <div className="bg-brand-elevated px-5 py-3.5 flex items-center gap-3 border-b border-brand-border">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="max-w-sm mx-auto bg-brand-surface rounded-md px-3 py-1.5 text-brand-muted text-xs font-mono flex items-center gap-2">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      www.{project.name.toLowerCase().replace(/[^a-z]/g, "")}.com
                    </div>
                  </div>
                </div>

                {/* Mockup image */}
                <div className="relative">
                  <img
                    src={project.img}
                    alt={`${project.name} website mockup`}
                    className="w-full object-cover"
                    style={{ maxHeight: "400px" }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(9,9,15,0.7) 0%, rgba(9,9,15,0.15) 50%, transparent 100%)" }} />
                  {/* Color treatment */}
                  <div className="absolute inset-0 mix-blend-multiply"
                    style={{ background: `${project.accentColor}10` }} />
                </div>

                {/* Info */}
                <div className="bg-brand-elevated p-8 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mb-4 inline-block"
                        style={{ color: project.accentColor, borderColor: `${project.accentColor}30`, background: `${project.accentColor}08` }}>
                        {project.category}
                      </span>
                      <h2 className="font-heading font-black text-2xl md:text-3xl text-brand-text mb-3 tracking-tight">{project.name}</h2>
                      <p className="text-brand-muted text-sm leading-[1.8]">{project.desc}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted mb-4">Key Features</p>
                      <ul className="space-y-3">
                        {project.highlights.map((h) => (
                          <li key={h} className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: project.accentColor }} />
                            <span className="text-brand-text text-sm">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-bg py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.06) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <AnimateIn className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">Your Turn</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-brand-text mb-6">
            Want a Website Like This for <span className="text-brand-blue">Your Business?</span>
          </h2>
          <p className="text-brand-muted text-lg leading-[1.75] mb-10">
            Book a free 15-minute audit call. We&apos;ll talk about your business and show you exactly what your website would look like.
          </p>
          <Link href="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-lg hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
            style={{ boxShadow: "0 0 32px rgba(0,194,255,0.35)" }}>
            Book Your Free Website Audit
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </AnimateIn>
      </section>
    </>
  );
}
