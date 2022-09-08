export const control = {
  connecting: false,
  readParams: true,
  type: 'map',
  mapLoaded: false,
  deletedAnnouncement: null,
  loadMap: false,
  loadPins: false,
  loadTile: false,
  miniListFarthestScrollTop: 0,
  miniListFarthestScrollLeft: 0,
  indexFullFarthestScrollTop: 0,
  showArea: false,
  rebuildQueryParams: false
}

// const tile = {
//   area: 58.2,
//   availabilityDate: null,
//   category: 7,
//   floor: null,
//   grossRentAmount: 2300,
//   grossRentAmountPerSqm: 39.51,
//   id: 29,
//   locality: "Warszawa",
//   netRentAmount: null,
//   netRentAmountPerSqm: null,
//   path: "39-przestrzen-coworkingowa-na-wynajem-warszawa-ochota",
//   pictures: [{ database: '20220320142047725oWSkWcommOF8-tB6FavuOQ.jpeg', description: '' }],
//   rentCurrency: 0,
//   rooms: null,
//   show: true,
//   sublocality: "Ochota",
//   title: "Przestrzeń coworkingowa do wynajęcia, Warszawa, Ochota",
//   totalFloors: null
// }

export const data = {
  amount: null,
  announcements: null,
  tileId: null,
  tile: null,
  pins: null,
  apartmentsAmount: 0,
  housesAmount: 0,
  roomsAmount: 0,
  parkingSpacesAmount: 0,
  usablePremisesAmount: 0,
  officesAmount: 0,
  virtualOfficesAmount: 0,
  coworkingAmount: 0,
  currentCategory: null
}



export const inputs = {
  category: '',
  rentCurrency: '',
  rentMin: '',
  rentMax: '',
  areaMin: '',
  areaMinInput: '',
  areaMax: '',
  areaMaxInput: '',
  roomsMin: '',
  roomsMax: '',
  floorMin: '',
  floorMax: '',
  totalFloorsMin: '',
  totalFloorsMax: '',
  availabilityDate: '',
  offset: 0,
  sort: 'updatedesc',
}

function parseSwitches() {
  let switchChecbkoxes = {}
  switches.map(switchChecbkox => { switchChecbkoxes[switchChecbkox.ref] = true })
  return switchChecbkoxes
}
