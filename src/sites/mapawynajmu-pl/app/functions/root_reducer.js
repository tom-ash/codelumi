import { combineReducers } from 'redux'
import { appReducer, renderReducer, assetsReducer, linksReducer } from './reducers'
import { announcementReducer } from '../components/announcement/functions/reducer'
import { userReducer } from '../components/user/functions/reducers.js'
import visitorReducer from '../../../shared/app/components/visitor/functions/reducers.js'
import { pageReducer } from '../../../shared/app/components/page/functions/reducer.js'
import { imageReducer } from '../../../shared/app/components/image/functions/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  render: renderReducer,
  assets: assetsReducer,
  announcement: announcementReducer,
  user: userReducer,
  visitor: visitorReducer,
  page: pageReducer,
  links: linksReducer,
  image: imageReducer,
})

export default rootReducer
