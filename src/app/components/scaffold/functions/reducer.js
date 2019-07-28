import { combineReducers } from 'redux'
import { mainPageReducer } from '../components/main-page/functions/reducer'

// console.log(mainPageReducer)

export const scaffoldReducer = combineReducers({
  mainPage: mainPageReducer
})