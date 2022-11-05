import { features } from '../../../../../constants/features'
import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { FEATURES_SHOWN_EVENT, FEATURES_SELECTED_EVENT } = analyticEvents

export function addFeaturesManager() {
  const { addFeatures, changeInputs } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher' },
    checked: addFeatures,
    label: this.langHandler({
      pl: 'Dodaj Zalety',
      en: 'Add Features',
    }),
    onClick: value => {
      changeInputs({ addFeatures: value })
      sendGaEvent(FEATURES_SHOWN_EVENT)
    },
  }
}

export function featuresManager() {
  return {
    classNames: { container: 'form-input checkbox' },
    checkboxes: this.pickElementsForCategory(features, 'features'),
    onClick: (value, ref) => {
      this.props.changeInputs({ features: { ...this.props.features, [ref]: value } })
      sendGaEvent(FEATURES_SELECTED_EVENT)
    },
  }
}
