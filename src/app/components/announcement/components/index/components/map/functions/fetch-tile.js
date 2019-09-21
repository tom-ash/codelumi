import { apiUrl } from '../../../../../../../constants/urls'

export function fetchTile() {
  const { tile, changeData } = this.props
  if (!tile.id) return
  fetch(`${apiUrl}/announcements/${tile.id}`, {
    headers: { 'Content-Type': 'application/json', 'Only-Tile': true },
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    const announcement = { ...jsonResponse }
    announcement.show = true
    announcement.pictureIndex = 0
    changeData({ tile: announcement })
  })
}