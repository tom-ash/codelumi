import { combineReducers } from 'redux'
import { control, data } from '../constants/state'

const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'blog/control': return { ...state, ...action.value }
    case 'blog/control/reset': return { ...control }
    default: return { ...state }
  }
}

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'blog/data': return { ...state, ...action.value }
    case 'blog/data/reset': return { ...control }
    default: return { ...state }
  }
}

export const blogReducer = combineReducers({
  control: controlReducer,
  data: dataReducer
})
