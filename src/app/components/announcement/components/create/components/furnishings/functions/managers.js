import { furnishings } from '../../../../../constants/furnishings'

export function furnishingsManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: this.pickElementsForCategory(furnishings, 'furnishings'),
    onClick: (value, ref) => {
      this.props.changeInputs({ furnishings: { ...this.props.furnishings, [ref]: value}})
    }
  }
}