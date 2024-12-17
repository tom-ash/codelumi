export const termsOfServiceConsentParser = (
  termsOfServiceConsentText: string,
) => {
  return {
    type: 'terms_of_service',
    granted: true,
    displayed_text: termsOfServiceConsentText,
  };
};
