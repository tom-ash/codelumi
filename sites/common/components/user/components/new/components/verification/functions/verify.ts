import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { saveCookie } from '../../../../../../../../mapawynajmu-pl/tracks/common/helpers/cookie-handlers';
import { getCookieValue } from '../../../../../../../helpers/cookies/getters/get-cookie-value';
import { verificationCodeValidator } from '../components/verification-code/verification-code.validator';

interface VerifyProps {
  lang: string;
  apiUrl: string;
  verificationCode: string;
  router: AppRouterInstance;
  setControl(params: object): void;
  setErrors(params: object): void;
}

export const verify = (params: VerifyProps): void => {
  const { lang, apiUrl, verificationCode, router, setControl, setErrors } =
    params;

  setControl({ connecting: true });

  if (!verificationCodeValidator({ verificationCode, setErrors }))
    return setControl({ connecting: false });

  const verificationToken = getCookieValue('verificationToken');

  fetch(apiUrl + '/user/create/email-and-password', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
    .then((response) => {
      if (response.status == 200) return response.json();

      throw new Error('SomethingWentWrong');
    })
    .then((json) => {
      const { accessToken, href } = json;

      saveCookie('access_token', accessToken, 'ninetyDays');

      router.push(href);
    })
    .catch(() => setErrors({ verificationCode: true }))
    .finally(() => setControl({ connecting: false }));
};
