import { combineReducers } from 'redux'

const noError = { polish: '', english: '' }

const control = {
  connecting: false,
  businessNameConnecting: false,
  taxIdentificationConnecting: false,
  phoneConnecting: false,
  emailConnecting: false,
  passwordConnecting: false,
  businessNameStage: null,
  taxIdentificationStage: null,
  phoneStage: null,
  phoneVerificationStarted: false,
  phoneVerificationSent: false,
  emailStage: null,
  emailStep: null,
  passwordStage: null,
  passwordStep: null
}

const inputs = {
  phoneCountryCode: null
}

const errors = {
  phoneVerification: noError,
  businessName: noError,
  taxIdentification: noError,
  phone: noError,
  currentEmailVerification: noError,
  newEmail: noError,
  newEmailVerification: noError,
  newEmailPassword: noError,
  password: noError
}

const data = {
  businessName: null,
  taxIdentification: null,
  phoneBody: null,
  email: null
}

const controlReducer = (state = control, action) => {
  switch (action.type) {
    case 'user/edit/control': return { ...state, ...action.value }
    case 'user/edit/control/reset': return { ...control }
    default: return state
  }
}

const inputsReducer = (state = inputs, action) => {
  switch (action.type) {
    case 'user/edit/inputs': return { ...state, ...action.value }
    case 'user/edit/inputs/reset': return { ...inputs }
    default: return state
  }
}

const errorsReducer = (state = errors, action) => {
  switch (action.type) {
    case 'user/edit/errors': return { ...state, ...action.value }
    case 'user/edit/errors/reset': return { ...errors }
    default: return state
  }
}

const dataReducer = (state = data, action) => {
  switch (action.type) {
    case 'user/edit/data': return { ...state, ...action.value }
    case 'user/edit/data/reset': return { ...data }
    default: return state
  }
}

export const editReducer = combineReducers({
  control: controlReducer,
  inputs: inputsReducer,
  errors: errorsReducer,
  data: dataReducer
})



