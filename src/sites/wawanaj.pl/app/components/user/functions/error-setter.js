import { errors } from '../constants/errors'

export function errorSetter(field) {
  const { changeErrors } = this.props

  changeErrors({ [field]: errors[field] })
}