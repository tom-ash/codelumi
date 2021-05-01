const control = {
  // TODO
}

export const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'scaffold/header/control': return { ...state, ...action.value }
    default: return state
  }
}

export const headerReducer = combineReducers({
  control: controlReducer
})
