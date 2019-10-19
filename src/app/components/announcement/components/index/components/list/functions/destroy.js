import { apiUrl } from '../../../../../../../constants/urls'
import { getUserToken } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function destroy(id) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const uT = getUserToken()
  fetch(`${apiUrl}/announcements/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      uT
    }
  })
  .then(() => {
    this.props.changeControl({ fetch: true, connecting: false, beingDeleted: null })
  })
}