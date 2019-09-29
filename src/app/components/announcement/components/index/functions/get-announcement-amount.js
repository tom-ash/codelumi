import { apiUrl } from '../../../../../constants/urls'

export function getAnnouncementAmount() {
  const { changeControl, changeData } = this.props
  fetch(apiUrl + `/announcements${this.buildRequestParameters()}`, {
    headers: {
      'Content-Type': 'application/json',
      'Only-Amount': true
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    changeControl({ fetchAmount: false })
    changeData({ panelAmount: jsonResponse.amount })
  })
}