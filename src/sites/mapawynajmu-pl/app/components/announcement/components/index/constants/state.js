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
  rebuildQueryParams: false,
  hoveredTileId: null,
  currentTileId: null,
  reloadPins: false,
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
