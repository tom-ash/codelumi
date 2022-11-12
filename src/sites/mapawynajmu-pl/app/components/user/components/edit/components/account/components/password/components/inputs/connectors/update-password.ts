import API_URL from '../../../../../../../../../../../../shared/constants/urls/api'
import { hashPassword } from '../../../../../../../../../functions/shared'

const UPDATE_PASSWORD_URL = `${API_URL}/user/update/password`

interface UpdatePasswordProps {
  (props: {
    connecting: boolean
    email: string
    password: string
    verificationCode: string
    changeConnecting(newConnecting: boolean): void
    closeCell?(): void
  }): void
}

export const updatePassword: UpdatePasswordProps = props => {
  const {
    connecting,
    email,
    password,
    verificationCode,
    changeConnecting,
    closeCell,
  } = props

  if (connecting) return

  changeConnecting(true)

  const body = JSON.stringify({
    email,
    password: hashPassword(password, email),
    verificationCode
  })

  fetch(UPDATE_PASSWORD_URL, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body,
  }).then(response => {
    if (response.ok) {
      changeConnecting(false)
      closeCell && closeCell()
    } else {
      throw new Error('ServerError')
    }
  })
}
