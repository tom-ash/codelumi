import { managerAgent } from 'managed-inputs'
import { features } from '../../../../../constants/features'

export function featuresManager(aspect, value, ref) {
  return managerAgent(aspect, {
    classNames: { container: 'primary-input checkbox'},
    checkboxes: features.map(feature => (
      {
        ref: feature.ref,
        checked: this.props.features[feature.ref],
        label: this.languageHandler(feature.polish, feature.english)
      }
    )),
    onClick: () => {
      this.props.changeInputs({ features: { ...this.props.features, [ref]: value}})
    }
  })
}