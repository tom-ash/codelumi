import * as tracks from '../../../../shared/constants/tracks/tracks.js'

export const categories = [
  {
    name: 'apartments',
    number: 2,
    value: 2,
    label: { pl: 'Mieszkanie', en: 'Apartment' },
    url: { pl: 'mieszkanie', en: 'apartment' },
    pin: {
      class: 'apartment',
      svg: 'apartment',
      color: '#1E8449'
    },
    track: tracks.ANNOUNCEMENT_INDEX_MAP_APARTMENTS_TRACK
  },
  {
    name: 'houses',
    number: 3,
    value: 3,
    label: { pl: 'Dom', en: 'House' },
    url: { pl: 'dom', en: 'house' },
    pin: {
      class: 'house',
      svg: 'house',
      color: '#0E6655'
    },
    track: tracks.ANNOUNCEMENT_INDEX_MAP_HOUSES_TRACK
  },
  {
    name: 'rooms',
    number: 4,
    value: 4,
    label: { pl: 'Pokój', en: 'Room' },
    url: { pl: 'pokoj', en: 'room' },
    pin: {
      class: 'room',
      svg: 'room',
      color: '#28B463'
    }
    ,
    track: tracks.ANNOUNCEMENT_INDEX_MAP_ROOMS_TRACK
  },
  {
    name: 'parkingSpaces',
    number: 5,
    value: 5,
    label: { pl: 'Miejsce postojowe', en: 'Parking Space' },
    url: { pl: 'miejsce-postojowe', en: 'parking-space' },
    pin: {
      class: 'parking-space',
      svg: 'parkingSpace',
      color: '#34495E'
    },
    track: tracks.ANNOUNCEMENT_INDEX_MAP_PARKING_SPACES_TRACK
  },
  {
    name: 'usablePremises',
    number: 1,
    value: 1,
    label: { pl: 'Lokal użytkowy', en: 'Usable Premises' },
    url: { pl: 'lokal-uzytkowy', en: 'usable-premises' },
    pin: {
      class: 'usable-premises',
      svg: 'usablePremises',
      color: '#D35400'
    },
    track: tracks.ANNOUNCEMENT_INDEX_MAP_USABLE_PREMISES_TRACK
  },
  {
    name: 'offices',
    number: 0,
    value: 0,
    label: { pl: 'Biuro', en: 'Office' },
    url: { pl: 'biuro', en: 'office' },
    pin: {
      class: 'office',
      svg: 'office',
      color: '#3498DB'
    },
    track: tracks.ANNOUNCEMENT_INDEX_MAP_OFFICES_TRACK
  },
  {
    name: 'virtualOffices',
    number: 6,
    value: 6,
    label: { pl: 'Biuro wirtualne', en: 'Virtual Office' },
    url: { pl: 'biuro-wirtualne', en: 'virtual-office' },
    pin: {
      class: 'virtual-office',
      svg: 'virtualOffice',
      color: '#7D3C98'
    },
    track: tracks.ANNOUNCEMENT_INDEX_MAP_VIRTUAL_OFFICES_TRACK
  },
  {
    name: 'coworking',
    number: 7,
    value: 7,
    label: { pl: 'Coworking', en: 'Coworking' },
    url: { pl: 'Coworking', en: 'Coworking' },
    pin: {
      class: 'coworking-space',
      svg: 'coworkingSpace',
      color: '#4A235A'
    },
    track: tracks.ANNOUNCEMENT_INDEX_MAP_COWORKING_TRACK
  }
]
