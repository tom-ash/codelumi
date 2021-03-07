import API_URL from '../../../../../constants/urls'

export function getPhone() {
  if (this.props.phone.length > 7) return
  fetch(`${API_URL}/announcement/phone/${this.props.id}`, {
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => this.props.changeData({ phone: json.phone }))
}