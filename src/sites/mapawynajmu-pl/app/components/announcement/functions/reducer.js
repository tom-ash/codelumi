import { combineReducers } from 'redux'
import { indexReducer } from '../components/index/functions/reducers'

export const announcementReducer = combineReducers({
  index: indexReducer,
})
