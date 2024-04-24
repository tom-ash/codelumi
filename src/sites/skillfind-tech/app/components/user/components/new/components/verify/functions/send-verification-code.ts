import { saveCookie } from "../../../../../../../../../mapawynajmu-pl/app/functions/cookie-handlers";
import getCookieValue from "../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value"
import { changeUrl } from "../../../../../../../../../shared/app/functions/routes/changers/change-url";
import API_URL from '../../../../../../../../shared/constants/urls/api';

interface SendVerificationCode {
  (params: {
    lang: Lang;
    verificationCode: string;
  }): void
}

export const sendVerificationCode: SendVerificationCode = async (params) => {
  const { verificationCode, lang } = params
  const verificationToken = getCookieValue('verificationToken')

  const response = await fetch(API_URL + '/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })

  if (response.status === 200) {
    const jsonResponse = await response.json()

    const {
      accessToken,
      href,
    } = jsonResponse

    saveCookie('access_token', accessToken, 'ninetyDays')

    changeUrl({ href })
  }
}
