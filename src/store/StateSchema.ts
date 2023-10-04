import {AxiosInstance} from 'axios'
import {PostState} from './slices/postSlice'

export interface StateSchema {
  posts: PostState
}

export interface ThunkExtraArg {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
  state: StateSchema
}
