import { combineReducers } from 'redux'
import { createReducer } from '../components/create/functions/reducer'
import { indexReducer } from '../components/index/functions/reducer'

export const postReducer = combineReducers({
  create: createReducer,
  index: indexReducer
})
