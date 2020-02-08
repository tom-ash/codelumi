import { combineReducers } from 'redux'
import { createReducer } from '../components/create/functions/reducer'
import { showReducerProvider } from '../components/show/functions/reducer'
import { indexReducerProvider } from '../components/index/functions/reducers'

export const announcementReducerProvider = ({
  announcementsList,
  announcement
}) => combineReducers({
  create: createReducer,
  show: showReducerProvider(announcement),
  index: indexReducerProvider(announcementsList)
})