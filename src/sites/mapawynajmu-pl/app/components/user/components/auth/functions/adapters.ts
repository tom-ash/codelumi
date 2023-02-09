import { deleteCookie } from '../../../../../functions/cookie-handlers'
import { buildUrl } from '../../../../../../shared/functions/builders/url'

// @ts-ignore
export function deauthorizeUser(props) {
  const { dispatch, changeRoute } = props

  if (typeof window !== 'undefined') {
    // TODO: Investigate better solution.
    // @ts-ignore
    window.areListingsObsolete = true
  }

  deleteCookie('access_token')
  dispatch({ type: 'user', value: { accountType: null, name: null, authorized: false } })
  changeRoute({ href: buildUrl({ path: '' }) })
}
