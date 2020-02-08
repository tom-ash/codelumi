import { appState } from '../constants/app-state'

export const appReducerProvider = route => (state = { ...appState, ...route }, action) => {
  switch (action.type) {
    case 'app': return { ...state, ...action.value }
    default: return state
  }
}
