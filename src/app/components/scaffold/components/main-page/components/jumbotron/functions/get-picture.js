import { apiUrl } from '../../../../../../../constants/urls'

export function getPicture() {
  if (this.props.jumbotronPicture) return
  fetch(`${apiUrl}/pictures`, {
    headers: { 'key': `assets/warsaw_vistula_01.jpg`, 'Content-Type': 'application/json' }
  })
  .then(response => { if (response.ok) return response.json() })
  .then(jsonResponse => this.props.changeMainPage({ jumbotronPicture: jsonResponse.url }))
}