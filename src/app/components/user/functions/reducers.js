import { combineReducers } from 'redux'
import { createReducer } from '../components/create/functions/reducer'
import { authorizeReducer } from '../components/authorize/functions/reducers'
import { editReducer } from '../components/edit/functions/reducer';
import { destroyReducer } from '../components/destroy/functions/reducer';

const connectingReducer = (state = false, action) => {
  switch (action.type) {
    case 'USER_CONNECTING':
      return action.value
    default:
      return state
  }
}

export const userReducer = combineReducers({
  connecting: connectingReducer,
  create: createReducer,
  authorize: authorizeReducer,
  edit: editReducer,
  destroy: destroyReducer
})
  