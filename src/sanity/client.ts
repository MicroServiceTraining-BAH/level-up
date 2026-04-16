import { createClient, type SanityClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production").trim();

let client: SanityClient | null = null;

try {
  if (projectId) {
    client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: process.env.NODE_ENV === "production",
    });
  }
} catch {
  client = null;
}

export { client };
