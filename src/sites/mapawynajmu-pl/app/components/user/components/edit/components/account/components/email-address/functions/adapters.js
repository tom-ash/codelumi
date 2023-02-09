import API_URL from '../../../../../../../../../../shared/constants/urls/api'
import { hashPassword } from '../../../../../../../functions/shared'
import getAccessToken from '../../../../../../auth/components/tokens/functions/get-tokens'
import {
  CURRENT_EMAIL_VERIFICATION_API_ROUTE_DATA,
  CURRENT_EMAIL_VERIFY_API_ROUTE_DATA,
  NEW_EMAIL_VERIFICATION_API_ROUTE_DATA,
  NEW_EMAIL_VERIFY_API_ROUTE_DATA,
  UPDATE_API_ROUTE_DATA,
} from '../constants/api_route_data'

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
    .then(response => {
      if (response.ok) return setControl({ emailStep: 'currentEmailVerification' })
      throw new Error('SomethingWentWrong')
    })
    .catch(error => console.dir(error))
    .finally(() => setControl({ emailConnecting: false }))
}

export function sendCurrentEmailVerification(verificationCode) {
  const { setControl, connecting } = this.props

  if (connecting) return

  const { method, route } = CURRENT_EMAIL_VERIFY_API_ROUTE_DATA

  setControl({ emailConnecting: true })
  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify({ verificationCode }),
  })
    .then(response => {
      if (response.ok) return setControl({ emailStep: 'newEmail' })
      throw new Error('SomethingWentWrong')
    })
    .catch(error => console.dir(error))
    .finally(() => setControl({ emailConnecting: false }))
}

export function sendNewEmail(email) {
  const { setControl, connecting, lang } = this.props

  if (connecting) return

  const { method, route } = NEW_EMAIL_VERIFICATION_API_ROUTE_DATA

  setControl({ emailConnecting: true })
  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken(), Lang: lang },
    body: JSON.stringify({ email }),
  })
    .then(response => {
      if (response.ok) return setControl({ emailStep: 'newEmailVerification' })
      throw new Error('SomethingWentWrong')
    })
    .catch(error => console.dir(error))
    .finally(() => setControl({ emailConnecting: false }))
}

export function sendNewEmailVerification(verificationCode) {
  const { setControl, connecting } = this.props

  if (connecting) return

  const email = document.getElementById('user-edit-email-new').value
  const { method, route } = NEW_EMAIL_VERIFY_API_ROUTE_DATA

  setControl({ emailConnecting: true })
  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify({ verificationCode }),
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
  const clientHashedPassword = hashPassword(password, currentEmail)
  const clientRehashedPassword = hashPassword(password, newEmail)

  if (connecting) return

  setControl({ emailConnecting: true })

  const { method, route } = UPDATE_API_ROUTE_DATA

  fetch(API_URL + route, {
    method,
    headers: { 'Content-Type': 'application/json', 'Access-Token': getAccessToken() },
    body: JSON.stringify({
      currentEmail,
      currentEmailVerificationCode,
      newEmail,
      newEmailVerificationCode,
      clientHashedPassword,
      clientRehashedPassword,
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
