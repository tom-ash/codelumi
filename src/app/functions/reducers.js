import { appState } from '../constants/app-state'
import { emptyRoutes } from '../../shared/routes/routes'

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case 'app': return { ...state, ...action.value }
    case 'route': return { ...state, ...emptyRoutes, ...action.value }
    default: return state
  }
}
