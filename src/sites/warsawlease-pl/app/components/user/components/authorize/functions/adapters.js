import { deleteCookie } from '../../../../../functions/cookie-handlers'
import { USER_SHOW_TRACK } from '../../../../../../shared/constants/tracks/tracks'

export function deauthorizeUser() {
  const { resetAuthorizeData, changeRender } = this.props

  deleteCookie('access_token')
  resetAuthorizeData({ authorized: false, name: null })
  changeRender({ [USER_SHOW_TRACK]: false })
}
