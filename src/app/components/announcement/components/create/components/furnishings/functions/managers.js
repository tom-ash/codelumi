import { furnishings } from '../../../../../constants/furnishings'

export function furnishingsManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: furnishings.map(furnishing => (
      {
        ref: furnishing.ref,
        checked: this.props.furnishings[furnishing.ref],
        label: this.languageHandler(furnishing.pl, furnishing.en)
      }
    )),
    onClick: (value, ref) => {
      this.props.changeInputs({ furnishings: { ...this.props.furnishings, [ref]: value}})
    }
  }
}