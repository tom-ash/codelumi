import { combineReducers } from 'redux'
import { appReducer, renderReducer, assetsReducer, userReducer, linksReducer } from './reducers'
import visitorReducer from '../../../shared/app/components/visitor/functions/reducers'
import { pageReducer } from '../../../shared/app/components/page/functions/reducer'
import { imageReducer } from '../../../shared/app/components/image/functions/reducer'
import { announcementReducer } from '../components/announcement/functions/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  render: renderReducer,
  assets: assetsReducer,
  visitor: visitorReducer,
  page: pageReducer,
  user: userReducer,
  announcement: announcementReducer,
  links: linksReducer,
  image: imageReducer,
})

export default rootReducer
