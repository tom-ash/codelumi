import { managerAgent } from 'managed-inputs'
import { furnishings } from '../../../../../constants/furnishings'

export function furnishingsManager(aspect, value, ref) {
  return managerAgent(aspect, {
    classNames: { container: 'form-input checkbox'},
    checkboxes: furnishings.map(furnishing => (
      {
        ref: furnishing.ref,
        checked: this.props.furnishings[furnishing.ref],
        label: this.languageHandler(furnishing.polish, furnishing.english)
      }
    )),
    onClick: () => {
      this.props.changeInputs({ furnishings: { ...this.props.furnishings, [ref]: value}})
    }
  })
}