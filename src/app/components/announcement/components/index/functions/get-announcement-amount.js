import { apiUrl } from '../../../../../constants/urls'

export function getAnnouncementAmount() {
  fetch(apiUrl + `/announcements${this.buildRequestParameters()}`, {
    headers: { 'Content-Type': 'application/json', 'Only-Amount': true }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    this.props.changeControl({ fetchAmount: false })
    this.props.changeData({ panelAmount: jsonResponse.amount })
  })
}