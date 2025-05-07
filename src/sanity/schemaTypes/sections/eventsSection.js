import { defineField, defineType } from "sanity";
import { CgEventbrite } from "react-icons/cg";


export const eventsSection = defineType({
  name: "eventsSection",
  type: "object",
  icon: CgEventbrite,
  fields: [
    defineField({
      name: "title",
      type: "string",
      initialValue: "Upcoming events"
    })
  ]
})