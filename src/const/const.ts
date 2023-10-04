export const LIMIT = 10

export enum PostsSortField {
  ID = 'id',
  TITLE = 'title',
  DESC = 'description',
  NUll = '',
}

export const SortFields = [
  {
    label: 'id',
    value: PostsSortField.ID,
  },
  {
    label: 'title',
    value: PostsSortField.TITLE,
  },
  {
    label: 'desc',
    value: PostsSortField.DESC,
  },
]
