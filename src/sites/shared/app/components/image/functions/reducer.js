import { combineReducers } from 'redux'
import createReducer from '../components/create/functions/reducer'
import editReducer from '../components/edit/functions/reducer'

export const imageReducer = combineReducers({
  edit: editReducer,
  create: createReducer
})
