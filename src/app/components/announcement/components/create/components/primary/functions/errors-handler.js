import { errors } from '../constants/errors'

const noError = { pl: '', en: '' }

export function handleErrorOnSelect(input, value) {
  if (value !== '') return  this.props.changeErrors({ [input]: noError })
  this.props.changeErrors({ [input]: errors[input] })
}

export function handleErrorOnValidate(inputName) {
  const { changeErrors, [inputName]: value } = this.props

  if (value !== '' && value !== null && value !== undefined) return true

  changeErrors({ [inputName]: errors[inputName] })
  return false
}


