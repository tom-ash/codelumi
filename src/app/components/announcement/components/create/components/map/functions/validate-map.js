import { requiredInputs } from '../../../constants/required-inputs'

export function validateMap() {
  if (!this.props.latitude || !this.props.longitude) {
    this.props.changeErrors({ map: requiredInputs.map.error })
    return false
  }
  return true
}
