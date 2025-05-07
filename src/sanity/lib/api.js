import { client } from "./client"
import { GET_EVENT_QUERY, GET_EVENTS_QUERY, GET_PAGE_QUERY, GET_PAGES_QUERY } from "./queries"


export const getEvents = async () => {
  return client.fetch(GET_EVENTS_QUERY)
}

export const getEventBySlug = async (slug) => {
  return client.fetch(GET_EVENT_QUERY, { slug })
}

export const getPages = async () => {
  return client.fetch(GET_PAGES_QUERY)
}

export const getPageBySlug = async (slug) => {
  return client.fetch(GET_PAGE_QUERY, { slug })
}

