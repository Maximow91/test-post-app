import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import api from '../api/api'
import {postsReducer} from './slices/postSlice'

import {StateSchema} from './StateSchema'

const rootReducers: ReducersMapObject<StateSchema> = {
  posts: postsReducer,
}

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: api,
        },
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
