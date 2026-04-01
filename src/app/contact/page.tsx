import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import ContactForm from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — LevelUp Local",
  description: "Get in touch with LevelUp Local. We help local service businesses get online.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(0,194,255,0.07) 0%, transparent 55%)" }} />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">Get in Touch</p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[64px] leading-[1.03] tracking-[-0.01em] text-brand-text mb-6">
              Let&apos;s Talk About Your <span className="text-brand-blue">Business</span>
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75]">
              Have a question? Want to learn more before booking? Send us a message and we&apos;ll get back to you within one business day.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Main */}
      <section className="bg-brand-surface pb-24 pt-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <AnimateIn from="left">
                <div className="p-7 rounded-2xl bg-brand-elevated border border-brand-border"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                  <h3 className="font-heading font-bold text-brand-text text-lg mb-6">Contact Info</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0"
                        style={{ background: "rgba(0,194,255,0.1)", border: "1px solid rgba(0,194,255,0.2)" }}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-brand-muted text-xs uppercase tracking-wider mb-0.5">Email</p>
                        <a href="mailto:sales@lvluplocal.co"
                          className="text-brand-text text-sm font-medium hover:text-brand-blue focus-visible:text-brand-blue transition-colors">
                          sales@lvluplocal.co
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-brand-blue flex-shrink-0"
                        style={{ background: "rgba(0,194,255,0.1)", border: "1px solid rgba(0,194,255,0.2)" }}>
                        <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-brand-muted text-xs uppercase tracking-wider mb-0.5">Response Time</p>
                        <p className="text-brand-text text-sm font-medium">Within 1 business day</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 rounded-2xl bg-brand-elevated border border-brand-blue/20"
                  style={{ background: "rgba(0,194,255,0.04)", boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
                  <p className="text-brand-muted text-xs uppercase tracking-wider mb-2">Prefer a call?</p>
                  <h4 className="font-heading font-bold text-brand-text text-base mb-3">
                    Book a Free 15-Minute Audit
                  </h4>
                  <p className="text-brand-muted text-sm leading-[1.7] mb-5">
                    Skip the back-and-forth. Book a time directly and we&apos;ll talk through your situation live.
                  </p>
                  <Link href="/booking"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue text-brand-bg font-bold text-sm hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-elevated transition-all duration-200"
                    style={{ boxShadow: "0 0 20px rgba(0,194,255,0.25)" }}>
                    Book Free Audit →
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateIn from="right">
                <div className="p-8 md:p-10 rounded-3xl bg-brand-elevated border border-brand-border"
                  style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.35)" }}>
                  <h2 className="font-heading font-bold text-brand-text text-2xl mb-2">Send a Message</h2>
                  <p className="text-brand-muted text-sm mb-8">Fill out the form below and we&apos;ll be in touch soon.</p>
                  <ContactForm />
                </div>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
