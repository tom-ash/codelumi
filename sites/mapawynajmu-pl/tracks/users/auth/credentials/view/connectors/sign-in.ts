import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {
  SetControl,
  SetErrors,
} from '../../../../../../../../lib/types/setters';
import { hashPassword } from '../../../../../../../common/components/user/functions/hash-password';
import { saveCookie } from '../../../../../common/helpers/cookie-handlers';
import { Lang } from '../../../../../common/types/lang';

interface SignInParams {
  lang: Lang;
  email: string;
  password: string;
  router: AppRouterInstance;
  setControl: SetControl;
  setErrors: SetErrors;
}

export const signIn = (params: SignInParams): void => {
  const { lang, email, password, setControl, setErrors, router } = params;
  const hashedPassword = hashPassword(password, email);

  fetch(
    process.env.NEXT_PUBLIC_MAPAWYNAJMU_PL_API_URL! +
      '/user/auth/email-and-password',
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Lang: lang,
      },
      body: JSON.stringify({ email, password: hashedPassword }),
    },
  )
    .then((response) => {
      if (response.status == 200) return response.json();

      throw new Error('InvalidCredentials');
    })
    .then((jsonResponse) => {
      const { accessToken, href } = jsonResponse;

      saveCookie('access_token', accessToken, 'ninetyDays');

      // window.areListingsObsolete = true; ????

      router.push(href);
    })
    .catch(() => {
      setErrors({ credentials: true });
      setControl({ connecting: false });
    });
};
