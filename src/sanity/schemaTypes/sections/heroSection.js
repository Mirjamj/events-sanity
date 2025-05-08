import { defineField, defineType } from "sanity";
import { FaImage } from "react-icons/fa";

// Define the "heroSection" schema for the CMS
export const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  icon: FaImage,
  fields: [
    // Field for the section headline/h1
    defineField({
      name: "headline",
      type: "string",
    }),
    // Field for the section subtitle, longer text
    defineField({
      name: "subtitle",
      type: "text",
    }),
    // Field for the section image
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

