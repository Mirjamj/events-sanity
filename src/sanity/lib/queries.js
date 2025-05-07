import { defineQuery } from "next-sanity";

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

export const GET_PAGES_QUERY = defineQuery(`*[_type == 'page'] | order(order asc) {
  _id,
  title,
  "slug": slug.current
}`)

export const GET_PAGE_QUERY = defineQuery(`*[_type == 'page' && slug.current == $slug][0] {
  _id,
  title,
  subtitle,
  "slug": slug.current,
  description,
  sections
}`)