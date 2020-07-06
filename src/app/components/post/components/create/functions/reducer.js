import { combineReducers } from 'redux'
import { control, inputs } from '../constants/state'

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'post/create/control': return { ...state, ...action.value }
    case 'post/create/control/reset': return { ...control }
    default: return state
  }
}

export const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'post/create/inputs': return { ...state, ...action.value }
    case 'post/create/inputs/reset': return { ...inputs }
    default: return state
  }
}

export const createReducer = combineReducers({
  control: controlReducer,
  inputs: inputsReducer
})
