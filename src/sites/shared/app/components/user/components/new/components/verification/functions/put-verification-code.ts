import API_URL from '../../../../../../../../../mapawynajmu-pl/shared/constants/urls/api'
// import { saveTokens } from '../../../../../../../functions/token-handlers'
import getCookieValue from '../../../../../../../functions/cookies/getters/get-cookie-value'
import { saveCookie } from '../../../../../../../../../mapawynajmu-pl/app/functions/cookie-handlers'
import { changeUrl } from '../../../../../../../functions/routes/changers/route-generic'

interface PutVerificationCode {
  (args: {
    lang: Lang
    verificationCode: string
    setControl(args: object): void
    setErrors(args: object): void
  }): void
}

export const putVerificationCode: PutVerificationCode = (args) => {
  const {
    lang,
    verificationCode,
    setControl,
    setErrors,
  } = args

  const verificationToken = getCookieValue('verificationToken')

  fetch(API_URL + '/user/create/email-and-password', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
  .then(response => {
    if (response.status == 200) return response.json()

    throw new Error('SomethingWentWrong')
  })
  .then(json => {
    const { accessToken, href } = json

    saveCookie('access_token', accessToken, 'ninetyDays')
    changeUrl({ href })
  })
  .catch(() =>
    setErrors({ verificationCode: true })
  )
  .finally(() => setControl({ connecting: false }))
}
