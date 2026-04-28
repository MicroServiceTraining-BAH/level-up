import type { Metadata } from "next";
import Link from "next/link";
import { getTestimonials } from "@/sanity/queries";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import PageAnimations from "@/components/PageAnimations";

export const metadata: Metadata = {
  title: "Local SEO Services That Bring You More Customers | LevelUp Local",
  description:
    "LevelUp Local delivers local SEO services and professional websites for small businesses in Northern Virginia. Get found on Google - free audit today.",
  alternates: { canonical: "https://lvluplocal.co" },
  openGraph: {
    title: "Local SEO Services That Bring You More Customers | LevelUp Local",
    description:
      "LevelUp Local delivers local SEO services and professional websites for small businesses in Northern Virginia. Get found on Google - free audit today.",
    url: "https://lvluplocal.co",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lvluplocal.co/logo.png",
        width: 1200,
        height: 630,
        alt: "LevelUp Local",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services That Bring You More Customers | LevelUp Local",
    description:
      "LevelUp Local delivers local SEO services and professional websites for small businesses in Northern Virginia.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-[#0099cc]">
      {children}
    </p>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      data-scroll-heading
      className={`font-heading font-black leading-[1.04] tracking-[-0.02em] text-[#080820] ${className}`}
      style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
    >
      {children}
    </h2>
  );
}

const problems = [
  {
    title: "You Don't Show Up on Google",
    desc: "When someone searches for your service locally, you're invisible. That customer goes straight to a competitor.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    accent: "#00C2FF",
  },
  {
    title: "Customers Can't Find Your Services",
    desc: "Without an online presence, potential customers have no way to discover what you offer or how to reach you.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    accent: "#10b981",
  },
  {
    title: "You're Missing Calls & Opportunities",
    desc: "Every day without a website is revenue lost. Customers tried to find you — and when they couldn't, they moved on.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 17z" />
        <line x1="1" y1="1" x2="23" y2="23" />
      </svg>
    ),
    accent: "#00C2FF",
  },
  {
    title: "Competitors Are Getting Your Business",
    desc: "The business down the street has a website. Guess who's getting the calls, bookings, and referrals? Not you.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    accent: "#10b981",
  },
];

