interface TermsAndServiceConsentValidator {
  (props: {
    termsOfServiceConsent: boolean;
    setErrors(props: { termsOfServiceConsent: boolean }): void;
  }): boolean;
}

export const termsOfServiceConsentValidator: TermsAndServiceConsentValidator = (
  props,
) => {
  const { termsOfServiceConsent, setErrors } = props;

  if (!termsOfServiceConsent) {
    setErrors({ termsOfServiceConsent: true });
    return false;
  }

  setErrors({ termsOfServiceConsent: false });
  return true;
};
