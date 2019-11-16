import { combineReducers } from 'redux'

function screenSizeReducer(state = null, action) {
  switch (action.type) {
  case 'SET_SCREEN_RESOLUTION':
    return action.value
  default:
    return state
  }
}

function pathReducer(state = '', action) {
  switch (action.type) {
    case 'app/path':
      return action.value
    default:
      return state
  }
}

function isMobileReducer(state = false, action) {
  switch (action.type) {
    case 'app/isMobile':
      return action.value
    default:
      return state
  }
}

function languageReducer(state = 'polish', action) {
  switch (action.type) {
    case 'APP_LANGUAGE':
      return action.value
    default:
      return state
  }
}

function connectingReducer(state = false, action) {
  switch (action.type) {
    case 'APP_CONNECTING':
      return action.value
    default:
      return state
  }
}

function scriptsReducer(state = {}, action) {
  switch (action.type) {
    case 'app/scripts': return { ...state, ...action.value }
    default: return state
  }
}

function scrollYReducer(state = 0, action) {
  switch (action.type) {
    case 'app/scrollY': return action.value
    default: return state
  }
}

export const appReducer = combineReducers({
  jumbotronPicture: '',
  screenSize: screenSizeReducer,
  scrollY: scrollYReducer,
  path: pathReducer,
  language: languageReducer,
  connecting: connectingReducer,
  scripts: scriptsReducer,
  isMobile: isMobileReducer
})