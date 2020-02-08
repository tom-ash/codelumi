import { combineReducers } from 'redux'
import { appReducerProvider } from './reducers'
import { announcementReducerProvider } from '../components/announcement/functions/reducer'
import { userReducer } from '../components/user/functions/reducers.js'
import { visitorReducer } from '../components/visitor/functions/reducers.js'
import { scaffoldReducer } from '../components/scaffold/functions/reducer'

export const rootReducerProvider = ({
  route,
  announcementsList,
  announcement
}) => combineReducers({
  app: appReducerProvider(route || {}),
  announcement: announcementReducerProvider({ announcementsList, announcement }),
  user: userReducer,
  visitor: visitorReducer,
  scaffold: scaffoldReducer
})
