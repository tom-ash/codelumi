import setCookie from './cookie'

function setConfirmationTokenCookie(confirmation_token) {
  setCookie('confirmation_token', confirmation_token, 'oneDay')
}

export default setConfirmationTokenCookie
