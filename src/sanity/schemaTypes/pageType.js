import { defineArrayMember, defineField, defineType } from "sanity";
import { RiFile2Line } from "react-icons/ri";

export const pageType = defineType({
  name: "page",
  title: "Page",
  type: "document",
  icon: RiFile2Line,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      title: "Meta - description",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "order",
      type: "number",
      title: "Navigation Order",
      description: "Lower number appear earlier in the menu",
    }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({ type: "heroSection" }),
        defineArrayMember({ type: "eventsSection" }),
        defineArrayMember({ type: "aboutSection" }),
        defineArrayMember({ type: "homeSection" })
      ]
    })
  ]
})
