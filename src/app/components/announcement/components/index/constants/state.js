import { switches } from '../components/panel/components/user/constants/switches'

export const control = {
  connecting: false,
  readParams: true,
  fetch: false,
  type: 'map',
  mapLoaded: false,
  deletedAnnouncement: null
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
  switches: parseSwitches(),
  sort: 'updatedesc',
}

function parseSwitches() {
  let switchChecbkoxes = {}
  switches.map(switchChecbkox => { switchChecbkoxes[switchChecbkox.ref] = true })
  return switchChecbkoxes
}
