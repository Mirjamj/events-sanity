import { defineField, defineType } from "sanity";
import { CgEventbrite } from "react-icons/cg";

// Define the 'Event' document type for the CMS
// This document represents an event with essential details such as name, date/time, location, description, and image.
export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CgEventbrite,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      }
    }),
    defineField({
      name: "subtitle",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "dateTime",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        calendarTodayLabel: "Today",
        validation: (rule) => rule.required()
      },
    }),
    defineField({
      name: "location",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "image",
      type: "image",
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) => rule.required()
        })
      ]
    }),
    defineField({
      name: "description",
      type: "blockContent",
      validation: (rule) => rule.required()
    })
  ]
})