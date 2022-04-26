import { combineReducers } from 'redux'
import indexReducer from '../components/index/functions/reducer'
import editReducer from '../components/edit/functions/reducer'

export const imageReducer = combineReducers({
  edit: editReducer,
  index: indexReducer
})
