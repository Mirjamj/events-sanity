// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Events Stockholm')
    .items([
      S.documentTypeListItem('page').title('Pages'),
      S.divider(),
      S.documentTypeListItem('event').title('Events'),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['event', 'page'].includes(item.getId()),
      ),
    ])
