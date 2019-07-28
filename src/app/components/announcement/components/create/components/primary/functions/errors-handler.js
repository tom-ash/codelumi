import { errors } from '../constants/errors'

const noError = { polish: '', english: '' }

export function handleErrorOnSelect(input, value) {
  if (value !== '') return  this.props.changeErrors({ [input]: noError })
  this.props.changeErrors({ [input]: errors[input] })
}

export function handleErrorOnValidate(input, value) {
  if (value !== '') return true
  this.props.changeErrors({ [input]: errors[input] })
  return false
}


