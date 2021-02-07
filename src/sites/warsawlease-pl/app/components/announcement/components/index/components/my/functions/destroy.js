import { apiUrl } from '../../../../../../../constants/urls'
import { getAccessToken } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function destroy(id) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const access_token = getAccessToken()
  fetch(`${apiUrl}/announcements/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      access_token
    }
  })
  .then(() => {
    this.props.changeControl({ fetch: true, connecting: false, beingDeleted: null })
  })
}