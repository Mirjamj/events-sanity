import { defineField, defineType } from "sanity";
import { IoIosImages } from "react-icons/io";

export const aboutSection = defineType({
  name: "aboutSection",
  title: "About content",
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