import { features } from '../../../../../constants/features'

export function featuresManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: features.map(feature => (
      {
        ref: feature.ref,
        checked: this.props.features[feature.ref],
        label: this.languageHandler(feature.polish, feature.english)
      }
    )),
    onClick: (value, ref) => this.props.changeInputs({ features: { ...this.props.features, [ref]: value}})
  }
}