import { combineReducers } from 'redux'
import createReducer from '../components/create/functions/reducer'
// import { showReducer } from '../components/show/functions/reducer'
// import { indexReducer } from '../components/index/functions/reducers'

export const announcementReducer = combineReducers({
  create: createReducer,
  // show: showReducer,
  // index: indexReducer
})
