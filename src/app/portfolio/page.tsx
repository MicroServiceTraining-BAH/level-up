import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio — Website Design for Local Businesses",
  description:
    "See websites built by LevelUp Local for local service businesses — contractors, flooring, cleaning, landscaping, and more. Custom designs that generate real customers.",
  alternates: {
    canonical: "https://lvluplocal.co/portfolio",
  },
  openGraph: {
    title: "Portfolio — Website Design for Local Businesses | LevelUp Local",
    description:
      "See websites built by LevelUp Local for local service businesses — contractors, flooring, cleaning, landscaping, and more. Custom designs that generate real customers.",
    url: "https://lvluplocal.co/portfolio",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [{ url: "https://lvluplocal.co/logo.png", width: 1200, height: 630, alt: "LevelUp Local Portfolio — Web Design for Local Businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Website Design for Local Businesses | LevelUp Local",
    description:
      "See websites built by LevelUp Local for local service businesses — contractors, flooring, cleaning, landscaping, and more. Custom designs that generate real customers.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const projects = [
  {
    name: "Pacheco's Hardwood Floors",
    category: "Flooring Contractor",
    desc: "A premium, conversion-focused website for a family-owned hardwood flooring company serving Northern Virginia since 2021. Built to showcase their craftsmanship and drive free quote requests from homeowners.",
    highlights: ["Free quote request form", "Project photo gallery", "Service area coverage", "Google Reviews integration"],
    accentColor: "#C8A96E",
    url: "pachecoshardwoodfloor.vercel.app",
    live: "https://pachecoshardwoodfloor.vercel.app",
    img: "/portfolio-pacheco.png",
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
                      {project.url}
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
                      <p className="text-brand-muted text-sm leading-[1.8] mb-5">{project.desc}</p>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-80"
                        style={{ color: project.accentColor, background: `${project.accentColor}12`, border: `1px solid ${project.accentColor}30` }}>
                        View Live Site
                        <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
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
