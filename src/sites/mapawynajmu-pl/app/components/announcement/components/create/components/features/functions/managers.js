import { features } from '../../../../../constants/features'
import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const { FEATURES_SHOWN_EVENT, FEATURES_SELECTED_EVENT } = analyticEvents

export function addFeaturesManager() {
  const { addFeatures, setInputs } = this.props

  return {
    classNames: { container: 'form-input checkbox add-switcher' },
    checked: addFeatures,
    label: {
      pl: 'Dodaj Zalety',
      en: 'Add Features',
    }['pl'],
    onClick: value => {
      setInputs({ addFeatures: value })
      sendGaEvent(FEATURES_SHOWN_EVENT)
    },
  }
}

function transformFeatures(features) {
  return features.map(feature => {
    return {
      ref: feature.ref,
      checked: this.props.features.indexOf(feature.ref) !== -1,
      label: feature.pl, // TODO!
    }
  })
}

export function featuresManager() {
  return {
    classNames: { container: 'form-input checkbox' },
    checkboxes: transformFeatures.call(this, features),
    onClick: (value, ref) => {
      let newFeatures = this.props.features

      if (value) {
        newFeatures = newFeatures.concat([ref])
      } else {
        newFeatures = newFeatures.filter(feature => feature !== ref)
      }

      this.props.setInputs({ features: newFeatures })
    },
  }
}
