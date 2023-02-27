import setCookie from './cookie'

function setVerificationToken(verificationToken) {
  setCookie('verificationToken', verificationToken, 'oneDay')
}

export default setVerificationToken
