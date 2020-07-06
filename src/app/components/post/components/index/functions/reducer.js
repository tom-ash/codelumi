import { combineReducers } from 'redux'
import { data } from '../constants/state'

export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'post/index/data': return { ...state, ...action.value }
    case 'post/index/data/reset': return { ...data }
    default: return state
  }
}

export const indexReducer = combineReducers({
  data: dataReducer
})
