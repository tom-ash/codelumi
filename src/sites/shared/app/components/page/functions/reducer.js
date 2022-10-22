import { combineReducers } from 'redux'
import editReducer from '../components/edit/functions/reducer'
import indexReducer from '../components/index/functions/reducer'
import showReducer from '../components/show/functions/reducer'

export const pageReducer = combineReducers({
  show: showReducer,
  index: indexReducer,
  edit: editReducer,
})
