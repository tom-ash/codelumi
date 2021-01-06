import { furnishings } from '../../../../../constants/furnishings'
import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import {
  ANNOUNCEMENT_CREATE_SHOW_FURNISHINGS_EVENT,
  ANNOUNCEMENT_CREATE_FURNISHINGS_ADDED_EVENT
} from '../../../../../../../constants/analytics-events'

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
      sendGaEvent(ANNOUNCEMENT_CREATE_SHOW_FURNISHINGS_EVENT)
    }
  }
}

export function furnishingsManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: this.pickElementsForCategory(furnishings, 'furnishings'),
    onClick: (value, ref) => {
      this.props.changeInputs({ furnishings: { ...this.props.furnishings, [ref]: value}})
      sendGaEvent(ANNOUNCEMENT_CREATE_FURNISHINGS_ADDED_EVENT)
    }
  }
}