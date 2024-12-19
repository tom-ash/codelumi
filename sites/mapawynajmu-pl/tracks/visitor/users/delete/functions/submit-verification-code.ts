import API_URL from '../../../../../../src copy/sites/mapawynajmu-pl/shared/constants/urls/api';
import { getAccessToken } from '../../../../../../../common/components/user/components/auth/functions/get-access-token';
import { signOut } from '../../auth/components/sign-out/functions/sign-out';
import getCookieValue from '../../../../../../src copy/sites/shared/app/functions/cookies/getters/get-cookie-value';

interface SubmitVerificationCode {
  (args: {
    lang: Lang;
    verificationCode: string;
    setControl: any; // TODO: TS!
    setErrors: any; // TODO: TS!
  }): void;
}

export const submitVerificationCode: SubmitVerificationCode = (args) => {
  const { lang, verificationCode, setControl, setErrors } = args;

  const verificationToken = getCookieValue('verificationToken');

  fetch(API_URL + '/user/delete', {
    method: 'DELETE',
    // @ts-ignore
    headers: {
      'Content-Type': 'application/json',
      'Access-Token': getAccessToken(),
      Lang: lang,
    },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
    .then((response) => {
      if (response.ok) return response.json();

      throw new Error('Invalid Verification Code Error');
    })
    .then((jsonResponse) => {
      const { href } = jsonResponse;

      signOut({ href });
    })
    .catch(() => {
      // TODO: SENTRY!
      setErrors({ verificationCode: true });
      setControl({ connecting: false });
    });
};
