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

    console.log(announcement)

    // area: null
    // availabilityDate: null
    // category: 7
    // floor: null
    // grossRentAmount: null
    // grossRentAmountPerSqm: null
    // id: 39
    // locality: "Warszawa"
    // netRentAmount: null
    // netRentAmountPerSqm: null
    // path: "39-przestrzen-coworkingowa-na-wynajem-warszawa-ochota"
    // pictures: Array(1)
    // 0: {database: '202209050704477338rV_nth_w0igjl_OWQ3Fzw.jpeg', description: ''}
    // length: 1
    // [[Prototype]]: Array(0)
    // rentCurrency: 0
    // rooms: null
    // show: true
    // sublocality: "Ochota"
    // title: "Przestrzeń coworkingowa do wynajęcia, Warszawa, Ochota"
    // totalFloors: null


    changeData({
      tile: announcement
    })
  })
}