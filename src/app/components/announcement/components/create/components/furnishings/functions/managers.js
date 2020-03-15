import { furnishings } from '../../../../../constants/furnishings'

export function addFurnishingsManager() {
  const {
    addFurnishings,
    changeInputs
  } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher' },
    checked: addFurnishings,
    label: this.languageObjectHandler({
      pl: 'Dodaj Wyposażenie',
      en: 'Add Furnishings'
    }),
    onClick: value => {
      changeInputs({ addFurnishings: value })
    }
  }
}

export function furnishingsManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: this.pickElementsForCategory(furnishings, 'furnishings'),
    onClick: (value, ref) => {
      this.props.changeInputs({ furnishings: { ...this.props.furnishings, [ref]: value}})
    }
  }
}