import { combineReducers } from 'redux'

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'page/index/data': return { ...state, ...action.value }
    default: return state
  }
}

const indexReducer = combineReducers({
  data: dataReducer
})

export default indexReducer
