import { requiredInputs } from '../../../constants/required-inputs'

export function validatePictures() {
  if (!this.props.blobs.length) {
    this.props.setErrors({ pictures: requiredInputs.pictures.error })
    return false
  }
  return true
}
