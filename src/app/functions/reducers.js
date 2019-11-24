import { appState } from '../constants/app-state'

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case 'app': return { ...state, ...action.value }
    default: return state
  }
}
