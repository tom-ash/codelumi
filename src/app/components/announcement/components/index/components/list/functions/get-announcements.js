import { apiUrl } from '../../../../../../../constants/urls'
import { getUserToken } from '../../../../../../user/components/authorize/components/tokens/functions/get-tokens'

export function getAnnouncements() {
  const { connecting, changeControl, changeData } = this.props
  if (connecting) return
  changeControl({ connecting: true })
  changeData({ announcements: [] })
  const uT = getUserToken()
  fetch(apiUrl + `/announcements?type=list&page=${this.props.page}`,
    {
      headers: {
        'Content-Type': 'application/json',
        uT,
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
  .then(json => {
    const announcements = json.announcements.map(announcement => {
      announcement.pictureIndex = 0
      return announcement
    })
    changeControl({
      fetch: false,
      connecting: false
    })
    changeData({
      amount: json.amount,
      announcements: announcements
    })
  })
}