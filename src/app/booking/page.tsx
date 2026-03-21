import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Website Audit — LevelUp Local",
  description: "Schedule your free 15-minute website audit call with LevelUp Local.",
};

const whatToExpect = [
  { title: "15 minutes", desc: "Quick, focused, no fluff. We respect your time." },
  { title: "No sales pressure", desc: "It's a real conversation about your business, not a pitch." },
  { title: "Actionable insight", desc: "You'll leave knowing exactly what your business needs online." },
  { title: "Custom plan", desc: "We'll outline what we'd build for your specific business." },
];

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 30%, rgba(0,194,255,0.08) 0%, transparent 55%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimateIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/20 bg-brand-blue/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-green"
                style={{ animation: "pulse-dot 2s infinite" }} />
              <span className="text-brand-blue text-sm font-medium">Free — No credit card required</span>
            </div>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[68px] leading-[1.03] tracking-[-0.01em] text-brand-text mb-6">
              Book Your Free <span className="text-brand-blue">Website Audit</span>
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75] max-w-xl mx-auto">
              A free 15-minute call to understand your business and map out how to get you online fast.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-brand-surface pb-24 pt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* What to expect */}
            <div className="lg:col-span-2">
              <AnimateIn from="left">
                <h2 className="font-heading font-black text-2xl text-brand-text mb-8 tracking-tight">
                  What to Expect
                </h2>
                <div className="space-y-5 mb-10">
                  {whatToExpect.map((item, i) => (
                    <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-brand-elevated border border-brand-border">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-black text-sm flex-shrink-0 text-brand-blue"
                        style={{ background: "rgba(0,194,255,0.1)", border: "1px solid rgba(0,194,255,0.2)" }}>
                        {i + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-brand-text text-sm mb-1">{item.title}</div>
                        <div className="text-brand-muted text-xs leading-[1.7]">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl border border-brand-green/20"
                  style={{ background: "rgba(57,255,20,0.04)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-brand-green"
                      style={{ animation: "pulse-dot 2s infinite" }} />
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Spots Available</span>
                  </div>
                  <p className="text-brand-muted text-sm leading-[1.7]">
                    We only take on a limited number of new clients each month to ensure quality. If you&apos;re interested, don&apos;t wait.
                  </p>
                </div>
              </AnimateIn>
            </div>

            {/* Calendly embed */}
            <div className="lg:col-span-3">
              <AnimateIn from="right">
                <div className="rounded-3xl bg-brand-elevated border border-brand-border overflow-hidden"
                  style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}>
                  {/* Calendly inline embed placeholder */}
                  <div className="p-8 border-b border-brand-border">
                    <h3 className="font-heading font-bold text-brand-text text-xl mb-1">Schedule Your Call</h3>
                    <p className="text-brand-muted text-sm">Pick a time that works for you — we&apos;ll confirm right away.</p>
                  </div>

                  {/* Calendly embed area */}
                  <div
                    className="calendly-inline-widget w-full"
                    data-url="https://calendly.com/leveluplocal/free-audit"
                    style={{ minWidth: "320px", height: "700px" }}
                  />

                  {/* Fallback if Calendly not configured */}
                  <noscript>
                    <div className="p-10 text-center">
                      <p className="text-brand-muted text-sm mb-4">Please enable JavaScript to use the scheduling widget.</p>
                      <a href="mailto:hello@leveluplocal.com"
                        className="text-brand-blue underline text-sm">
                        Or email us to schedule directly
                      </a>
                    </div>
                  </noscript>
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly script */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
    </>
  );
}
