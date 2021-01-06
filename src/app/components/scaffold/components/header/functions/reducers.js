import { combineReducers } from 'redux'
import { RENDER_SIDE_LINKS_TRACK } from '../constants/tracks'

const control = {
  [RENDER_SIDE_LINKS_TRACK]: false
}

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'scaffold/header/control': return { ...state, ...action.value }
    default: return state
  }
}

export const headerReducer = combineReducers({
  control: controlReducer
})
