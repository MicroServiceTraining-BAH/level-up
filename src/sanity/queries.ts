import { client } from "./client";

// ─── Types ───────────────────────────────────────────────────────────────────

export type SanityBlogPost = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  body: SanityBlock[];
};

export type SanityBlock = {
  _type: string;
  _key: string;
  [key: string]: unknown;
};

export type SanityTestimonial = {
  _id: string;
  quote: string;
  name: string;
  role: string;
  initials: string;
  order: number;
};

export type SanityService = {
  _id: string;
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  bullets: string[];
  order: number;
};

export type SanityTeamMember = {
  _id: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  color: string;
  order: number;
};

export type SanityValue = {
  _id: string;
  title: string;
  description: string;
  order: number;
};

export type SanityPortfolioItem = {
  _id: string;
  name: string;
  category: string;
  description: string;
  highlights: string[];
  accentColor: string;
  url: string;
  live: string;
  imageUrl: string;
  order: number;
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

// ─── Blog ─────────────────────────────────────────────────────────────────────

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  if (!isSanityConfigured) return [];
  return client!.fetch(
    `*[_type == "blogPost"] | order(date desc) {
      _id, title, "slug": slug.current, description, date, category, readTime
    }`,
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<SanityBlogPost | null> {
  if (!isSanityConfigured) return null;
  return client!.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, description, date, category, readTime, body
    }`,
    { slug },
  );
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return [];
  const posts = await client!.fetch<Array<{ slug: string }>>(
    `*[_type == "blogPost"] { "slug": slug.current }`,
  );
  return posts.map((p) => p.slug);
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured) return [];
  return client!.fetch(
    `*[_type == "testimonial"] | order(order asc) {
      _id, quote, name, role, initials
    }`,
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

export async function getServices(): Promise<SanityService[]> {
  if (!isSanityConfigured) return [];
  return client!.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, tag, tagColor, description, bullets, order
    }`,
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  if (!isSanityConfigured) return [];
  return client!.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, initials, bio, color
    }`,
  );
}

export async function getValues(): Promise<SanityValue[]> {
  if (!isSanityConfigured) return [];
  return client!.fetch(
    `*[_type == "value"] | order(order asc) {
      _id, title, description
    }`,
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────

export async function getPortfolioItems(): Promise<SanityPortfolioItem[]> {
  if (!isSanityConfigured) return [];
  return client!.fetch(
    `*[_type == "portfolioItem"] | order(order asc) {
      _id, name, category, description, highlights, accentColor, url, live, imageUrl
    }`,
  );
}
