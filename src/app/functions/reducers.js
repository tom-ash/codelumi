import { appState } from '../constants/app-state'
import { routes } from '../constants/routes'

export const appReducerProvider = route => (state = { ...appState, ...route }, action) => {
  switch (action.type) {
    case 'app': return { ...state, ...action.value }
    case 'route': return { ...state, ...routes, ...action.value }
    default: return state
  }
}
