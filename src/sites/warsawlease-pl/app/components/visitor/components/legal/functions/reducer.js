import { combineReducers } from 'redux'
import { privacyReducer } from '../components/privacy/functions/reducer'

export const legalReducer = combineReducers({
  privacy: privacyReducer
})

