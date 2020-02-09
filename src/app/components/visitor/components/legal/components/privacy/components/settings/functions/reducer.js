const initialState = {
  statisticsConsent: undefined,
  marketingConsent: undefined
}

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'visitor/privacy/settings': return { ...state, ...action.value }
    default: return state
  }
}