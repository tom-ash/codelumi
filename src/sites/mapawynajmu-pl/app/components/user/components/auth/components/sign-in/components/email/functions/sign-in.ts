import { hashPassword } from '../../../../../../../../../../../shared/app/components/user/functions/hash-password'
import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { saveCookie } from '../../../../../../../../../functions/cookie-handlers'
import { changeUrl } from '../../../../../../../../../../../shared/app/functions/routes/changers/change-url'

interface SignIn {
  (args: {
    lang: Lang
    email: string
    password: string
    href: string
    setControl: any // TODO
    setErrors: any // TODO
  }): void
}

export const signIn: SignIn = args => {
  const { lang, email, password, href, setControl, setErrors } = args

  const hashedPassword = hashPassword(password, email)

  fetch(API_URL + '/user/authorize/email-and-password', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ email, password: hashedPassword }),
  })
    .then(response => {
      if (response.status == 200) return response.json()

      throw new Error('InvalidCredentials')
    })
    .then(accessToken => {
      saveCookie('access_token', accessToken, 'ninetyDays')

      if (typeof window !== 'undefined') {
        // TODO: Investigate better solution.
        // @ts-ignore
        window.areListingsObsolete = true
      }

      changeUrl({ href })
    })
    .catch(() => {
      setErrors({ credentials: true })
      setControl({ connecting: false })
    })
}
