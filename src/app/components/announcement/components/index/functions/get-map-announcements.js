import { apiUrl } from '../../../../../constants/urls'

export function getMapAnnouncements() {
  const { changeControl, changeData } = this.props
  fetch(apiUrl + `/announcements${this.buildRequestParameters()}`, {
    headers: {
      'Content-Type': 'application/json',
      'Only-Locations': true
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    changeData({
      amount: json.amount,
      announcements: json.announcements
    })
    changeControl({
      fetch: false,
      draw: true
    })
  })
}