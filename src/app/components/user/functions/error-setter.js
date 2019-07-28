import { errors } from '../constants/errors'

export function errorSetter(field) {
  this.props.changeErrors({ [field]: errors[field] })
}