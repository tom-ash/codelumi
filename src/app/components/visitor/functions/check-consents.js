export function checkConsents() {
  return [null, undefined].includes(this.props.consents.personalDataProcessing.marketingConsent)
}