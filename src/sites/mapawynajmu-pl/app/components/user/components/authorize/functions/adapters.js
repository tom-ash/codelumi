import { deleteCookie } from '../../../../../functions/cookie-handlers'
import { buildUrl } from '../../../../../../shared/functions/builders/url'

export function deauthorizeUser(props) {
  const { dispatch, changeRoute } = props

  deleteCookie('access_token')
  dispatch({ type: 'user/authorize/data/reset' })
  changeRoute({ href: buildUrl({ path: '' }) })
}
