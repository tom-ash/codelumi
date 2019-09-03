import { apiUrl } from '../../../../../../../constants/urls'
import { getTokens } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function destroy(id) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const [UST, UAT] = getTokens()
  fetch(`${apiUrl}/announcements/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', UST, UAT }
  })
  .then(() => {
    this.props.changeControl({ fetch: true, connecting: false, beingDeleted: null })
  })
}