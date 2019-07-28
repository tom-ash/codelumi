import { apiUrl } from '../../../../../../../constants/urls'
import { getTokens } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function getAnnouncements(afterDestroy) {
  if (this.props.connecting && !afterDestroy) return
  this.props.changeControl({ connecting: true })
  this.props.changeData({ announcements: [] })
  const [UST, UAT] = getTokens()
  fetch(apiUrl + `/announcements?type=list&page=${this.props.page}`,
    {
      headers: {
        'Content-Type': 'application/json', UST, UAT,
        offices: this.props.switches.offices, usablePremises: this.props.switches.usablePremises,
        active: this.props.switches.active, inactive: this.props.switches.inactive,
        sort: this.props.sort
      }
    }
  )
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    const announcements = jsonResponse.announcements.map(announcement => {
      announcement.pictureIndex = 0
      return announcement
    })
    this.props.changeControl({ fetched: true, connecting: false })
    this.props.changeData({ amount: jsonResponse.amount, announcements: announcements })
  })
}