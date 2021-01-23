import { combineReducers } from 'redux'

export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'page/index/data': return { ...state, ...action.value }
    case 'page/index/data/reset': return {}
    default: return state
  }
}

export const indexReducer = combineReducers({
  data: dataReducer
})
