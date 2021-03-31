import { combineReducers } from 'redux'
import { control, inputs, data, errors } from '../constants/state'

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'user/create/control': return { ...state, ...action.value }
    case 'user/create/control/reset': return { ...control }
    default: return state
  }
}

export const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'user/create/inputs': return { ...state, ...action.value }
    case 'user/create/inputs/reset': return { ...inputs }
    default: return state
  }
}

export const errorsReducer = (state = errors, action) => {
  switch (action.type) {
    case 'user/create/errors': return { ...state, ...action.value }
    case 'user/create/errors/reset': return { ...errors }
    default: return state
  }
}

export const createReducer = combineReducers({
  control: controlReducer, inputs: inputsReducer, errors: errorsReducer
})
