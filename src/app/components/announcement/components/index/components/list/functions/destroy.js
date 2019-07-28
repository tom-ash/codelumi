import { apiUrl } from '../../../../../../../constants/urls'
import { getTokens } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function destroy(announcement, index) {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  const [UST, UAT] = getTokens()
  fetch(`${apiUrl}/announcements/${announcement.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', UST, UAT }
  })
  .then(response => {
    if (response.ok) this.getAnnouncements(true)
  })
}