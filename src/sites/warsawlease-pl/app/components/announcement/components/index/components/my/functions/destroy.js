import API_URL from '../../../../../../../../shared/constants/urls/api.js'
import { getAccessToken } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function destroy(id) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const access_token = getAccessToken()
  fetch(`${API_URL}/announcements/${id}`, {
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