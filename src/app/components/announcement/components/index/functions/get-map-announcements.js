import { apiUrl } from '../../../../../constants/urls'

export function getMapAnnouncements() {
  fetch(apiUrl + `/announcements${this.buildRequestParameters()}`, {
    headers: { 'Content-Type': 'application/json', 'Only-Locations': true }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    this.props.changeData({ amount: jsonResponse.amount, announcements: jsonResponse.announcements })
    this.props.changeControl({ fetch: false, draw: true })
  })
}