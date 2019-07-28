const mainPageState = {
  jumbotronPicture: ''
}

export const mainPageReducer = (state = mainPageState, action) => {
  switch (action.type) {
    case 'scaffold/main-page': return { ...state, ...action.value }
    default: return state
  }
}
