import setVerificationToken from '../../../../../../src copy/sites/shared/app/functions/cookies/setters/confirmation-token';
import { validateEmail } from '../../../../support/inputs/email/validators/validate-email';
import { PasswordResetStep } from '../password-reset.types';

interface SubmitEmail {
  (args: {
    apiUrl: string;
    lang: Lang;
    email: string;
    setControl: any; // TODO: TS!
    setErrors(params: { [keyof: string]: string }): void;
    emailInputInvalidError: string;
  }): void;
}

export const submitEmail: SubmitEmail = (args) => {
  const { apiUrl, lang, email, setControl, setErrors, emailInputInvalidError } =
    args;

  const validationArray = [
    validateEmail({
      value: email,
      errorMessage: emailInputInvalidError,
      setErrors,
    }),
  ];

  if (validationArray.find((el) => el)) {
    setControl({ connecting: false });
    return;
  }

  fetch(apiUrl + '/user/update/password/verification', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Lang: lang },
    body: JSON.stringify({ email }),
  })
    .then((response) => {
      if (response.ok) return response.json();

      throw new Error('Unknown server error.');
    })
    .then((verificationToken) => {
      setVerificationToken(verificationToken);
      setControl({ step: PasswordResetStep.VERIFICATION, connecting: false });
    })
    .catch(() => setControl({ connecting: false })); // TODO: Add Sentry!
};
