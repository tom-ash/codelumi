import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { hashPassword } from '../../../../../../../functions/shared'
import { getAccessToken } from '../../../../../../../../../../../shared/app/components/user/components/auth/functions/get-access-token'
import {
  CURRENT_EMAIL_VERIFICATION_API_ROUTE_DATA,
  CURRENT_EMAIL_VERIFY_API_ROUTE_DATA,
  NEW_EMAIL_VERIFICATION_API_ROUTE_DATA,
  NEW_EMAIL_VERIFY_API_ROUTE_DATA,
  UPDATE_API_ROUTE_DATA,
} from '../constants/api_route_data'

import getCookieValue from '../../../../../../../../../../../shared/app/functions/cookies/getters/get-cookie-value'
import setVerificationToken from '../../../../../../../../../../../shared/app/functions/cookies/setters/confirmation-token'

export function sendCurrentEmailAddress() {
  const { setControl, connecting, lang, currentValue } = this.props

  if (connecting) return

  const { method, route } = CURRENT_EMAIL_VERIFICATION_API_ROUTE_DATA

  setControl({ emailConnecting: true })
  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken(), Lang: lang },
    body: JSON.stringify({ email: currentValue }),
  })
  .then(
    response => {
      if (response.ok) {
        return response.json()
      }

      throw new Error('Unknown server error.')
    },
    networkError => console.dir(networkError.message)
  )
  .then(verificationToken => {
    setVerificationToken(verificationToken)
    setControl({ emailStep: 'currentEmailVerification', emailConnecting: false })
  })
}

export function sendCurrentEmailVerification(verificationCode) {
  const { setControl, connecting } = this.props

  if (connecting) return

  const verificationToken = getCookieValue('verificationToken')
  const { method, route } = CURRENT_EMAIL_VERIFY_API_ROUTE_DATA

  setControl({ emailConnecting: true })
  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify({ verificationToken, verificationCode }),
  })
    .then(response => {
      if (response.ok) {
        return setControl({ emailStep: 'newEmail', emailConnecting: false })
      }

      throw new Error('SomethingWentWrong'),
      networkError => console.dir(networkError.message)
    })
}

export function sendNewEmail({ email, verificationToken, verificationCode }) {
  const { setControl, connecting, lang } = this.props

  if (connecting) return

  const { method, route } = NEW_EMAIL_VERIFICATION_API_ROUTE_DATA

  setControl({ emailConnecting: true })

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken(), Lang: lang },
    body: JSON.stringify({ email, verificationToken, verificationCode }),
  })
    .then(
      response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error('Unknown server error.')
      },
      networkError => console.dir(networkError.message)
    )
    .then(verificationToken => {
      setVerificationToken(verificationToken)
      setControl({ emailStep: 'newEmailVerification', emailConnecting: false })
    })
}

export function sendNewEmailVerification({ verificationCode, verificationToken}) {
  const { setControl, connecting } = this.props

  if (connecting) return

  const { method, route } = NEW_EMAIL_VERIFY_API_ROUTE_DATA

  setControl({ emailConnecting: true })
  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify({ verificationCode, verificationToken }),
  })
    .then(response => {
      if (response.ok) return setControl({ emailStep: 'password' })
      throw new Error('SomethingWentWrong')
    })
    .catch(error => console.dir(error))
    .finally(() => setControl({ emailConnecting: false }))
}

export function sendPassword(password) {
  const { currentValue: currentEmail, setControl, connecting } = this.props
  const currentEmailVerificationCode = document.getElementById('user-edit-email-current-verification').value
  const newEmail = document.getElementById('user-edit-email-new').value
  const newEmailVerificationCode = document.getElementById('user-edit-email-new-verification').value
  const currentClientHashedPassword = hashPassword(password, currentEmail)
  const newClientHashedPassword = hashPassword(password, newEmail)
  const verificationToken = getCookieValue('verificationToken')

  if (connecting) return

  setControl({ emailConnecting: true })

  const { method, route } = UPDATE_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify({
      currentEmailVerificationCode,
      newEmail,
      newEmailVerificationCode,
      currentClientHashedPassword,
      newClientHashedPassword,
      verificationToken,
    }),
  })
    .then(response => {
      if (response.ok) {
        this.props.setData({ email: newEmail })
        return this.props.setControl({ emailStep: 'success', emailStage: 'success' })
      }
      throw new Error('SomethingWentWrong')
    })
    .catch(error => console.dir(error))
    .finally(() => setControl({ emailConnecting: false }))
}
