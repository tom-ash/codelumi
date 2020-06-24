import { requiredInputs } from '../../../constants/required-inputs'

const noError = {
  pl: '',
  en: ''
}

export function handleErrorOnSelect(input, value) {
  const {
    changeErrors
  } = this.props

  if (value !== '') return changeErrors({ [input]: noError })

  changeErrors({ [input]: requiredInputs[input].error })
}

export function handleErrorOnValidate(inputName) {
  const {
    changeErrors,
    [inputName]: value
  } = this.props

  if (value !== '' && value !== null && value !== undefined) return true

  changeErrors({ [inputName]: requiredInputs[inputName].error })
  return false
}
