import { combineReducers } from 'redux'
import { createReducer } from '../components/create/functions/reducer'
import { indexReducer } from '../components/index/functions/reducer'
import { showReducer } from '../components/show/functions/reducer'
import { render } from '../constants/state'

export const renderReducer = (state = render, action) => {
  switch (action.type) {
    case 'post/render': return { ...state, ...action.value }
    case 'post/render/reset': return { ...render }
    default: return state
  }
}

export const postReducer = combineReducers({
  create: createReducer,
  show: showReducer,
  index: indexReducer,
  render: renderReducer
})
