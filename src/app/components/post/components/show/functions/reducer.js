import { combineReducers } from 'redux'
import { data } from '../constants/state'

export const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'post/show/data': return { ...state, ...action.value }
    case 'post/create/show/data': return { ...data }
    default: return state
  }
}

export const showReducer = combineReducers({
  data: dataReducer
})
