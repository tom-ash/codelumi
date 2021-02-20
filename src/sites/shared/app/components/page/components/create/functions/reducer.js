import { combineReducers } from 'redux'
import { control, inputs, data } from '../constants/state'

const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'page/create/control': return { ...state, ...action.value }
    default: return state
  }
}

const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'page/create/inputs': return { ...state, ...action.value }
    default: return state
  }
}

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'page/create/data': return { ...state, ...action.value }
    default: return state
  }
}

const createReducer = combineReducers({
  control: controlReducer,
  inputs: inputsReducer,
  data: dataReducer
})

export default createReducer
