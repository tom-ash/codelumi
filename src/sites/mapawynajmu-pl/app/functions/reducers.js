import initialAppState from '../../../shared/app/constants/initial-app-state'
import { combineReducers } from 'redux'

export const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'app':
      return { ...state, ...action.value }
    default:
      return state
  }
}

export const renderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'render':
      return action.value
    default:
      return state
  }
}

export const svgsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'assets/svgs':
      return { ...state, ...action.value }
    default:
      return state
  }
}

export const assetsReducer = combineReducers({
  svgs: svgsReducer,
})

export const linksReducer = (state = {}, action) => {
  switch (action.type) {
    case 'links':
      return action.value
    default:
      return state
  }
}
