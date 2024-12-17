import React from 'react';
import { changeUrl } from '../../../../../../../../src copy/sites/shared/app/functions/routes/changers/change-url';
import { useApp } from '../../../../../../../../src copy/sites/shared/app/functions/store/use-app';
import { useLinks } from '../../../../../../../../src copy/sites/shared/app/functions/store/use-links';

export const Cookies = () => {
  const app = useApp();
  const lang = app.lang as Lang;
  const { href } = useLinks()['visitor/cookies-policy'];

  const changeRouteToCookiesPolicy = () => changeUrl({ href });

  const cookies = {
    pl: (
      <p>
        Korzystamy z plików cookies i&nbsp;podobnych technologii w celu
        zwiększania jakości usług, prowadzenia statystyki
        oraz&nbsp;dostosowywania treści marketingowych. Więcej informacji
        znajdziesz w{' '}
        <u onClick={changeRouteToCookiesPolicy}>Polityce Cookies</u>.
      </p>
    ),
    en: (
      <p>
        We use cookies and similar technologies to enhance the quality of
        services, maintain statistics and adjust marketing content. You will
        find more information in the{' '}
        <u onClick={changeRouteToCookiesPolicy}>Cookies Policy</u>.
      </p>
    ),
  };

  return <>{cookies[lang]}</>;
};
