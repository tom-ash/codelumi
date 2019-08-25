import { combineReducers } from 'redux'
import { headerReducer } from '../components/header/functions/reducers'

export const scaffoldReducer = combineReducers({
  header: headerReducer
})