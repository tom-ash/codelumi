import { features } from '../../../../../constants/features'

export function addFeaturesManager() {
  const {
    addFeatures,
    changeInputs
  } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher' },
    checked: addFeatures,
    label: this.languageObjectHandler({
      pl: 'Dodaj Zalety',
      en: 'Add Features'
    }),
    onClick: value => {
      changeInputs({ addFeatures: value })
    }
  }
}

export function featuresManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: this.pickElementsForCategory(features, 'features'),
    onClick: (value, ref) => this.props.changeInputs({ features: { ...this.props.features, [ref]: value}})
  }
}
