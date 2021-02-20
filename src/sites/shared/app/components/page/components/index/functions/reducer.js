import { combineReducers } from 'redux'

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'page/index/data': return { ...state, ...action.value }
    default: return state
  }
}

const inputsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'page/index/inputs': return { ...state, ...action.value }
    default: return state
  }
}

const indexReducer = combineReducers({
  data: dataReducer,
  inputs: inputsReducer
})

export default indexReducer
