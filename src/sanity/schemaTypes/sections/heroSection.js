import { defineField, defineType } from "sanity";
import { FaImage } from "react-icons/fa";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  icon: FaImage,
  fields: [
    defineField({
      name: "headline",
      type: "string",
    }),
    defineField({
      name: "subtitle",
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

