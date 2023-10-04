import {PostsSortField} from '../const/const'
import {Post} from '../types/types'

export const sortPosts = (
  filter: PostsSortField,
  initialArray: Post[],
): Post[] => {
  switch (filter) {
    case PostsSortField.ID:
      return [...initialArray].sort((a, b) => b.id - a.id)
    case PostsSortField.TITLE:
      return [...initialArray].sort((a, b) => a.title.localeCompare(b.title))
    case PostsSortField.DESC:
      return [...initialArray].sort((a, b) => a.body.localeCompare(b.body))
    default:
      return initialArray
  }
}
