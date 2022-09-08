import API_URL from '../../../../../../../../shared/constants/urls/api.js'
import { GET_TILE_API_ROUTE } from '../constants/api_route_data.js'

export function fetchTile() {
  const { lang, tileId, changeData } = this.props
  const { method, route } = GET_TILE_API_ROUTE

  changeData({ tile: null })
  
  fetch(`${API_URL}/${route}/${tileId}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Only-Tile': true,
      'Lang': lang
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