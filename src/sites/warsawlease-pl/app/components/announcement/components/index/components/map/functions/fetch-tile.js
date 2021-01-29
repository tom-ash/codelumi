import { apiUrl } from '../../../../../../../constants/urls'

export function fetchTile() {
  const {
    tileId,
    changeData
  } = this.props

  changeData({ tile: null })
  
  fetch(`${apiUrl}/announcements/${tileId}`, {
    headers: {
      'Content-Type': 'application/json',
      'Only-Tile': true
    },
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(json => {
    const announcement = { ...json }
    announcement.show = true
    changeData({
      tile: announcement
    })
  })
}