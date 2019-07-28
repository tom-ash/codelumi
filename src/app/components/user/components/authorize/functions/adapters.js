import { deleteCookie } from '../../../../../functions/cookie-handlers'

export function deauthorizeUser() {
  deleteCookie('UST')
  deleteCookie('UAT')
  this.props.resetAuthorizeData({ authorized: false, name: null, phoneVerified: null })
  this.changeRoute(null, 'signIn')
}