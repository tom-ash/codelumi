import { combineReducers } from 'redux'
import { appReducer, renderReducer, assetsReducer, linksReducer } from './reducers'
import { announcementReducer } from '../components/announcement/functions/reducer'
import { userReducer } from '../components/user/functions/reducers'
import visitorReducer from '../../../shared/app/components/visitor/functions/reducers'
import { pageReducer } from '../../../shared/app/components/page/functions/reducer'
import { imageReducer } from '../../../shared/app/components/image/functions/reducer'
import { textsReducer } from './reducers'

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
  texts: textsReducer,
})

export default rootReducer
