import { combineReducers } from 'redux'
import { control, data } from '../constants/state'

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'announcement/show/control': return { ...state, ...action.value }
    case 'announcement/show/control/reset': return { ...control }
    default: return state
  }
}

export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'announcement/show/data': return { ...state, ...action.value }
    default: return state
  }
}

export const showReducer = combineReducers({
  control: controlReducer,
  data: dataReducer
})
