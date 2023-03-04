export const termsOfServiceConsentParser = (termsOfServiceConsentText: string) => {
  return {
    type: 'terms_and_conditions_and_privacy_policy',
    granted: true,
    displayed_text: termsOfServiceConsentText,
  }
}
