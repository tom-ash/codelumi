import initialState from '../constants/initial-state'

const createReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'announcement/create':
      return { ...state, ...action.value }
    case 'announcement/create/reset':
      return { ...initialState, ...action.value }
    default:
      return state
  }
}

export default createReducer
