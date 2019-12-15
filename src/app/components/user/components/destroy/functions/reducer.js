import { combineReducers } from 'redux'

const noError = { pl: '', en: '' }

const control = {
  connecting: false,
  stage: null,
  step: null
}

const errors = {
  verification: noError
}

const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'user/destroy/control': return { ...state, ...action.value }
    case 'user/destroy/control/reset': return { ...control }
    default: return state
  }
}

const errorsReducer = (state = errors, action) => {
  switch (action.type) {
    case 'user/destroy/errors': return { ...state, ...action.value }
    case 'user/destroy/errors/reset': return { ...errors }
    default: return state
  }
}

export const destroyReducer = combineReducers({
  control: controlReducer,
  errors: errorsReducer
})