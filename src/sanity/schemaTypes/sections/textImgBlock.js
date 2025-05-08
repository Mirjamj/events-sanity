import { defineField, defineType } from "sanity";
import { IoIosImages } from "react-icons/io";

// Define the 'Text Image Block' section type for pages
// This section contains a headline, body text, and an image with an optional alt text.
export const textImgBlock = defineType({
  name: "textImgBlock",
  title: "Text Image Block",
  type: "object",
  icon: IoIosImages,
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "text",
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string"
        }),
      ]
    })
  ]
})