import { combineReducers } from 'redux'

const deviceReducer = (state = {}, action) => {
  switch (action.type) {
    case 'visitor/device':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const consentsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'visitor/consents':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const cookiesReducer = (state = {}, action) => {
  switch (action.type) {
    case 'visitor/cookies':
      return { ...state, ...action.value }
    default:
      return state
  }
}

export const visitorReducer = combineReducers({
  device: deviceReducer,
  cookies: cookiesReducer,
  consents: consentsReducer,
})
