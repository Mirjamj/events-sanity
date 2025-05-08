import { blockContentType } from './blockContentType'
import { eventType } from './eventType'
import { pageType } from './pageType'
import { sections } from './sections'

// Define the schema for the CMS, combining different content types
// This includes sections (such as hero, events), block content, event, and page types.
export const schema = {
  types: [
    ...sections,
    blockContentType,
    eventType,
    pageType],
}
