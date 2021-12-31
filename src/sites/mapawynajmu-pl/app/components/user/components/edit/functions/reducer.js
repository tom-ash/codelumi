import { combineReducers } from 'redux'

const noError = { pl: '', en: '' }

const control = {
  connecting: false,
  firstNameConnecting: false,
  lastNameConnecting: false,
  businessNameConnecting: false,
  taxNumberConnecting: false,
  phoneConnecting: false,
  emailConnecting: false,
  passwordConnecting: false,
  firstNameStage: null,
  lastNameStage: null,
  businessNameStage: null,
  taxNumberStage: null,
  phoneStage: null,
  phoneVerificationStarted: false,
  phoneVerificationSent: false,
  emailStage: null,
  emailStep: null,
  passwordStage: null,
  passwordStep: null
}

const inputs = {
  countryCode: null
}

const errors = {
  phoneVerification: noError,
  firstName: noError,
  lastName: noError,
  businessName: noError,
  taxNumber: noError,
  phone: noError,
  currentEmailVerification: noError,
  newEmail: noError,
  newEmailVerification: noError,
  newEmailPassword: noError,
  password: noError
}

const data = {
  firstName: null,
  lastName: null,
  businessName: null,
  taxNumber: null,
  phoneNumber: null,
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



