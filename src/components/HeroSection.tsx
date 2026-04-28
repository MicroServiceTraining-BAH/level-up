"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { SparklesCore } from "@/components/ui/sparkles";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from("[data-h-badge]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          "[data-h-line]",
          {
            opacity: 0,
            y: 80,
            stagger: 0.12,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          "[data-h-sub]",
          { opacity: 0, y: 24, duration: 0.6, ease: "power2.out" },
          "-=0.4",
        )
        .from(
          "[data-h-cta]",
          {
            opacity: 0,
            y: 20,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .from(
          "[data-h-stat]",
          {
            opacity: 0,
            y: 16,
            stagger: 0.08,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.2",
        )
        .from("[data-h-scroll]", { opacity: 0, duration: 0.4 }, "-=0.1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #eef5ff 0%, #f8faff 50%, #f0f8ff 100%)",
      }}
    >
      {/* Sparkles */}
      <SparklesCore
        id="hero-sparkles"
        background="transparent"
        minSize={0.4}
        maxSize={1.2}
        speed={1.5}
        particleDensity={80}
        particleColor="#0099cc"
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24 w-full">
        {/* Badge */}
        <div
          data-h-badge
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(0,153,204,0.25)] bg-[rgba(0,153,204,0.07)] mb-10"
        >
          <span
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{
              background: "#10b981",
              animation: "pulse-dot 2s ease-in-out infinite",
              boxShadow: "0 0 8px rgba(16,185,129,0.6)",
            }}
          />
          <span className="text-[#0077aa] text-sm font-medium tracking-wide">
            Now accepting new clients — limited spots available
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-heading font-black leading-[0.93] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(32px, 8.5vw, 108px)" }}
        >
          <div className="overflow-hidden">
            <span data-h-line className="block text-[#080820]">
              Get Found.
            </span>
          </div>
          <div className="overflow-hidden">
            <span
              data-h-line
              className="block"
              style={{
                color: "#0099cc",
                textShadow: "0 0 60px rgba(0,153,204,0.2)",
              }}
            >
              Get Calls.
            </span>
          </div>
          <div className="overflow-hidden">
            <span data-h-line className="block text-[#080820]">
              Get Customers.
            </span>
          </div>
        </h1>

        {/* Sub */}
        <p
          data-h-sub
          className="text-[#6a6a8e] leading-[1.75] max-w-2xl mb-10"
          style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
        >
          We build websites + local SEO that puts your business in front of
          people ready to buy.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href="/booking"
            data-h-cta
            data-cursor="cta"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-white bg-[#0099cc] hover:bg-[#007aaa] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0099cc] focus-visible:ring-offset-2 transition-[background,transform] duration-200"
            style={{
              boxShadow:
                "0 0 32px rgba(0,153,204,0.3), 0 4px 16px rgba(0,0,0,0.12)",
            }}
          >
            Book a Free Website Audit
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
          <Link
            href="/services"
            data-h-cta
            className="ghost-btn inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-base text-[#080820] focus-visible:outline-none"
          >
            See How It Works
          </Link>
        </div>

        {/* Stats */}
        <div
          className="flex flex-wrap items-center gap-10 pt-8"
          style={{ borderTop: "1px solid rgba(0,0,60,0.09)" }}
        >
          {[
            { value: "3–5 Days", label: "Average launch time" },
            { value: "100%", label: "Mobile optimized" },
            { value: "24/7", label: "Customer generation" },
          ].map((s, i) => (
            <div key={i} data-h-stat className="flex items-baseline gap-2">
              <span
                className="font-heading font-black leading-none"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 32px)",
                  color: "#0099cc",
                }}
              >
                {s.value}
              </span>
              <span className="text-[#6a6a8e] text-sm font-medium">
                {s.label}
              </span>
            </div>
          ))}

          <div
            data-h-scroll
            className="ml-auto hidden lg:flex items-center gap-2 text-[#9090a8] text-xs tracking-widest uppercase"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
}
