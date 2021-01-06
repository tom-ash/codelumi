import { features } from '../../../../../constants/features'
import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import {
  ANNOUNCEMENT_CREATE_SHOW_FEATURES_EVENT,
  ANNOUNCEMENT_CREATE_FEATURES_ADDED_EVENT
} from '../../../../../../../constants/analytics-events'

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
      sendGaEvent(ANNOUNCEMENT_CREATE_SHOW_FEATURES_EVENT)
    }
  }
}

export function featuresManager() {
  return {
    classNames: { container: 'form-input checkbox'},
    checkboxes: this.pickElementsForCategory(features, 'features'),
    onClick: (value, ref) => {
      this.props.changeInputs({ features: { ...this.props.features, [ref]: value}})
      sendGaEvent(ANNOUNCEMENT_CREATE_FEATURES_ADDED_EVENT)
    }
  }
}
