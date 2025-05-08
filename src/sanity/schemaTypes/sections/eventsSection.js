import { defineField, defineType } from "sanity";
import { CgEventbrite } from "react-icons/cg";

// Define the "eventsSection" object schema for the CMS
export const eventsSection = defineType({
  name: "eventsSection",
  type: "object",
  icon: CgEventbrite,
  fields: [
    // Field for the section title, which is a string
    // This field holds the title for the events section (default is "Upcoming events")
    defineField({
      name: "title",
      type: "string",
      initialValue: "Upcoming events"
    })
  ]
})