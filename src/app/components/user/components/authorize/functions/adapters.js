import { deleteCookie } from '../../../../../functions/cookie-handlers'

export function deauthorizeUser() {
  const {
    changeApp,
    resetAuthorizeData
  } = this.props

  deleteCookie('access_token')
  resetAuthorizeData({ authorized: false, name: null, phoneVerified: null })
  // TODO
  // CHANGE RENDER
}