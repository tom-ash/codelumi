import { apiUrl } from '../../../../../constants/urls'

export function getPhone() {
  if (this.props.phone.length > 7) return
  fetch(`${apiUrl}/announcement/phone/${this.props.id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => this.props.changeData({ phone: jsonResponse.phone }))
}