import { apiUrl } from '../../../../../constants/urls'

export function getAnnouncements() {
  console.log('getAnnouncements')
  this.props.changeControl({ connecting: true })
  this.props.changeData({ amount: null, announcements: null })
  if (this.props.connecting) return
  fetch(apiUrl + `/announcements${this.buildRequestParameters()}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonRes => {
    const announcements = jsonRes.announcements.map(announcement => {
      announcement.pictureIndex = 0
      return announcement
    })
    this.props.changeData({ panelAmount: jsonRes.amount, amount: jsonRes.amount, announcements: announcements })
    this.props.changeControl({ connecting: false, fetch: false, changed: false })
  })
}