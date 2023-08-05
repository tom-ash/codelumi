import API_URL from '../../../../../../../../../mapawynajmu-pl/shared/constants/urls/api'
import getCookieValue from '../../../../../../../functions/cookies/getters/get-cookie-value'
import { saveCookie } from '../../../../../../../../../mapawynajmu-pl/app/functions/cookie-handlers'
import { changeUrl } from '../../../../../../../functions/routes/changers/change-url'
import { verificationCodeValidator } from '../components/verification-code/verification-code.validator'

interface Verify {
  (args: { lang: Lang; verificationCode: string; setControl(args: object): void; setErrors(args: object): void }): void
}

export const verify: Verify = args => {
  const { lang, verificationCode, setControl, setErrors } = args

  setControl({ connecting: true })

  if (!verificationCodeValidator({ verificationCode, setErrors })) return setControl({ connecting: false })

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

      if (href.indexOf('mapawynajmu') !== -1) {
        return changeUrl({ href })
      }

      // TODO: Find better solution.
      location.href = href
    })
    .catch(() => setErrors({ verificationCode: true }))
    .finally(() => setControl({ connecting: false }))
}
