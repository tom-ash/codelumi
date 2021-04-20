import appState from '../constants/app-state'
import renderState from '../constants/render-state.js'
import { combineReducers } from 'redux'

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

export const svgsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'assets/svgs': return { ...state, ...action.value }
    default: return state
  }
}

export const assetsReducer = combineReducers({
  svgs: svgsReducer
})

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'user/authorize/data': return { ...state, ...action.value }
    default: return state
  }
}

const authorizeReducer = combineReducers({
  data: dataReducer
})

export const userReducer = combineReducers({
  authorize: authorizeReducer
})