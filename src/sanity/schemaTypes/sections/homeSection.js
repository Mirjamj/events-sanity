import { defineField, defineType } from "sanity";
import { IoIosImages } from "react-icons/io";

export const homeSection = defineType({
  name: "homeSection",
  title: "Startpage content",
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
  ]
})