import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-[52px] leading-[1.06] tracking-[-0.01em] text-brand-text">
      {children}
    </h2>
  );
}

const problems = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "You Don't Show Up on Google",
    desc: "When someone searches for your service locally, you're invisible. That customer goes straight to a competitor.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    title: "Customers Can't Find Your Services",
    desc: "Without an online presence, potential customers have no way to discover what you offer or how to reach you.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    title: "You're Missing Calls & Opportunities",
    desc: "Every day without a website is revenue lost. Customers tried to find you — and when they couldn't, they moved on.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: "Competitors Are Getting Your Business",
    desc: "The business down the street has a website. Guess who's getting the calls, bookings, and referrals? Not you.",
  },
];

const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Professional Website",
    desc: "3–5 page site built to convert visitors into customers. Clean, modern, and representing your brand.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "Mobile Optimized",
    desc: "Over 70% of local searches happen on phones. Your site works perfectly on every screen.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Lead Capture System",
    desc: "Contact forms and call-to-action buttons that turn site visitors into real leads.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Fast Launch",
    desc: "Most websites go live within 3–5 business days. We move fast so you can start growing faster.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Ongoing Support",
    desc: "Updates, changes, and support after launch. We're your long-term tech partner.",
  },
];

const steps = [
  { level: "01", title: "Book a Free Call", desc: "Schedule a quick 15-minute call. No pressure, no jargon — just a conversation about your business." },
  { level: "02", title: "We Learn Your Business", desc: "We ask the right questions to understand your goals, your customers, and what makes you different." },
  { level: "03", title: "We Build Your Website", desc: "Our team designs and builds your professional site while you focus on running your business." },
  { level: "04", title: "You Get Customers", desc: "Go live and start capturing leads, receiving calls, and growing your business online." },
];

