import initialAppState from '../../constants/initial-app-state'
import { combineReducers } from 'redux'
import { visitorReducer } from '../../components/visitor/functions/reducers'

const appReducer = (state = initialAppState, action) => {
  switch (action.type) {
    case 'app':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const renderReducer = (state = {}, action) => {
  switch (action.type) {
    case 'render':
      return action.value
    case 'render/reset':
      return {}
    default:
      return state
  }
}

const textsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'texts':
      return action.value
    default:
      return state
  }
}

const assetsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'assets':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const linksReducer = (state = {}, action) => {
  switch (action.type) {
    case 'links':
      return action.value
    default:
      return state
  }
}

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

const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'data':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const inputsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'inputs':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'errors':
      return { ...state, ...action.value }
    default:
      return state
  }
}

const _userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'user':
      return { ...state, ...action.value }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  app: appReducer,
  render: renderReducer,
  visitor: visitorReducer,
  user: _userReducer,
  texts: textsReducer,
  assets: assetsReducer,
  links: linksReducer,
  control: controlReducer,
  data: dataReducer,
  inputs: inputsReducer,
  errors: errorsReducer,
})
