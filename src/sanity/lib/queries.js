import { defineQuery } from "next-sanity";

// Defines the GROQ query for all events from the 'event' collection,
// including event details like name, location, date/time, slug, and image.
export const GET_EVENTS_QUERY = defineQuery(`*[_type == 'event'] {
  _id,
  name,
  location,
  dateTime,
  subtitle,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  }
}`)

// Defines the GROQ query to retrieve a single event by slug,
// including all key details and the event description.
// Used with a slug parameter passed in from the API call.
export const GET_EVENT_QUERY = defineQuery(`*[_type == 'event' && slug.current == $slug][0] {
  _id,
  name,
  location,
  dateTime,
  "slug": slug.current,
  "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
  description,
}`)

// Defines a query to retrieve the title of the 'eventsSection'
// from the "events" page document — typically used for section headers in the UI
export const GET_EVENTS_SECTION_TITLE = defineQuery(`
  *[_type == "page" && slug.current == "events"][0]{
    sections[_type == "eventsSection"][0]{
      title
    }
  }
`)

// Defines a query to retrieve all pages in the 'page' collection,
// ordered by their 'order' field — commonly used for navigation menus
export const GET_PAGES_QUERY = defineQuery(`*[_type == 'page'] | order(order asc) {
  _id,
  title,
  "slug": slug.current
}`)

// Defines a query to retrieve a single page document by its slug,
// including title, subtitle, meta description, and associated sections
export const GET_PAGE_QUERY = defineQuery(`*[_type == 'page' && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  "slug": slug.current,
  description,
  sections
}`)