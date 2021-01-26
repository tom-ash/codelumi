import { textProvider } from '../functions/text-provider'

export function parser(userObject) {
  userObject.termsAndPrivacyConsent = {
    value: 'granted',
    text: textProvider.call(this, { pureText: true }).termsAndPrivacyConsent
  }
}
