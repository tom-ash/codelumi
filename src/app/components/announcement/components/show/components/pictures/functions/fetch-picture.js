import { apiUrl } from '../../../../../../../constants/urls'

export function fetchPicture() {
  if (this.props.pictures[this.props.pictureIndex] && this.props.pictures[this.props.pictureIndex].url) return
  fetch(`${apiUrl}/pictures`, {
    headers: {
      'key': `announcements/${this.props.id}/${this.props.pictures[this.props.pictureIndex].database}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const pictures =  [ ...this.props.pictures ]
    pictures[this.props.pictureIndex].url = json.url
    this.props.changeData({ pictures: pictures })
  })
}