import API_URL from '../../../../../../../../../../../../shared/constants/urls/api'
import { hashPassword } from '../../../../../../../../../functions/shared'
import { validatePassword } from '../../../../../../../../../common/validators/validate-password'
import getCookieValue from '../../../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value'

const UPDATE_PASSWORD_URL = `${API_URL}/user/update/password`

interface UpdatePasswordProps {
  (props: {
    connecting: boolean
    email: string
    password: string
    verificationCode: string
    setConnecting(newConnecting: boolean): void
    setPasswordError(props: LangObject): void
    closeCell(): void
  }): void
}

export const updatePassword: UpdatePasswordProps = props => {
  const { connecting, email, password, verificationCode, setConnecting, setPasswordError, closeCell } = props

  if (connecting) return
  if (!validatePassword({ password, setPasswordError })) return

  setConnecting(true)

  const verificationToken = getCookieValue('verificationToken')

  const body = JSON.stringify({
    email,
    password: hashPassword(password, email),
    verificationCode,
    verificationToken,
  })

  fetch(UPDATE_PASSWORD_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body,
  }).then(response => {
    if (response.ok) {
      setConnecting(false)
      closeCell()
    } else {
      throw new Error('ServerError')
    }
  })
}
