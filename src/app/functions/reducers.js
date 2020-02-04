import { appState } from '../constants/app-state'

export const appReducer = route => (state = { ...appState, ...route }, action) => {
  switch (action.type) {
    case 'app': return { ...state, ...action.value }
    default: return state
  }
}
