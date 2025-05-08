import { defineField, defineType } from "sanity";
import { CiText } from "react-icons/ci";

// Define the 'Text block' section type for pages
// This section contains a headline and a body of text
export const textBlock = defineType({
  name: "textBlock",
  title: "Text block",
  type: "object",
  icon: CiText,
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "text",
    }),
  ]
})