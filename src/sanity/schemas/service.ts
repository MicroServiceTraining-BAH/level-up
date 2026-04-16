import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag Label",
      type: "string",
      description: 'e.g. "Core Service", "Get Found"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagColor",
      title: "Tag Color",
      type: "string",
      description: "Hex color e.g. #00C2FF or #39FF14",
      initialValue: "#00C2FF",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bullets",
      title: "What's Included (bullet points)",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "tag" },
  },
});
