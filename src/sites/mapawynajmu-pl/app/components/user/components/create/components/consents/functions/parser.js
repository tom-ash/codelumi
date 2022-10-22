import { textProvider } from '../functions/text-provider'

export function parser(userObject) {
  userObject.consents = [
    {
      type: 'terms_and_conditions_and_privacy_policy',
      granted: true,
      displayed_text: textProvider.call(this, { pureText: true }).termsAndPrivacyConsent,
    },
  ]
}