const features = [
  {
    title: "Professional Website",
    desc: "3–5 page site built to convert visitors into customers. Clean, modern, and on-brand.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Mobile Optimized",
    desc: "Over 70% of local searches happen on phones. Your site works perfectly on every screen.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Lead Capture System",
    desc: "Contact forms and CTAs that turn site visitors into real leads and calls.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    title: "Fast Launch",
    desc: "Most websites go live within 3–5 business days. We move fast so you start growing faster.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Google Visibility",
    desc: "We set up your local SEO so customers in your area can find you when they search.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    desc: "Updates, changes, and support after launch. We're your long-term tech partner.",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const steps = [
  {
    level: "01",
    title: "Book a Free Call",
    desc: "Schedule a quick 15-minute call. No pressure, no jargon — just a conversation about your business.",
    color: "#0099cc",
  },
  {
    level: "02",
    title: "We Learn Your Business",
    desc: "We ask the right questions to understand your goals, your customers, and what makes you different.",
    color: "#0099cc",
  },
  {
    level: "03",
    title: "We Build Your Website",
    desc: "Our team designs and builds your professional site while you focus on running your business.",
    color: "#10b981",
  },
  {
    level: "04",
    title: "You Get Customers",
    desc: "Go live and start capturing leads, receiving calls, and growing your business online.",
    color: "#10b981",
  },
];

const staticTestimonials = [
  {
    quote:
      "I had zero online presence before LevelUp Local. Within a week I had a site live and started getting calls I never would have gotten. Best investment I've made.",
    name: "Marcus T.",
    role: "Owner, M&T Flooring",
    initials: "MT",
  },
  {
    quote:
      "They made the whole process completely painless. I don't know anything about websites and they handled everything. My phone hasn't stopped ringing.",
    name: "Diana R.",
    role: "Owner, DianaClean Services",
    initials: "DR",
  },
  {
    quote:
      "Customers tell me they found me on Google now. That never happened before. LevelUp Local got my business on the map — literally.",
    name: "Carlos V.",
    role: "Owner, GreenLawn Landscapes",
    initials: "CV",
  },
];

export default async function HomePage() {
  const sanityTestimonials = await getTestimonials();
  const testimonials =
    sanityTestimonials.length > 0 ? sanityTestimonials : staticTestimonials;

  return (
    <>
      <PageAnimations />
      <HeroSection />
      <MarqueeStrip />

      {/* ── PROBLEM ── */}
      <section style={{ background: "#f3f5fc" }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div data-scroll-fade className="max-w-2xl mb-16">
            <Eyebrow>The Problem</Eyebrow>
            <SectionHeading>
              If Customers Can&apos;t Find You Online,{" "}
              <span className="text-[#0099cc]">They&apos;re Choosing</span> Your
              Competitors
            </SectionHeading>
          </div>
          <div
            data-scroll-stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {problems.map((p) => (
              <div
                key={p.title}
                data-stagger-item
                className="card-hover p-7 rounded-2xl h-full flex flex-col gap-5"
                style={{ background: "#ffffff" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${p.accent}18`,
                    border: `1px solid ${p.accent}30`,
                    color: p.accent,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#080820] text-lg mb-2 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-[#6a6a8e] text-sm leading-[1.75]">
                    {p.desc}
                  </p>
                </div>
                <div
                  className="mt-auto h-[1px]"
                  style={{
                    background: `linear-gradient(90deg, ${p.accent}, transparent)`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section
        style={{ background: "#ffffff" }}
        className="py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div data-scroll-fade>
              <Eyebrow>The Solution</Eyebrow>
              <SectionHeading className="mb-6">
                We Build Your Online Presence{" "}
                <span className="text-[#0099cc]">From Scratch</span> — And Make
                It Work
              </SectionHeading>
              <p className="text-[#6a6a8e] text-lg leading-[1.75] mb-8">
                LevelUp Local builds you a complete online presence: a
                professional website, a lead capture system, and ongoing support
                — so you can focus on doing the work, not chasing customers.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Custom website that represents your business professionally",
                  "Built-in contact and inquiry system to capture leads",
                  "Set up so customers can find you on Google",
                  "Ongoing support — we're your tech partner",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(16,185,129,0.15)",
                        border: "1px solid rgba(16,185,129,0.15)",
                      }}
                    >
                      <svg
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#10b981"
                        strokeWidth={3}
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-[#3a3a5a] text-sm leading-[1.7]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/booking"
                data-cursor="cta"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#0099cc] hover:brightness-110 active:scale-[0.97] focus-visible:outline-none transition-[filter,transform] duration-200"
                style={{ boxShadow: "0 0 20px rgba(0,153,204,0.25)" }}
              >
                Book Free Audit →
              </Link>
            </div>

            {/* RPG Stat Card */}
            <div data-scroll-fade>
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, #0e0e1c 0%, #13131f 100%)",
                  border: "1px solid rgba(0,194,255,0.25)",
                  boxShadow:
                    "0 0 0 1px rgba(0,194,255,0.06), 0 24px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
                  animation: "flicker 8s infinite",
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none z-10 opacity-[0.035] rounded-2xl"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,194,255,0.8) 2px, rgba(0,194,255,0.8) 3px)",
                    backgroundSize: "100% 3px",
                  }}
                />
                <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#00C2FF] opacity-50 rounded-tl" />
                <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#00C2FF] opacity-50 rounded-tr" />
                <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#00C2FF] opacity-50 rounded-bl" />
                <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#00C2FF] opacity-50 rounded-br" />
                <div className="relative z-20 p-8">
                  <div className="flex items-center justify-between mb-7">
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#0099cc] mb-1">
                        Your Business
                      </p>
                      <p className="font-heading font-black text-[#080820] text-xl tracking-tight">
                        STAT SCREEN
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[#6a6a8e] text-[10px] tracking-widest uppercase mb-1">
                        Power Level
                      </p>
                      <p
                        className="font-heading font-black text-3xl leading-none"
                        style={{
                          color: "#10b981",
                          textShadow: "0 0 24px rgba(16,185,129,0.15)",
                        }}
                      >
                        MAX
                      </p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {[
                      { stat: "Online Presence", color: "#0099cc" },
                      { stat: "Mobile Experience", color: "#10b981" },
                      { stat: "Lead Generation", color: "#0099cc" },
                      { stat: "Google Visibility", color: "#10b981" },
                      { stat: "Local Authority", color: "#0099cc" },
                    ].map((row, i) => (
                      <div key={row.stat}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#6a6a8e] text-xs font-mono tracking-wider uppercase">
                            {row.stat}
                          </span>
                          <span
                            className="font-heading font-black text-[10px] px-2 py-0.5 rounded"
                            style={{
                              color: row.color,
                              background: `${row.color}18`,
                              border: `1px solid ${row.color}40`,
                              textShadow: `0 0 8px ${row.color}`,
                              animation: `lvl-pop 0.4s ease-out ${i * 0.1 + 0.3}s both`,
                            }}
                          >
                            LVL MAX ▲
                          </span>
                        </div>
                        <div
                          className="h-2 rounded-full overflow-hidden"
                          style={{ background: "rgba(255,255,255,0.06)" }}
                        >
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: "100%",
                              background: `linear-gradient(90deg, ${row.color}88, ${row.color})`,
                              boxShadow: `0 0 12px ${row.color}90`,
                              animation: `xp-fill 1.2s cubic-bezier(0.22,1,0.36,1) ${i * 0.14 + 0.3}s both`,
                              ["--xp-width" as string]: "100%",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-7 pt-5 flex items-center justify-between"
                    style={{ borderTop: "1px solid rgba(0,194,255,0.12)" }}
                  >
                    <span className="text-[#6a6a8e] text-[10px] font-mono tracking-widest uppercase">
                      Status
                    </span>
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(16,185,129,0.15)",
                        border: "1px solid rgba(16,185,129,0.15)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#10b981]"
                        style={{
                          animation: "pulse-dot 1.5s infinite",
                          boxShadow: "0 0 8px #10b981",
                        }}
                      />
                      <span className="font-bold text-[10px] tracking-[0.2em] text-[#10b981]">
                        LEVELED UP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT YOU GET ── */}
      <section style={{ background: "#f3f5fc" }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div data-scroll-fade className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>What&apos;s Included</Eyebrow>
            <SectionHeading>
              Everything You Need to Get Online and Start Growing
            </SectionHeading>
          </div>
          <div
            data-scroll-stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {features.map((f) => (
              <div
                key={f.title}
                data-stagger-item
                className="card-hover card-hover-lift p-7 rounded-2xl h-full flex flex-col gap-4 group"
                style={{ background: "#ffffff" }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0099cc]"
                  style={{
                    background: "rgba(0,194,255,0.1)",
                    border: "1px solid rgba(0,194,255,0.2)",
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[#080820] text-lg mb-2 group-hover:text-[#0099cc] transition-colors duration-300">
                    {f.title}
                  </h3>
                  <p className="text-[#6a6a8e] text-sm leading-[1.75]">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        className="relative pt-28 pb-36"
        style={{ background: "#ffffff" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.06) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div data-scroll-fade className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>The Process</Eyebrow>
            <SectionHeading>
              Simple. Fast. <span className="text-[#0099cc]">Effective.</span>
            </SectionHeading>
            <p className="text-[#6a6a8e] text-lg leading-[1.75] mt-5">
              Four steps to get your business online and generating customers.
            </p>
          </div>
          <div
            data-scroll-stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {steps.map((step, i) => (
              <div
                key={step.level}
                data-stagger-item
                className="card-hover group relative p-7 rounded-2xl h-full flex flex-col"
                style={{ background: "#ffffff" }}
              >
                <div className="flex items-baseline gap-1.5 mb-4">
                  <span
                    className="text-[10px] font-bold font-heading tracking-[0.2em] uppercase"
                    style={{ color: step.color }}
                  >
                    LVL
                  </span>
                  <span
                    className="text-4xl font-heading font-black leading-none"
                    style={{ color: "rgba(0,0,60,0.09)" }}
                  >
                    {step.level}
                  </span>
                </div>
                <div
                  className="h-[3px] w-full rounded-full overflow-hidden mb-5"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${(i + 1) * 25}%`,
                      background: step.color,
                      boxShadow: `0 0 10px ${step.color}80`,
                    }}
                  />
                </div>
                <h3 className="font-heading font-bold text-[#080820] text-lg mb-3 leading-tight group-hover:text-[#0099cc] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#6a6a8e] text-sm leading-[1.75]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-16 relative z-10">
            <Link
              href="/booking"
              data-cursor="cta"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-base text-white bg-[#0099cc] hover:brightness-110 active:scale-[0.97] focus-visible:outline-none transition-[filter,transform] duration-200"
              style={{
                boxShadow:
                  "0 0 24px rgba(0,153,204,0.3), 0 4px 16px rgba(0,0,0,0.1)",
              }}
            >
              Start at Level 1 — Book Free Call
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section style={{ background: "#f3f5fc" }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div data-scroll-fade className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>The Results</Eyebrow>
            <SectionHeading>
              What This Means For{" "}
              <span className="text-[#0099cc]">Your Business</span>
            </SectionHeading>
          </div>
          <div
            data-scroll-stagger
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12"
          >
            {[
              {
                display: "3–5×",
                label: "More inbound calls",
                color: "#0099cc",
              },
              {
                display: "24/7",
                label: "Customer generation",
                color: "#10b981",
              },
              {
                display: "5 days",
                label: "Average launch time",
                color: "#0099cc",
              },
              { display: "100%", label: "Mobile ready", color: "#10b981" },
            ].map((r) => (
              <div
                key={r.label}
                data-stagger-item
                className="p-8 rounded-2xl text-center"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,60,0.09)",
                  boxShadow: "0 2px 16px rgba(0,0,80,0.07)",
                }}
              >
                <div
                  className="font-heading font-black mb-2 tracking-tight"
                  style={{
                    fontSize: "clamp(32px, 4vw, 52px)",
                    color: r.color,
                    textShadow: `0 0 30px ${r.color}60`,
                  }}
                >
                  {r.display}
                </div>
                <div className="text-[#6a6a8e] text-sm">{r.label}</div>
              </div>
            ))}
          </div>
          <div
            data-scroll-stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              {
                title: "More Calls & Inquiries",
                desc: "Customers can find your number and reach you directly from your website.",
                color: "#0099cc",
              },
              {
                title: "More Booked Jobs",
                desc: "Convert website visitors into paying customers on autopilot.",
                color: "#10b981",
              },
              {
                title: "Professional Presence",
                desc: "Look like a trustworthy business that customers want to hire.",
                color: "#0099cc",
              },
              {
                title: "Long-Term Growth",
                desc: "Your website works for you every hour of every day — even while you sleep.",
                color: "#10b981",
              },
            ].map((item) => (
              <div
                key={item.title}
                data-stagger-item
                className="flex gap-4 p-6 rounded-2xl"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,60,0.09)",
                }}
              >
                <div
                  className="w-1 rounded-full flex-shrink-0"
                  style={{ background: item.color }}
                />
                <div>
                  <h3 className="font-heading font-bold text-[#080820] text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#6a6a8e] text-sm leading-[1.7]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#ffffff" }} className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div data-scroll-fade className="text-center max-w-2xl mx-auto mb-16">
            <Eyebrow>Social Proof</Eyebrow>
            <SectionHeading>
              Trusted by{" "}
              <span className="text-[#0099cc]">Local Businesses</span>
            </SectionHeading>
          </div>
          <div
            data-scroll-stagger
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                data-stagger-item
                className="p-8 rounded-2xl flex flex-col h-full"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(0,0,60,0.09)",
                  boxShadow: "0 4px 24px rgba(0,0,80,0.08)",
                }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <svg
                      key={j}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="#00C2FF"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#3a3a5a] text-sm leading-[1.85] flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  className="flex items-center gap-3 pt-5"
                  style={{ borderTop: "1px solid rgba(0,0,60,0.09)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-[#0099cc] flex-shrink-0"
                    style={{
                      background: "rgba(0,194,255,0.12)",
                      border: "1px solid rgba(0,194,255,0.25)",
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-[#080820] font-semibold text-sm">
                      {t.name}
                    </div>
                    <div className="text-[#6a6a8e] text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ── */}
      <section style={{ background: "#f3f5fc" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div data-scroll-fade className="text-center max-w-2xl mx-auto mb-12">
            <Eyebrow>Service Area</Eyebrow>
            <SectionHeading>
              Serving All of{" "}
              <span className="text-[#0099cc]">Northern Virginia</span>
            </SectionHeading>
            <p className="text-[#6a6a8e] text-lg leading-[1.75] mt-5">
              We work with local businesses across NOVA — from Stafford to
              Arlington and everywhere in between.
            </p>
          </div>
          <div
            data-scroll-stagger
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3"
          >
            {[
              { city: "Stafford", slug: "stafford-va" },
              { city: "Fredericksburg", slug: "fredericksburg-va" },
              { city: "Woodbridge", slug: "woodbridge-va" },
              { city: "Manassas", slug: "manassas-va" },
              { city: "Arlington", slug: "arlington-va" },
              { city: "Alexandria", slug: "alexandria-va" },
              { city: "Fairfax", slug: "fairfax-va" },
            ].map((loc) => (
              <Link
                key={loc.city}
                data-stagger-item
                href={`/locations/${loc.slug}`}
                className="location-pill px-4 py-3.5 rounded-xl text-center text-sm font-medium block"
              >
                {loc.city}, VA
              </Link>
            ))}
          </div>
          <div data-scroll-fade className="text-center mt-8">
            <Link
              href="/locations"
              className="text-[#0099cc] text-sm font-medium hover:underline focus-visible:outline-none"
            >
              View all service areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-32" style={{ background: "#ffffff" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, rgba(0,194,255,0.14) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div
          data-scroll-fade
          className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        >
          <Eyebrow>Let&apos;s Go</Eyebrow>
          <SectionHeading className="mb-6">
            Let&apos;s Get Your Business{" "}
            <span className="text-[#0099cc]">Online</span>
          </SectionHeading>
          <p className="text-[#6a6a8e] text-lg leading-[1.75] mb-10 max-w-xl mx-auto">
            Stop losing customers to competitors with websites. Book your free
            15-minute audit and let&apos;s build your online presence — fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/booking"
              data-cursor="cta"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg text-white bg-[#0099cc] hover:brightness-110 active:scale-[0.97] focus-visible:outline-none transition-[filter,transform] duration-200"
              style={{
                boxShadow:
                  "0 0 32px rgba(0,153,204,0.3), 0 8px 24px rgba(0,0,0,0.12)",
              }}
            >
              Book Your Free Website Audit
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
            <Link
              href="/contact"
              className="ghost-btn inline-flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-lg text-[#080820] focus-visible:outline-none"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
