import { combineReducers } from 'redux'
import { control, inputs, errors, data } from '../constants/state'

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'user/authorize/control':
      return { ...state, ...action.value }
    case 'user/authorize/control/reset':
      return { ...control }
    default:
      return state
  }
}

export const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'user/authorize/inputs':
      return { ...state, ...action.value }
    case 'user/authorize/inputs/reset':
      return { ...inputs }
    default:
      return state
  }
}

export const errorsReducer = (state = errors, action) => {
  switch (action.type) {
    case 'user/authorize/errors':
      return { ...state, ...action.value }
    case 'user/authorize/errors/reset':
      return { ...errors }
    default:
      return state
  }
}

export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'user/authorize/data':
      return { ...state, ...action.value }
    case 'user/authorize/data/reset':
      return { ...data }
    default:
      return state
  }
}

export const authorizeReducer = combineReducers({
  control: controlReducer,
  inputs: inputsReducer,
  errors: errorsReducer,
  data: dataReducer,
})
