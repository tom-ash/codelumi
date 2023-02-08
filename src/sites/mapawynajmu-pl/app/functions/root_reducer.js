import { combineReducers } from 'redux'
import { appReducer, renderReducer, assetsReducer, linksReducer } from './reducers'
import { announcementReducer } from '../components/announcement/functions/reducer'
import { userReducer } from '../components/user/functions/reducers'
import visitorReducer from '../../../shared/app/components/visitor/functions/reducers'
import { pageReducer } from '../../../shared/app/components/page/functions/reducer'
import { imageReducer } from '../../../shared/app/components/image/functions/reducer'
import { textsReducer } from './reducers'
import { controlReducer, dataReducer, inputsReducer, errorsReducer } from './reducers'

const rootReducer = combineReducers({
  announcement: announcementReducer,
  user: userReducer,
  visitor: visitorReducer,
  page: pageReducer,
  image: imageReducer,

  // New approach.
  app: appReducer,
  render: renderReducer,
  texts: textsReducer,
  links: linksReducer,
  assets: assetsReducer,
  control: controlReducer,
  data: dataReducer,
  inputs: inputsReducer,
  errors: errorsReducer,
})

export default rootReducer
