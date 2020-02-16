import { combineReducers } from 'redux'
import { control, data } from '../constants/state'

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'announcement/show/control': return { ...state, ...action.value }
    case 'announcement/show/control/reset': return { ...control }
    default: return state
  }
}

export const dataReducerProvider = announcement => (state = { ...data, ...announcement }, action) => {
  switch (action.type) {
    case 'announcement/show/data': return { ...state, ...action.value }
    case 'announcement/show/data/reset': return { ...data }
    default: return state
  }
}

export const showReducerProvider = announcement => combineReducers({
  control: controlReducer,
  data: dataReducerProvider(announcement || {})
})
