import { apiUrl } from '../../../../../../../constants/urls'

export function fetchTile() {
  fetch(`${apiUrl}/announcements/${this.props.tile.id}`, {
    headers: { 'Content-Type': 'application/json', 'Only-Tile': true },
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(jsonResponse => {
    const announcement = { ...jsonResponse }
    announcement.show = true
    announcement.pictureIndex = 0
    this.props.changeData({ tile: announcement })
  })
}