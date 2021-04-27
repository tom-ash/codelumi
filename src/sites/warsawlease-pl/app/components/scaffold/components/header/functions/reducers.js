import { combineReducers } from 'redux'
import { SHOW_MENU } from '../constants/tracks'

const control = {
  [SHOW_MENU]: false
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
