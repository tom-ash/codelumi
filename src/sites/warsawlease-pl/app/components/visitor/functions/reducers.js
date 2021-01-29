import { combineReducers } from 'redux'
import { legalReducer } from '../components/legal/functions/reducer'

export const visitorReducer = combineReducers({
  legal: legalReducer
})

