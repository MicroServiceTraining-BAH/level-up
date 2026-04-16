import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/sanity/schemas";

export default defineConfig({
  name: "level-up-local",
  title: "LevelUp Local",
  projectId: (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "").trim(),
  dataset: (process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production").trim(),
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
});
