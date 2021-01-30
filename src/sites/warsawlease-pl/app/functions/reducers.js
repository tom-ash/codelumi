import appState from '../constants/app-state'
import renderState from '../constants/render-state'

export const appReducer = (state = appState, action) => {
  switch (action.type) {
    case 'app': return { ...state, ...action.value }
    default: return state
  }
}

export const renderReducer = (state = renderState, action) => {
  switch (action.type) {
    case 'render': return { ...state, ...action.value }
    case 'render/reset': return { ...renderState, ...action.value }
    default: return state
  }
}