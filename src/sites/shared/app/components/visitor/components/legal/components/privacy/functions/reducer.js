import { combineReducers } from 'redux'
import { settingsReducer } from '../components/settings/functions/reducer'

export const privacyReducer = combineReducers({
  settings: settingsReducer,
})
