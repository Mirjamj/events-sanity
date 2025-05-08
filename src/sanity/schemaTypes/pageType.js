import { defineArrayMember, defineField, defineType } from "sanity";
import { RiFile2Line } from "react-icons/ri";

// Define the "page" document type in the CMS schema
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
    // Meta description for the page
    defineField({
      name: "description",
      title: "Meta - description",
      type: "string",
      validation: (rule) => rule.required()
    }),
    // Order field to manage the position of this page in the navigation menu
    defineField({
      name: "order",
      type: "number",
      title: "Navigation Order",
      description: "Lower number appear earlier in the menu",
    }),
    // Array of sections to be included in the page (e.g., hero section, events, text)
    defineField({
      name: "sections",
      type: "array",
      of: [
        defineArrayMember({ type: "heroSection" }),
        defineArrayMember({ type: "eventsSection" }),
        defineArrayMember({ type: "textImgBlock" }),
        defineArrayMember({ type: "textBlock" })
      ]
    })
  ]
})
