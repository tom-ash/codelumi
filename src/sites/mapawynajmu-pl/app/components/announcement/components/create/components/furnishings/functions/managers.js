import { furnishings } from '../../../../../constants/furnishings'
import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { FURNISHINGS_SHOWN_EVENT, FURNISHINGS_SELECTED_EVENT } = analyticEvents

export function addFurnishingsManager() {
  const { addFurnishings, setInputs } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher' },
    checked: addFurnishings,
    label: this.langHandler({
      pl: 'Dodaj Wyposażenie',
      en: 'Add Furnishings',
    }),
    onClick: value => {
      setInputs({ addFurnishings: value })
      sendGaEvent(FURNISHINGS_SHOWN_EVENT)
    },
  }
}

function transformFurnishings(furnishings) {
  return furnishings.map(furnishing => {
    return {
      ref: furnishing.ref,
      checked: this.props.furnishings.indexOf(furnishing.ref) !== -1,
      label: furnishing.pl,
    }
  })
}

export function furnishingsManager() {
  return {
    classNames: { container: 'form-input checkbox' },
    checkboxes: transformFurnishings.call(this, furnishings),
    onClick: (value, ref) => {
      let newFurnishings = this.props.furnishings

      if (value) {
        newFurnishings = newFurnishings.concat([ref])
      } else {
        newFurnishings = newFurnishings.filter(feature => feature !== ref)
      }

      this.props.setInputs({ furnishings: newFurnishings })
    },
  }
}
