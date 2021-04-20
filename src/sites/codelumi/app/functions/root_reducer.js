import { combineReducers } from 'redux'
import { appReducer, renderReducer, assetsReducer, userReducer } from './reducers.js'
import { visitorReducer } from '../../../shared/app/components/visitor/functions/reducers.js'
import { pageReducer } from '../../../shared/app/components/page/functions/reducer.js'

const rootReducer = combineReducers({
  app: appReducer,
  render: renderReducer,
  assets: assetsReducer,
  visitor: visitorReducer,
  page: pageReducer,
  user: userReducer
})

export default rootReducer
