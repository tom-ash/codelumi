import { textProvider } from '../functions/text-provider'

export function parser(userObject) {

  console.log(textProvider.call(this, { pureText: true }).termsAndPrivacyConsent)

  userObject.termsAndPrivacyConsent = {
    value: 'granted',
    text: textProvider.call(this, { pureText: true }).termsAndPrivacyConsent
  }
}
