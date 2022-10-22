import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'
import termsAndPrivacyConsentValidator from './validators.js'

const { CONSENTS_CHECKED_EVENT, CONSENTS_UNCHECKED_EVENT } = analyticEvents

export function termsAndPrivacyConsentManager() {
  return {
    id: 'user-create-consents-terms-and-privacy',
    classNames: { container: 'form-input checkbox' },
    checked: this.props.termsAndPrivacyConsent,
    label: this.textProvider({}).termsAndPrivacyConsent,
    onClick: value => {
      this.props.changeInputs({ termsAndPrivacyConsent: value })
      this.termsAndPrivacyConsentManager().validate(value)

      const analyticEvent = value ? CONSENTS_CHECKED_EVENT : CONSENTS_UNCHECKED_EVENT
      sendGaEvent(analyticEvent)
    },
    validate: value => termsAndPrivacyConsentValidator.call(this, value),
  }
}
