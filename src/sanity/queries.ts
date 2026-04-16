import { client } from "./client";

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

const isSanityConfigured = !!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

export async function getAllBlogPosts(): Promise<SanityBlogPost[]> {
  if (!isSanityConfigured) return [];
  return client.fetch(
    `*[_type == "blogPost"] | order(date desc) {
      _id,
      title,
      "slug": slug.current,
      description,
      date,
      category,
      readTime
    }`,
  );
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<SanityBlogPost | null> {
  if (!isSanityConfigured) return null;
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      date,
      category,
      readTime,
      body
    }`,
    { slug },
  );
}

export async function getAllBlogSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return [];
  const posts = await client.fetch<Array<{ slug: string }>>(
    `*[_type == "blogPost"] { "slug": slug.current }`,
  );
  return posts.map((p) => p.slug);
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  if (!isSanityConfigured) return [];
  return client.fetch(
    `*[_type == "testimonial"] | order(order asc) {
      _id,
      quote,
      name,
      role,
      initials
    }`,
  );
}
