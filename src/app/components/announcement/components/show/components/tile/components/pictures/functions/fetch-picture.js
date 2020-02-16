import { apiUrl } from '../../../../../../../../../constants/urls'

export function fetchPicture() {
  if (typeof window === 'undefined') return

  const {
    id,
    pictures
  } = this.props

  const {
    downloadedPictures,
    pictureIndex
  } = this.state

  const clonedDownloadedPictures = { ...downloadedPictures }
  
  if (clonedDownloadedPictures[pictureIndex]) return

  fetch(`${apiUrl}/pictures`, {
    headers: {
      'key': `announcements/${id}/${pictures[pictureIndex].database}`,
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    clonedDownloadedPictures[pictureIndex] = json.url

    this.setState({ downloadedPictures: clonedDownloadedPictures })
  })
}