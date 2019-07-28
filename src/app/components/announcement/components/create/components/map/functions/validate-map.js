import { requiredInputs } from '../../../constants/required-inputs'

export function validateMap() {
  if (!this.props.mapLatitude || !this.props.mapLongitude) {
    this.props.changeErrors({ map: requiredInputs.map.error })
    return false
  }
  return true
}
