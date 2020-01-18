import { features } from '../../../../../constants/features'

export function featuresManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: this.pickElementsForCategory(features, 'features'),
    onClick: (value, ref) => this.props.changeInputs({ features: { ...this.props.features, [ref]: value}})
  }
}
