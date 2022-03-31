import { combineReducers } from 'redux'
import editReducer from '../components/edit/functions/reducer'

export const imageReducer = combineReducers({
  edit: editReducer
})
