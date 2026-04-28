"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function PhoneShowcase() {
  return (
    <section className="bg-white overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0099cc] mb-4">
              Built for Every Screen
            </p>
            <h2
              className="font-heading font-black text-[#080820] leading-[1.04] tracking-[-0.02em]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              Your business, in{" "}
              <span className="text-[#0099cc]">every pocket</span>
            </h2>
            <p className="text-[#6a6a8e] mt-4 text-lg max-w-xl mx-auto leading-relaxed">
              Every site we build is mobile-first. Customers find you, tap to
              call, and book — all from their phone.
            </p>
          </div>
        }
      >
        {/* Phone frame */}
        <div className="flex items-center justify-center">
          <div
            className="relative"
            style={{
              width: "280px",
              height: "580px",
            }}
          >
            {/* Phone shell */}
            <div
              className="absolute inset-0 rounded-[44px] border-[8px] border-[#1a1a2e] bg-[#1a1a2e]"
              style={{
                boxShadow:
                  "inset 0 0 0 2px #333, 0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
              }}
            >
              {/* Dynamic Island */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />

              {/* Screen */}
              <div className="absolute inset-[3px] rounded-[38px] overflow-hidden bg-black">
                <iframe
                  src="https://tasty-chicken.vercel.app/"
                  className="w-full h-full border-0"
                  style={{
                    transform: "scale(0.75)",
                    transformOrigin: "top left",
                    width: "133.33%",
                    height: "133.33%",
                    pointerEvents: "none",
                  }}
                  title="Tasty Chicken — mobile preview"
                  loading="lazy"
                />
              </div>

              {/* Side buttons */}
              <div className="absolute -left-[10px] top-24 w-[4px] h-8 bg-[#333] rounded-l-sm" />
              <div className="absolute -left-[10px] top-36 w-[4px] h-12 bg-[#333] rounded-l-sm" />
              <div className="absolute -left-[10px] top-52 w-[4px] h-12 bg-[#333] rounded-l-sm" />
              <div className="absolute -right-[10px] top-36 w-[4px] h-16 bg-[#333] rounded-r-sm" />

              {/* Home bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20" />
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
