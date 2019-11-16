import { apiUrl } from '../../../../../constants/urls'

export function fetchAnnouncements() {
  const {
    changeControl,
    changeData,
    connecting
  } = this.props
  
  if (connecting) return

  changeControl({ connecting: true, fetch: false })
  changeData({ amount: null, announcements: null })
  fetch(apiUrl + `/announcements${this.buildRequestParameters()}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const { amount } = json
    const announcements = json.announcements.map(announcement => {
      announcement.pictureIndex = 0
      announcement.showLoader = true
      return announcement
    })
    if (announcements && announcements[0]) announcements[0].show = true
    changeData({ amount, announcements })
    changeControl({ connecting: false, drawPins: true })
  })
}
