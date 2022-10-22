import { combineReducers } from 'redux'
import { control, inputs, data } from '../constants/state'

const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'image/edit/control':
      return { ...state, ...action.value }
    case 'image/edit/control/reset':
      return { ...control }
    default:
      return state
  }
}

const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'image/edit/inputs':
      return { ...state, ...action.value }
    case 'image/edit/inputs/reset':
      return { ...inputs }
    default:
      return state
  }
}

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'image/edit/data':
      return { ...state, ...action.value }
    case 'image/edit/control/reset':
      return { ...control }
    default:
      return state
  }
}

const editReducer = combineReducers({
  control: controlReducer,
  inputs: inputsReducer,
  data: dataReducer,
})

export default editReducer
