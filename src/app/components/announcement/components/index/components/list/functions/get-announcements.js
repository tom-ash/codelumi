import { apiUrl } from '../../../../../../../constants/urls'
import { getTokens } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function getAnnouncements() {
  if (this.props.connecting) return
  this.props.changeControl({ connecting: true })
  this.props.changeData({ announcements: [] })
  const [UST, UAT] = getTokens()
  fetch(apiUrl + `/announcements?type=list&page=${this.props.page}`,
    {
      headers: {
        'Content-Type': 'application/json', UST, UAT,
        offices: this.props.switches.offices,
        usablePremises: this.props.switches.usablePremises,
        visible: this.props.switches.visible,
        hidden: this.props.switches.hidden,
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
    this.props.changeControl({ fetch: false, connecting: false })
    this.props.changeData({ amount: jsonResponse.amount, announcements: announcements })
  })
}