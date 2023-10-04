import {createAsyncThunk} from '@reduxjs/toolkit'
import {LIMIT} from '../const/const'
import {ThunkConfig} from '../store/StateSchema'
import {Post} from '../types/types'

export const getPosts = createAsyncThunk<Post[], void, ThunkConfig<string>>(
  'posts/getPosts',

  async (_, {getState, rejectWithValue, extra}) => {
    const page = getState().posts.currentPage
    try {
      const response = await extra.api.get<Post[]>(
        `/posts?_start=${(page - 1) * LIMIT}&_limit=${LIMIT}`,
      )
      return response.data
    } catch (error) {
      console.log(error)
      return rejectWithValue('error')
    }
  },
)
