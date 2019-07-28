import { noError } from '../constants/no-error'

export function componentWillUnmount() {
  this.props.changeControl({ passwordStep: null })
  this.props.changeErrors({ password: noError })
}