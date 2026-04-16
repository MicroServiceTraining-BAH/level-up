import type { Metadata } from "next";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { getAllBlogPosts } from "@/sanity/queries";
import { blogPosts as staticPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Local SEO Blog - Tips for Small Businesses in Northern Virginia",
  description:
    "Practical local SEO tips, Google Maps guides, and marketing advice for small businesses in Northern Virginia. Learn how to get found on Google.",
  alternates: {
    canonical: "https://lvluplocal.co/blog",
  },
  openGraph: {
    title:
      "Local SEO Blog - Tips for Small Businesses in Northern Virginia | LevelUp Local",
    description:
      "Practical local SEO tips, Google Maps guides, and marketing advice for small businesses in Northern Virginia. Learn how to get found on Google.",
    url: "https://lvluplocal.co/blog",
    siteName: "LevelUp Local",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lvluplocal.co/logo.png",
        width: 1200,
        height: 630,
        alt: "LevelUp Local Blog - Local SEO Tips for Northern Virginia Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Local SEO Blog - Tips for Small Businesses in Northern Virginia | LevelUp Local",
    description:
      "Practical local SEO tips, Google Maps guides, and marketing advice for small businesses in Northern Virginia. Learn how to get found on Google.",
    images: ["https://lvluplocal.co/logo.png"],
  },
};

export default async function BlogPage() {
  const sanityPosts = await getAllBlogPosts();
  const posts =
    sanityPosts.length > 0
      ? sanityPosts
      : staticPosts.map((p) => ({
          _id: p.slug,
          title: p.title,
          slug: p.slug,
          description: p.description,
          date: p.date,
          category: p.category,
          readTime: p.readTime,
        }));

  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(0,194,255,0.08) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimateIn className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
              Local SEO Blog
            </p>
            <h1 className="font-heading font-black text-5xl md:text-6xl lg:text-[68px] leading-[1.03] tracking-[-0.01em] text-brand-text mb-6">
              Tips to Help Your Business{" "}
              <span className="text-brand-blue">Rank on Google</span>
            </h1>
            <p className="text-xl text-brand-muted leading-[1.75] max-w-2xl">
              Practical local SEO guides, Google Maps tips, and marketing
              strategies for small businesses in Northern Virginia.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-brand-surface py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block group h-full"
                >
                  <article
                    className="p-8 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-blue/30 transition-all duration-300 h-full flex flex-col"
                    style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-blue px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5">
                        {post.category}
                      </span>
                      <span className="text-brand-muted text-xs">
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-brand-text text-xl leading-snug mb-4 group-hover:text-brand-blue transition-colors duration-200">
                      {post.title}
                    </h2>
                    <p className="text-brand-muted text-sm leading-[1.8] flex-1 mb-6">
                      {post.description}
                    </p>
                    <div className="flex items-center justify-between pt-5 border-t border-brand-border">
                      <span className="text-brand-muted text-xs">
                        {formatDate(post.date)}
                      </span>
                      <span className="text-brand-blue text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                        Read article
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </article>
                </Link>
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
              "radial-gradient(ellipse at 50% 50%, rgba(0,194,255,0.06) 0%, transparent 55%)",
          }}
        />
        <AnimateIn className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue mb-4">
            Ready to Rank?
          </p>
          <h2 className="font-heading font-black text-4xl md:text-5xl leading-[1.06] tracking-[-0.01em] text-brand-text mb-6">
            Let Us Handle Your{" "}
            <span className="text-brand-blue">Local SEO</span>
          </h2>
          <p className="text-brand-muted text-lg leading-[1.75] mb-10">
            Book a free 15-minute audit and we&apos;ll show you exactly where
            your business stands - and what it will take to rank in your area.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-brand-blue text-brand-bg font-bold text-lg hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg transition-all duration-200"
            style={{ boxShadow: "0 0 32px rgba(0,194,255,0.35)" }}
          >
            Book Free SEO Audit
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
