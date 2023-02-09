import { noError } from '../constants/no-error'

export function componentWillUnmount() {
  this.props.setControl({ passwordStep: null })
  this.props.setErrors({ password: noError })
}
