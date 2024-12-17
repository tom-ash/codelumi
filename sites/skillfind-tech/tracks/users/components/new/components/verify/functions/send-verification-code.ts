import { saveCookie } from '../../../../../../../../src copy/sites/mapawynajmu-pl/app/functions/cookie-handlers';
import getCookieValue from '../../../../../../../../src copy/sites/shared/app/functions/cookies/getters/get-cookie-value';
import { changeUrl } from '../../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import API_URL from '../../../../../../../../src copy/sites/skillfind-tech/shared/constants/urls/api';

interface SendVerificationCode {
  (params: {
    lang: Lang;
    verificationCode: string;
    setErrors(params: { [key: string]: string }): void;
    setControl(params: { transferringVerificationCode: boolean }): void;
    error: string;
  }): void;
}

export const sendVerificationCode: SendVerificationCode = async (params) => {
  const { verificationCode, lang, setErrors, error, setControl } = params;

  setControl({ transferringVerificationCode: true });

  const verificationToken = getCookieValue('verificationToken');

  const response = await fetch(API_URL + '/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ verificationToken, verificationCode }),
  });

  if (response.status === 200) {
    const jsonResponse = await response.json();

    const { accessToken, href } = jsonResponse;

    saveCookie('access_token', accessToken, 'ninetyDays');

    changeUrl({ href });
  } else {
    setErrors({ verificationCode: error });
    setControl({ transferringVerificationCode: false });
  }
};
