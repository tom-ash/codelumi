const initialState = {
  tutorials: []
}

const indexReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'page/index': return { ...state, ...action.value }
    default: return state
  }
}

export default indexReducer
