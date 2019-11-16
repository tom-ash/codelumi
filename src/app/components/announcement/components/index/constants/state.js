import { switches } from '../components/list/constants/switches'

export const control = {
  connecting: false,
  readParams: true,
  fetch: false,
  type: 'map',
  page: '1',
  mapLoaded: false,
  drawPins: false,
  deletedAnnouncement: null,
  switches: parseSwitches()
}

export const data = {
  listAmount: null,
  amount: null,
  announcements: null,
  tile: {},
  pins: []
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
  switches: parseSwitches(), sort: 'updatedesc',
  sort: 'updatedesc'
}

function parseSwitches() {
  let switchChecbkoxes = {}
  switches.map(switchChecbkox => { switchChecbkoxes[switchChecbkox.ref] = true })
  return switchChecbkoxes
}
