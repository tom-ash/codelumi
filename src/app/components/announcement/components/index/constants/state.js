import { switches } from '../components/list/constants/switches'

const extendedInputs = {
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
  availabilityDate: ''
}

function parseSwitches() {
  let switchChecbkoxes = {}
  switches.map(switchChecbkox => { switchChecbkoxes[switchChecbkox.ref] = true })
  return switchChecbkoxes
}

export const fullControl = {
  connecting: false,
  readParams: true,
  fetchAmount: false,
  fetchList: false,
  showList: false,
  page: '1',
  changed: false,
  paramsRead: false,
  areaActive: false,
  rentActive: false,
  roomsActive: false,
  floorActive: false,
  availabilityDateFocus: false,
  totalFloorsActive: false
}

export const fullInputs = {
  ...extendedInputs
}

export const fullData = {
  panelAmount: null,
  listAmount: null,
  announcements: null
}

export const mapControl = {
  loaded: false,
  fetch: false,
  draw: false,
  availabilityDateFocus: false,
  rentActive: false,
  areaActive: false,
  roomsActive: false,
  floorActive: false,
  totalFloorsActive: false,
}

export const mapData = {
  announcements: [],
  pins: [],
  tile: {}
}

export const mapInputs = {
  ...extendedInputs
}

export const listControl = {
  fetch: true,
  page: 1,
  beingDeleted: null
}

export const listInputs = {
  switches: parseSwitches(), sort: 'updatedesc'
}

export const listData = {
  amount: null,
  announcements: null
}
