import { combineReducers } from 'redux'
import { appReducer, renderReducer } from './reducers'
import { announcementReducer } from '../components/announcement/functions/reducer'
import { userReducer } from '../components/user/functions/reducers.js'
import { visitorReducer } from '../components/visitor/functions/reducers.js'
import { scaffoldReducer } from '../components/scaffold/functions/reducer'
import { postReducer } from '../components/page/functions/reducer'

export const rootReducer = combineReducers({
  app: appReducer,
  render: renderReducer,
  announcement: announcementReducer,
  user: userReducer,
  visitor: visitorReducer,
  scaffold: scaffoldReducer,
  page: postReducer
})
