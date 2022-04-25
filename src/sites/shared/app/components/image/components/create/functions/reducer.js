import initialState from '../constants/state'

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'image/index': return { ...state, ...action.value }
    default: return state
  }
}

export default createReducer
