import { blockContentType } from './blockContentType'
import { eventType } from './eventType'
import { pageType } from './pageType'
import { sections } from './sections'

export const schema = {
  types: [
    ...sections,
    blockContentType,
    eventType,
    pageType],
}
