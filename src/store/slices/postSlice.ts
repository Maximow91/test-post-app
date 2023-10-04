import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {PostsSortField} from '../../const/const'
import {getPosts} from '../../services/getPosts'
import {Post} from '../../types/types'
import {sortPosts} from '../../utils/postUtils'

export interface PostState {
  initialPosts: Post[]
  posts: Post[]
  currentPage: number
  total: number
  filter: PostsSortField
  searchStr: string
  isLoading: boolean
  error?: string
}

const initialState: PostState = {
  initialPosts: [],
  posts: [],
  currentPage: 1,
  total: 100,
  filter: PostsSortField.NUll,
  searchStr: '',
  isLoading: false,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSearchStr: (state, action: PayloadAction<string>) => {
      const searchKeyword = action.payload.toLowerCase() // Преобразование поискового запроса в нижний регистр
      state.searchStr = searchKeyword
      state.posts = state.initialPosts.filter(
        post =>
          post.title.toLowerCase().includes(searchKeyword) ||
          post.body.toLowerCase().includes(searchKeyword),
      )
      state.posts = sortPosts(state.filter, state.posts)
    },
    setFilter: (state, action: PayloadAction<PostsSortField>) => {
      state.filter = action.payload
      state.posts = sortPosts(action.payload, state.initialPosts)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.error = ''
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.initialPosts = action.payload
        state.posts = sortPosts(state.filter, action.payload)
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        state.posts = []
      })
  },
})

export const {actions: postsActions} = postsSlice
export const {reducer: postsReducer} = postsSlice
