import { deleteCookie } from '../../../../../functions/cookie-handlers'

export function deauthorizeUser() {
  const { resetAuthorizeData } = this.props

  deleteCookie('access_token')
  resetAuthorizeData({ authorized: false, name: null })
  'TODO'
}
