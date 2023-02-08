import { combineReducers } from 'redux'
import { inputs, errors } from '../constants/state'

export const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'announcement/create/inputs':
      return { ...state, ...action.value }
    case 'announcement/create/inputs/reset':
      return { ...inputs }
    default:
      return state
  }
}

export const errorsReducer = (state = errors, action) => {
  switch (action.type) {
    case 'announcement/create/errors':
      return { ...state, ...action.value }
    case 'announcement/create/errors/reset':
      return { ...errors }
    default:
      return state
  }
}

export const createReducer = combineReducers({
  inputs: inputsReducer,
  errors: errorsReducer,
})
