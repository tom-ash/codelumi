import { combineReducers } from 'redux'
import { appReducer, renderReducer, assetsReducer } from './reducers'
import { announcementReducer } from '../components/announcement/functions/reducer'
import { userReducer } from '../components/user/functions/reducers.js'
import { visitorReducer } from '../components/visitor/functions/reducers.js'
import { scaffoldReducer } from '../components/scaffold/functions/reducer'
import { pageReducer } from '../../../shared/app/components/page/functions/reducer.js'

const rootReducer = combineReducers({
  app: appReducer,
  render: renderReducer,
  assets: assetsReducer,
  announcement: announcementReducer,
  user: userReducer,
  visitor: visitorReducer,
  scaffold: scaffoldReducer,
  page: pageReducer
})

export default rootReducer
