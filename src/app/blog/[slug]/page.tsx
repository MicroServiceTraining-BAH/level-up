import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { blogPosts, getBlogPost, formatDate, type ContentBlock } from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://lvluplocal.co/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lvluplocal.co/blog/${post.slug}`,
      siteName: "LevelUp Local",
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: "https://lvluplocal.co/logo.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://lvluplocal.co/logo.png"],
    },
  };
}

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="font-heading font-black text-2xl md:text-3xl text-brand-text mt-12 mb-4 tracking-tight"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          className="font-heading font-bold text-xl text-brand-text mt-8 mb-3"
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-brand-muted text-base leading-[1.9] mb-5">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-2.5 mb-6 ml-1">
          {block.items.map((item, j) => (
            <li key={j} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border"
                style={{
                  background: "rgba(0,194,255,0.08)",
                  borderColor: "rgba(0,194,255,0.25)",
                }}
              >
                <svg
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#00C2FF"
                  strokeWidth={3}
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-brand-muted text-sm leading-[1.8]">{item}</span>
            </li>
          ))}
        </ul>
      );
    case "cta":
      return (
        <div
          key={i}
          className="mt-12 p-8 rounded-2xl border border-brand-blue/20 bg-brand-blue/5"
          style={{ boxShadow: "0 0 40px rgba(0,194,255,0.06)" }}
        >
          <p className="text-brand-text text-base leading-[1.8] mb-6">{block.text}</p>
          <Link
            href={block.href}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-blue text-brand-bg font-bold hover:bg-brand-blue/90 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue transition-all duration-200"
            style={{ boxShadow: "0 0 24px rgba(0,194,255,0.3)" }}
          >
            {block.label}
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
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "LevelUp Local",
      url: "https://lvluplocal.co",
    },
    publisher: {
      "@type": "Organization",
      name: "LevelUp Local",
      logo: {
        "@type": "ImageObject",
        url: "https://lvluplocal.co/favicon-logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://lvluplocal.co/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-brand-bg pt-36 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 50%, rgba(0,194,255,0.07) 0%, transparent 60%)",
          }}
        />
        <div className="absolute inset-0 grid-bg" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimateIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand-muted text-sm hover:text-brand-blue transition-colors duration-200 mb-8 focus-visible:outline-none focus-visible:text-brand-blue"
            >
              <svg
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-blue px-3 py-1 rounded-full border border-brand-blue/20 bg-brand-blue/5">
                {post.category}
              </span>
              <span className="text-brand-muted text-xs">{post.readTime}</span>
              <span className="text-brand-muted text-xs">{formatDate(post.date)}</span>
            </div>
            <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-[56px] leading-[1.06] tracking-[-0.01em] text-brand-text">
              {post.title}
            </h1>
          </AnimateIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-brand-surface py-16">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn>
            <p className="text-brand-muted text-lg leading-[1.9] mb-8 border-l-2 border-brand-blue pl-6">
              {post.description}
            </p>
            {post.content.map((block, i) => renderBlock(block, i))}
          </AnimateIn>
        </div>
      </section>

      {/* Related / Nav */}
      <section className="bg-brand-bg py-16">
        <div className="max-w-3xl mx-auto px-6">
          <AnimateIn className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center pt-8 border-t border-brand-border">
            <Link
              href="/blog"
              className="text-brand-muted hover:text-brand-blue text-sm font-medium flex items-center gap-2 transition-colors duration-200"
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All Articles
            </Link>
            <Link
              href="/services"
              className="text-brand-blue text-sm font-medium flex items-center gap-2 hover:underline transition-colors duration-200"
            >
              View Our SEO Services
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
