import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { getCookieValue } from '../../../../../../../../../../../shared/app/components/visitor/components/legal/components/cookies/functions/save'
import { hashPassword } from '../../../../../../../functions/shared'
import { PasswordResetStep } from '../password-reset.types'

interface SubmitPassword {
  (args: {
    email: string
    verificationCode: string
    password: string
    setControl: any // TODO: TS!
  }): void
}

export const submitPassword:SubmitPassword = (args) => {
    const {
      email,
      verificationCode,
      password,
      setControl,
    } = args

    console.log("HERE")
    console.log(password)
    console.log(email)

    const verificationToken = getCookieValue('verificationToken')
    const hashedPassword = hashPassword(password, email)

    fetch(API_URL + '/user/update/password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ verificationToken, verificationCode, password: hashedPassword }),
    })
      .then(response => {
        if (response.status == 200) {
          return setControl({ step: PasswordResetStep.SUCCESS })
        }

        throw new Error('ServerError')
      })
      .catch(() => setControl({ connecting: false })) // TODO: Add Sentry!
  }
  