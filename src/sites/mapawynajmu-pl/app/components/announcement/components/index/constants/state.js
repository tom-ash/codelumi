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
//   availabilityDate: '2023-01-01',
//   category: 7,
//   floor: 3,
//   grossRentAmount: 2300,
//   grossRentAmountPerSqm: 39.51,
//   id: 29,
//   locality: "Warszawa",
//   netRentAmount: null,
//   netRentAmountPerSqm: null,
//   path: "39-przestrzen-coworkingowa-na-wynajem-warszawa-ochota",
//   pictures: [{ database: '20220320142047725oWSkWcommOF8-tB6FavuOQ.jpeg', description: '' }],
//   rentCurrency: 0,
//   rooms: 3,
//   show: true,
//   sublocality: "Ochota",
//   title: "Przestrzeń coworkingowa do wynajęcia, Warszawa, Ochota",
//   totalFloors: 5,
//   description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
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
