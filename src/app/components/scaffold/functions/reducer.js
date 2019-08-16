import { combineReducers } from 'redux'
import { mainPageReducer } from '../components/main-page/functions/reducer'
import { headerReducer } from '../components/header/functions/reducers'

export const scaffoldReducer = combineReducers({
  mainPage: mainPageReducer,
  header: headerReducer
})