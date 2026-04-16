import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import type { Metadata } from "next";
import { getTeamMembers, getValues } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "About - Web Design Agency for Local Businesses",
  description:
    "Meet the team behind LevelUp Local - a web design agency helping local service businesses get a professional website, show up on Google, and start generating customers.",
  alternates: {
    canonical: "https://lvluplocal.co/about",
  },
  openGraph: {
    title: "About LevelUp Local - Web Design Agency for Local Businesses",
    description:
      "Meet the team behind LevelUp Local - a web design agency helping local service businesses get a professional website, show up on Google, and start generating customers.",
    url: "https://lvluplocal.co/about",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lvluplocal.co/logo.png",
        width: 1200,
        height: 630,
        alt: "LevelUp Local - Web Design Agency for Local Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About LevelUp Local - Web Design Agency for Local Businesses",
    description:
      "Meet the team behind LevelUp Local - a web design agency helping local service businesses get a professional website, show up on Google, and start generating customers.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

const staticValues = [
  {
    title: "Results Over Aesthetics",
    desc: "A beautiful website that doesn't bring in customers is just decoration. We build for outcomes - calls, leads, and booked jobs.",
  },
  {
    title: "Speed Matters",
    desc: "Every day your business isn't online is revenue lost. We move fast because we know how much it matters to you.",
  },
  {
    title: "Plain English, Always",
    desc: "No jargon, no confusing tech talk. We explain everything in plain language and make the process simple.",
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't disappear after launch. We're your ongoing tech partner - there when you need us.",
  },
];

const staticTeam = [
  {
    name: "Jean Carlo Philipps",
    role: "Sales & Client Strategy",
    initials: "JC",
    bio: "Jean Carlo leads client relationships and growth strategy. With a background in sales and local business development, he understands what it takes to help service businesses win more customers. He's the first person you'll talk to - and he makes sure every client feels heard.",
    color: "#00C2FF",
  },
  {
    name: "Gabriel Cajigas",
    role: "Design & Development",
    initials: "GC",
    bio: "Gabriel handles all design and development. He builds fast, conversion-focused websites that look professional and work hard for the businesses behind them. His philosophy: every pixel should serve a purpose, and every page should generate results.",
    color: "#39FF14",
  },
];

export default async function AboutPage() {
  const [sanityTeam, sanityValues] = await Promise.all([
    getTeamMembers(),
    getValues(),
  ]);
  const team = sanityTeam.length > 0 ? sanityTeam : staticTeam;
  const values = sanityValues.length > 0 ? sanityValues : staticValues;
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, rgba(0,194,255,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Our Story
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[68px] leading-[1.03] tracking-[-0.01em] text-brand-text mb-6">
              We Help Local Businesses{" "}
              <span className="text-brand-blue">Level Up Online</span>
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75] max-w-2xl">
              LevelUp Local was founded with one mission: make it fast, simple,
              and affordable for local service businesses to get online and
              start winning customers.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateIn from="left">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
                Why We Started
              </p>
              <h2 className="font-heading font-black text-4xl md:text-[48px] leading-[1.06] tracking-[-0.01em] text-brand-text mb-6">
                Too Many Great Businesses Are{" "}
                <span className="text-brand-blue">Invisible Online</span>
              </h2>
              <div className="space-y-5 text-brand-muted text-base leading-[1.8]">
                <p>
                  We kept seeing the same pattern: incredible local service
                  businesses - skilled contractors, dedicated landscapers,
                  talented barbers - losing customers every single day simply
                  because they didn&apos;t have an online presence.
                </p>
                <p>
                  These business owners are experts at what they do.
                  They&apos;re not tech people, and they shouldn&apos;t have to
                  be. But the internet is where customers go to find services,
                  and without a website, these businesses were completely
                  invisible.
                </p>
                <p>
                  We founded LevelUp Local to solve exactly this problem - fast,
                  focused website builds for local businesses that want more
                  customers, not more complexity.
                </p>
              </div>
            </AnimateIn>

            <AnimateIn from="right">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { stat: "100%", label: "Focus on local businesses" },
                  { stat: "5 days", label: "Average launch time" },
                  { stat: "2", label: "Dedicated founders" },
                  { stat: "0", label: "Tech jargon used" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-6 rounded-2xl bg-brand-elevated border border-brand-border text-center"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
                  >
                    <div className="font-heading font-black text-4xl text-brand-blue mb-2">
                      {item.stat}
                    </div>
                    <div className="text-brand-muted text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-bg py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              The Team
            </p>
            <h2 className="font-heading font-black text-4xl md:text-[48px] leading-[1.06] tracking-[-0.01em] text-brand-text">
              Meet the People{" "}
              <span className="text-brand-blue">Behind Your Website</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <AnimateIn key={member.name} delay={i * 120}>
                <div
                  className="p-8 md:p-10 rounded-3xl bg-brand-elevated border border-brand-border h-full"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.35)" }}
                >
                  <div className="flex items-center gap-5 mb-7">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-black text-xl flex-shrink-0"
                      style={{
                        background: `${member.color}15`,
                        border: `1px solid ${member.color}30`,
                        color: member.color,
                      }}
                    >
                      {member.initials}
                    </div>
                    <div>
                      <h3 className="font-heading font-black text-xl text-brand-text">
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-medium mt-0.5"
                        style={{ color: member.color }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-brand-muted text-sm leading-[1.8]">
                    {member.bio}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-surface py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              How We Work
            </p>
            <h2 className="font-heading font-black text-4xl md:text-[48px] leading-[1.06] tracking-[-0.01em] text-brand-text">
              What We <span className="text-brand-blue">Believe In</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 80}>
                <div
                  className="p-7 rounded-2xl bg-brand-elevated border border-brand-border h-full"
                  style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.25)" }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-1 self-stretch rounded-full flex-shrink-0"
                      style={{
                        background: i % 2 === 0 ? "#00C2FF" : "#39FF14",
                      }}
                    />
                    <div>
                      <h3 className="font-heading font-bold text-brand-text text-lg mb-2">
                        {v.title}
                      </h3>
                      <p className="text-brand-muted text-sm leading-[1.75]">
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-brand-bg py-24 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-bg" />
        <AnimateIn className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
            Let&apos;s Work Together
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-brand-text mb-6">
            Ready to Get{" "}
            <span className="text-brand-blue">Your Business Online?</span>
          </h2>
          <p className="text-brand-muted text-lg leading-[1.75] mb-10">
            Book a free 15-minute call with Jean Carlo. He&apos;ll listen to
            your situation and tell you exactly how we can help - no pressure,
            no pitch.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-lg hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
            style={{ boxShadow: "0 0 32px rgba(0,194,255,0.35)" }}
          >
            Book a Free Call
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
        </AnimateIn>
      </section>
    </>
  );
}
