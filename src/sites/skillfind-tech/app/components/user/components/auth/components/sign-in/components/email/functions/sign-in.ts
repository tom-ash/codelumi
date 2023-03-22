import { hashPassword } from '../../../../../../../../../../../shared/app/components/user/functions/hash-password'
import API_URL from '../../../../../../../../../../shared/constants/urls/api'

// TODO!
import { saveCookie } from '../../../../../../../../../../../mapawynajmu-pl/app/functions/cookie-handlers'
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
  const { lang, email, password, setControl, setErrors } = args

  const hashedPassword = hashPassword(password, email)

  fetch(API_URL + '/users/auth', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Lang: lang,
    },
    body: JSON.stringify({ email, password: hashedPassword }),
  })
    .then(response => {
      if (response.ok) return response.json()

      throw new Error('InvalidCredentials')
    })
    .then(jsonResponse => {
      const {
        accessToken,
        href,
      } = jsonResponse

      saveCookie('access_token', accessToken, 'oneYear')

      changeUrl({ href })
    })
    .catch(() => {
      setErrors({ credentials: true })
      setControl({ connecting: false })
    })
}
