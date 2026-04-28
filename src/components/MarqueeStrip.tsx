"use client";

const items = [
  { text: "Stafford, VA", icon: "✦" },
  { text: "3–5 Day Launch", icon: "⚡" },
  { text: "Fredericksburg, VA", icon: "✦" },
  { text: "100% Mobile Ready", icon: "⚡" },
  { text: "Woodbridge, VA", icon: "✦" },
  { text: "Google Ranked", icon: "⚡" },
  { text: "Manassas, VA", icon: "✦" },
  { text: "Lead Capture System", icon: "⚡" },
  { text: "Arlington, VA", icon: "✦" },
  { text: "24/7 Customer Gen", icon: "⚡" },
  { text: "Alexandria, VA", icon: "✦" },
  { text: "Fairfax, VA", icon: "⚡" },
];

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: "1px solid rgba(0,194,255,0.12)",
        borderBottom: "1px solid rgba(0,194,255,0.12)",
        background: "rgba(0,153,204,0.04)",
      }}
    >
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {repeated.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-4 px-6">
            <span
              className="text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: "#9090a8" }}
            >
              {item.text}
            </span>
            <span style={{ color: "#0099cc", fontSize: "10px" }}>
              {item.icon}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
