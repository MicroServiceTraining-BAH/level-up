import { defineField, defineType } from "sanity";

export const portfolioItem = defineType({
  name: "portfolioItem",
  title: "Portfolio Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client / Project Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description: 'e.g. "Flooring Contractor"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlights",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "accentColor",
      title: "Accent Color",
      type: "string",
      description: "Hex color for the project card e.g. #C8A96E",
      initialValue: "#00C2FF",
    }),
    defineField({
      name: "url",
      title: "Display URL",
      type: "string",
      description: 'Shown in the browser bar e.g. "pachecoshardwoodfloor.vercel.app"',
    }),
    defineField({
      name: "live",
      title: "Live Site URL",
      type: "url",
      description: "Full URL including https://",
    }),
    defineField({
      name: "imageUrl",
      title: "Screenshot / Image URL",
      type: "url",
      description: "Direct URL to the project screenshot image",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "category" },
  },
});