const testimonials = [
  {
    quote: "I had zero online presence before LevelUp Local. Within a week I had a site live and started getting calls I never would have gotten. Best investment I've made.",
    name: "Marcus T.",
    role: "Owner, M&T Flooring",
    initials: "MT",
  },
  {
    quote: "They made the whole process completely painless. I don't know anything about websites and they handled everything. My phone hasn't stopped ringing.",
    name: "Diana R.",
    role: "Owner, DianaClean Services",
    initials: "DR",
  },
  {
    quote: "Customers tell me they found me on Google now. That never happened before. LevelUp Local got my business on the map — literally.",
    name: "Carlos V.",
    role: "Owner, GreenLawn Landscapes",
    initials: "CV",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-bg grain">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[10%] w-[700px] h-[700px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,194,255,0.13) 0%, transparent 65%)" }} />
          <div className="absolute bottom-0 right-[5%] w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(57,255,20,0.07) 0%, transparent 65%)" }} />
        </div>
        <div className="absolute inset-0 grid-bg" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-28 w-full">
          <div className="max-w-[880px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 mb-10">
              <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              <span className="text-brand-blue text-sm font-medium">Now accepting new clients — limited spots available</span>
            </div>

            <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.0] tracking-[-0.01em] text-brand-text mb-7">
              Don&apos;t Have a Website?{" "}
              <span className="text-brand-blue glow-blue-text">You&apos;re Losing Customers</span>{" "}
              Every Day.
            </h1>

            <p className="text-lg md:text-xl text-brand-muted leading-[1.75] max-w-2xl mb-10">
              We build your business a professional website and turn it into a system that brings you new customers consistently — no tech knowledge needed.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link href="/booking"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-base hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
                style={{ boxShadow: "0 0 32px rgba(0,194,255,0.35), 0 4px 16px rgba(0,0,0,0.5)" }}>
                Book a Free Website Audit
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-brand-border text-brand-text font-bold text-base hover:border-brand-blue/40 hover:text-brand-blue active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200">
                Get Your Business Online
              </Link>
            </div>

            <div className="flex flex-wrap gap-10 pt-8 border-t border-brand-border/60">
              {[
                { value: "3–5 Days", label: "Average launch time" },
                { value: "100%", label: "Mobile optimized" },
                { value: "24/7", label: "Customer generation" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-black text-2xl text-brand-blue">{s.value}</div>
                  <div className="text-brand-muted text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROBLEM ─── */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-2xl mb-16">
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading>
              If Customers Can&apos;t Find You Online,{" "}
              <span className="text-brand-blue">They&apos;re Choosing</span> Your Competitors
            </SectionHeading>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 80}>
                <div className="p-7 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-blue/30 group transition-all duration-300 h-full"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue mb-5 group-hover:bg-brand-blue/15 transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-3 leading-tight group-hover:text-brand-blue transition-colors duration-300">{p.title}</h3>
                  <p className="text-brand-muted text-sm leading-[1.75]">{p.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION ─── */}
      <section className="bg-brand-bg py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn from="left">
              <Eyebrow>The Solution</Eyebrow>
              <SectionHeading>
                We Build Your Online Presence{" "}
                <span className="text-brand-blue">From Scratch</span> — And Make It Work
              </SectionHeading>
              <p className="text-brand-muted text-lg leading-[1.75] mt-6 mb-8">
                LevelUp Local builds you a complete online presence: a professional website, a lead capture system, and ongoing support — so you can focus on doing the work, not chasing customers.
              </p>
              <div className="space-y-4">
                {[
                  "Custom website that represents your business professionally",
                  "Built-in contact and inquiry system to capture leads",
                  "Set up so customers can find you on Google",
                  "Ongoing support — we're your tech partner",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-green/15 border border-brand-green/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="#39FF14" strokeWidth={3}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-brand-text text-sm leading-[1.7]">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/booking"
                className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-xl bg-brand-blue text-brand-bg font-bold hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
                style={{ boxShadow: "0 0 24px rgba(0,194,255,0.3)" }}>
                Book Free Audit →
              </Link>
            </AnimateIn>

            <AnimateIn from="right">
              {/* RPG STAT CARD */}
              <div className="relative rounded-2xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #0e0e1a 0%, #12121f 100%)",
                  border: "1px solid rgba(0,194,255,0.2)",
                  boxShadow: "0 0 0 1px rgba(0,194,255,0.05), 0 24px 64px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)",
                  animation: "flicker 8s infinite",
                }}>

                {/* Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden rounded-2xl opacity-[0.03]"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,194,255,0.8) 2px, rgba(0,194,255,0.8) 3px)", backgroundSize: "100% 3px" }} />

                {/* Corner brackets */}
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-brand-blue opacity-60 rounded-tl" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-brand-blue opacity-60 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-brand-blue opacity-60 rounded-bl" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-brand-blue opacity-60 rounded-br" />

                <div className="relative z-20 p-7">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-brand-blue text-[10px] font-bold tracking-[0.25em] uppercase">Your Business</p>
                      <p className="font-heading font-black text-brand-text text-xl tracking-tight mt-0.5">STAT SCREEN</p>
                    </div>
                    <div className="text-right">
                      <p className="text-brand-muted text-[10px] tracking-widest uppercase">Power Level</p>
                      <p className="font-heading font-black text-3xl leading-none" style={{ color: "#39FF14", textShadow: "0 0 20px rgba(57,255,20,0.5)" }}>MAX</p>
                    </div>
                  </div>

                  {/* Stat rows */}
                  <div className="space-y-4">
                    {[
                      { stat: "Online Presence",   before: "0",  after: "100", color: "#00C2FF", pct: "100%" },
                      { stat: "Mobile Experience", before: "0",  after: "100", color: "#39FF14", pct: "100%" },
                      { stat: "Lead Generation",   before: "0",  after: "100", color: "#00C2FF", pct: "100%" },
                      { stat: "Google Visibility", before: "0",  after: "100", color: "#39FF14", pct: "100%" },
                      { stat: "Local Authority",   before: "0",  after: "100", color: "#00C2FF", pct: "100%" },
                    ].map((row, i) => (
                      <div key={row.stat}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-brand-muted text-xs font-mono tracking-wider uppercase">{row.stat}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-brand-muted text-[10px] font-mono line-through opacity-50">LVL {row.before}</span>
                            <span className="text-[10px]">→</span>
                            <span className="font-heading font-black text-xs px-2 py-0.5 rounded"
                              style={{
                                color: row.color,
                                background: `${row.color}18`,
                                border: `1px solid ${row.color}40`,
                                textShadow: `0 0 8px ${row.color}`,
                                animation: `lvl-pop 0.4s ease-out ${i * 0.1 + 0.3}s both`,
                              }}>
                              LVL MAX ▲
                            </span>
                          </div>
                        </div>
                        <div className="h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.04)" }}>
                          <div className="h-full rounded-full"
                            style={{
                              width: row.pct,
                              background: `linear-gradient(90deg, ${row.color}99, ${row.color})`,
                              boxShadow: `0 0 10px ${row.color}80`,
                              animation: `xp-fill 1s cubic-bezier(0.22,1,0.36,1) ${i * 0.12 + 0.2}s both`,
                              ["--xp-width" as string]: row.pct,
                            }} />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-5 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(0,194,255,0.12)" }}>
                    <span className="text-brand-muted text-[10px] font-mono tracking-widest uppercase">Status</span>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(57,255,20,0.08)", border: "1px solid rgba(57,255,20,0.25)" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green" style={{ animation: "pulse-dot 1.5s infinite", boxShadow: "0 0 6px #39FF14" }} />
                      <span className="text-brand-green text-[10px] font-bold tracking-[0.2em]">LEVELED UP</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ─── WHAT YOU GET ─── */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <SectionHeading>Everything You Need to Get Online and Start Growing</SectionHeading>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <AnimateIn key={f.title} delay={i * 70}>
                <div className="p-7 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-blue/30 group transition-all duration-300 h-full"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
                  <div className="w-11 h-11 rounded-xl bg-brand-blue/10 border border-brand-blue/15 flex items-center justify-center text-brand-blue mb-5 group-hover:bg-brand-blue/20 transition-colors duration-300">
                    {f.icon}
                  </div>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-2 group-hover:text-brand-blue transition-colors duration-300">{f.title}</h3>
                  <p className="text-brand-muted text-sm leading-[1.75]">{f.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPEED ─── */}
      <section className="relative bg-brand-bg py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.05) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <AnimateIn>
            <Eyebrow>Fast Turnaround</Eyebrow>
            <SectionHeading>
              Go Live in <span className="text-brand-blue">Days,</span> Not Months
            </SectionHeading>
            <p className="text-brand-muted text-lg leading-[1.75] max-w-xl mx-auto mt-6 mb-14">
              Traditional agencies take 2–3 months and charge thousands. We launch your site in days and keep things simple.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { day: "Day 1", title: "Kickoff Call", desc: "We learn about your business and gather everything we need." },
              { day: "Day 2–4", title: "Build & Design", desc: "We design and build your complete website." },
              { day: "Day 5", title: "Go Live", desc: "Your website launches and customers can start finding you." },
            ].map((step, i) => (
              <AnimateIn key={step.day} delay={i * 100}>
                <div className="p-7 rounded-2xl bg-brand-elevated border border-brand-border text-left"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-brand-blue border border-brand-blue/25 mb-4"
                    style={{ background: "rgba(0,194,255,0.06)" }}>
                    {step.day}
                  </div>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-2">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-[1.7]">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>The Process</Eyebrow>
            <SectionHeading>
              Simple. Fast. <span className="text-brand-blue">Effective.</span>
            </SectionHeading>
            <p className="text-brand-muted text-lg leading-[1.75] mt-5">
              Four steps to get your business online and generating customers.
            </p>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimateIn key={step.level} delay={i * 90}>
                <div className="relative p-7 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-blue/35 group transition-all duration-300 h-full"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}>
                  <div className="flex items-baseline gap-1.5 mb-5">
                    <span className="text-[10px] font-bold font-heading tracking-[0.2em] text-brand-green uppercase">LVL</span>
                    <span className="text-4xl font-heading font-black text-brand-border group-hover:text-brand-blue/40 leading-none transition-colors duration-300">{step.level}</span>
                  </div>
                  <div className="h-[3px] w-full bg-brand-border rounded-full overflow-hidden mb-5">
                    <div className="h-full rounded-full"
                      style={{ width: `${(i + 1) * 25}%`, background: "#00C2FF", boxShadow: "0 0 8px rgba(0,194,255,0.5)" }} />
                  </div>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-3 leading-tight group-hover:text-brand-blue transition-colors duration-300">{step.title}</h3>
                  <p className="text-brand-muted text-sm leading-[1.75]">{step.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="text-center mt-12">
            <Link href="/booking"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-base hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-surface transition-all duration-200"
              style={{ boxShadow: "0 0 28px rgba(0,194,255,0.3), 0 4px 12px rgba(0,0,0,0.4)" }}>
              Start at Level 1 — Book Free Call
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── RESULTS ─── */}
      <section className="bg-brand-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>The Results</Eyebrow>
            <SectionHeading>
              What This Means For <span className="text-brand-blue">Your Business</span>
            </SectionHeading>
          </AnimateIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {[
              { stat: "3–5x", label: "More inbound calls", color: "text-brand-blue" },
              { stat: "24/7", label: "Customer generation", color: "text-brand-green" },
              { stat: "5 days", label: "Average launch time", color: "text-brand-blue" },
              { stat: "100%", label: "Mobile ready", color: "text-brand-green" },
            ].map((r, i) => (
              <AnimateIn key={r.label} delay={i * 80}>
                <div className="p-7 rounded-2xl bg-brand-elevated border border-brand-border text-center"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                  <div className={`font-heading font-black text-4xl md:text-5xl ${r.color} mb-2 tracking-tight`}>{r.stat}</div>
                  <div className="text-brand-muted text-sm">{r.label}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "More Calls & Inquiries", desc: "Customers can find your number and reach you directly from your website." },
              { title: "More Booked Jobs", desc: "Convert website visitors into paying customers on autopilot." },
              { title: "Professional Presence", desc: "Look like a trustworthy business that customers want to hire." },
              { title: "Long-Term Growth", desc: "Your website works for you every hour of every day — even while you sleep." },
            ].map((item, i) => (
              <AnimateIn key={item.title} delay={i * 70}>
                <div className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-border">
                  <div className="w-1 rounded-full flex-shrink-0"
                    style={{ background: i % 2 === 0 ? "#00C2FF" : "#39FF14" }} />
                  <div>
                    <h3 className="font-heading font-bold text-brand-text text-base mb-2">{item.title}</h3>
                    <p className="text-brand-muted text-sm leading-[1.7]">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Social Proof</Eyebrow>
            <SectionHeading>
              Trusted by <span className="text-brand-blue">Local Businesses</span>
            </SectionHeading>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 90}>
                <div className="p-8 rounded-2xl bg-brand-elevated border border-brand-border h-full flex flex-col"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#00C2FF">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-brand-text text-sm leading-[1.8] flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-brand-border">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/15 border border-brand-blue/25 flex items-center justify-center font-heading font-bold text-brand-blue text-sm">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-brand-text font-semibold text-sm">{t.name}</div>
                      <div className="text-brand-muted text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="relative bg-brand-bg py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.07) 0%, transparent 55%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <AnimateIn className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <Eyebrow>Let&apos;s Go</Eyebrow>
          <SectionHeading>
            Let&apos;s Get Your Business <span className="text-brand-blue">Online</span>
          </SectionHeading>
          <p className="text-brand-muted text-lg leading-[1.75] mt-6 mb-10 max-w-xl mx-auto">
            Stop losing customers to competitors with websites. Book your free 15-minute audit and let&apos;s build your online presence — fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/booking"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-lg hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
              style={{ boxShadow: "0 0 40px rgba(0,194,255,0.4), 0 8px 24px rgba(0,0,0,0.5)" }}>
              Book Your Free Website Audit
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl border border-brand-border text-brand-text font-bold text-lg hover:border-brand-blue/40 hover:text-brand-blue active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200">
              Ask a Question
            </Link>
          </div>
        </AnimateIn>
      </section>
    </>
  );
}
