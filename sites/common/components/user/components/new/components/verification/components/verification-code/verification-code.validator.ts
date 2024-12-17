const VERIFICATION_CODE_REGEX = /^\d{4}$/;

interface VerificationCodeValidator {
  (props: {
    verificationCode: string;
    setErrors(props: { verificationCode: boolean }): void;
  }): boolean;
}

export const verificationCodeValidator: VerificationCodeValidator = (props) => {
  const { verificationCode, setErrors } = props;

  if (!VERIFICATION_CODE_REGEX.test(verificationCode)) {
    setErrors({ verificationCode: true });
    return false;
  }

  return true;
};
