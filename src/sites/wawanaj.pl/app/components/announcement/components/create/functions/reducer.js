import { combineReducers } from 'redux'
import { control, inputs, data, errors } from '../constants/state'

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'announcement/create/control': return { ...state, ...action.value }
    case 'announcement/create/control/reset': return { ...control }
    default: return state
  }
}

export const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'announcement/create/inputs': return { ...state, ...action.value }
    case 'announcement/create/inputs/reset': return { ...inputs }
    default: return state
  }
}

export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'announcement/create/data': return { ...state, ...action.value }
    case 'announcement/create/data/reset': return { ...data }
    default: return state
  }
}

export const errorsReducer = (state = errors, action) => {
  switch (action.type) {
    case 'announcement/create/errors': return { ...state, ...action.value }
    case 'announcement/create/errors/reset': return { ...errors }
    default: return state
  }
}

export const createReducer = combineReducers({
  control: controlReducer,
  inputs: inputsReducer,
  data: dataReducer,
  errors: errorsReducer
})
