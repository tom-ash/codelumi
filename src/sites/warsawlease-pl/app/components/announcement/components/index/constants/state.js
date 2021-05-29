export const control = {
  connecting: false,
  readParams: true,
  fetch: true,
  type: 'map',
  mapLoaded: false,
  deletedAnnouncement: null,
  loadMap: false,
  loadPins: false,
  loadTile: false,
  miniListFarthestScrollTop: 0,
  miniListFarthestScrollLeft: 0,
  indexFullFarthestScrollTop: 0
}

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
  district: '',
  rentCurrency: '',
  rentMin: '',
  rentMax: '',
  areaMin: '',
  areaMax: '',
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
