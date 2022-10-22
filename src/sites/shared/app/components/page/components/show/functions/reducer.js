import { combineReducers } from 'redux'
import { data } from '../constants/state'

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'page/show/data':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const showReducer = combineReducers({
  data: dataReducer,
})

export default showReducer
