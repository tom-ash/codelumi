import initialAppState from '../../constants/initial-app-state'
import { combineReducers } from 'redux'

// @ts-ignore
const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'app':
      return { ...state, ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const renderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'render':
      return { ...state, ...action.value }
    case 'render/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const textsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'texts':
      return { ...state, ...action.value }
    case 'texts/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const assetsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'assets':
      return { ...state, ...action.value }
    case 'assets/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const linksReducer = (state = {}, action) => {
  switch (action.type) {
    case 'links':
      return { ...state, ...action.value }
    case 'links/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const controlReducer = (state = {}, action) => {
  switch (action.type) {
    case 'control':
      return { ...state, ...action.value }
    case 'control/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'data':
      return { ...state, ...action.value }
    case 'data/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const inputsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'inputs':
      return { ...state, ...action.value }
    case 'inputs/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'errors':
      return { ...state, ...action.value }
    case 'errors/reset':
      return { ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const visitorReducer = (state = {}, action) => {
  switch (action.type) {
    case 'visitor':
      return { ...state, ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'user':
      return { ...state, ...action.value }
    default:
      return state
  }
}

// @ts-ignore
const metaReducer = (state = {}, action) => {
  switch (action.type) {
    case 'meta':
      return action.value
    default:
      return state
  }
}


export const rootReducer = combineReducers({
  app: appReducer,
  render: renderReducer,
  visitor: visitorReducer,
  user: userReducer,
  meta: metaReducer,
  texts: textsReducer,
  assets: assetsReducer,
  links: linksReducer,
  control: controlReducer,
  data: dataReducer,
  inputs: inputsReducer,
  errors: errorsReducer,
})
