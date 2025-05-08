import { client } from "./client"
import { GET_EVENT_QUERY, GET_EVENTS_QUERY, GET_EVENTS_SECTION_TITLE, GET_PAGE_QUERY, GET_PAGES_QUERY } from "./queries"

// Fetches a list of all events from queries.js
export const getEvents = async () => {
  return client.fetch(GET_EVENTS_QUERY)
}

// Fetches a single event by its slug (used for event detail pages)
export const getEventBySlug = async (slug) => {
  return client.fetch(GET_EVENT_QUERY, { slug })
}

// Fetches a list of all pages (e.g., navigation, static content)
export const getPages = async () => {
  return client.fetch(GET_PAGES_QUERY)
}

// Fetches a single page's data by its slug (e.g., for a home or about page)
export const getPageBySlug = async (slug) => {
  return client.fetch(GET_PAGE_QUERY, { slug })
}

// Fetches the title for the events section (can be used in a header or title display)
export const getEventSectionTitle = async () => {
  const data = await client.fetch(GET_EVENTS_SECTION_TITLE)
  // Returns the title of the events section, defaulting to 'Upcoming events' if not available
  return data?.sections?.title || 'Upcoming events'
}
