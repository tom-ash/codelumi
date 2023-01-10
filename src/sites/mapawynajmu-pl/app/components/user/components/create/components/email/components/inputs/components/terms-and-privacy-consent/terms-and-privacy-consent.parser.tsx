// @ts-ignore
export const termsAndPrivacyConsentParser = (termsAndPrivacyConsentText) => {
  return (
    [
      {
        type: 'terms_and_conditions_and_privacy_policy',
        granted: true,
        displayed_text: termsAndPrivacyConsentText,
      },
    ]
  )
}
