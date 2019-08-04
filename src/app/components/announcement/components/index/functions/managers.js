import { managerAgent } from 'managed-inputs'
import { currencies } from '../../../constants/currencies'
import { rooms } from '../../../constants/rooms'
import { floors } from '../../../constants/floors'

export function categoryManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select unit' },
    value: this.props.category,
    label: this.labelProvider('category'),
    options: this.buildSelectCategories(),
    onSelect: () => this.changeInput('category', option.value)
  })
}

export function districtManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select unit' },
    value: this.props.district,
    label: this.labelProvider('district'),
    options: this.buildSelectDistricts(),
    onSelect: () => this.changeInput('district', option.value)
  })
}

export function rentCurrencyManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select' },
    value: this.props.rentCurrency,
    label: this.labelProvider('rentCurrency'),
    options: currencies,
    onSelect: () => this.changeInput('rentCurrency', option.value)
  })
}

export function rentMinManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text' },
    value: this.props.rentMin,
    match: /^\d+$/,
    label: this.labelProvider('rentMin'),
    onChange: () => this.changeInput('rentMin', value)
  })
}

export function rentMaxManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text' },
    value: this.props.rentMax,
    match: /^\d+$/,
    label: this.labelProvider('rentMax'),
    onChange: () => this.changeInput('rentMax', value)
  })
}

export function availabilityDateManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text tablet-small-hidden phone-large-hidden' },
    value: this.props.availabilityDate,
    label: this.labelProvider('availabilityDate'),
    onFocus: () => this.props.changeControl({ availabilityDateFocus: true }),
    onBlur: () => {
      if (this.props.calendarHover) return
      this.props.changeControl({ availabilityDateFocus: false })
    },
    onChange: () => null
  })
}

export function areaMinManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text' },
    value: this.props.areaMin,
    match: /^\d+$/,
    label: this.labelProvider('areaMin'),
    onChange: () => this.changeInput('areaMin', value)
  })
}

export function areaMaxManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text' },
    value: this.props.areaMax,
    match: /^\d+$/,
    label: this.labelProvider('areaMax'),
    onChange: () => this.changeInput('areaMax', value)
  })
}

export function roomsMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select tablet-small-hidden phone-large-hidden' },
    value: this.props.roomsMin,
    label: this.labelProvider('roomsMin'),
    options: rooms,
    onSelect: () => this.changeInput('roomsMin', option.value)
  })
}

export function roomsMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select tablet-small-hidden phone-large-hidden' },
    value: this.props.roomsMax,
    label: this.labelProvider('roomsMax'),
    options: rooms,
    onSelect: () => this.changeInput('roomsMax', option.value)
  })
}

export function floorMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select tablet-small-hidden phone-large-hidden' },
    value: this.props.floorMin,
    label: this.labelProvider('floorMin'),
    options: floors,
    onSelect: () => this.changeInput('floorMin', option.value)
  })
}

export function floorMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select full-last tablet-small-hidden phone-large-hidden' },
    value: this.props.floorMax,
    label: this.labelProvider('floorMax'),
    options: floors,
    onSelect: () => this.changeInput('floorMax', option.value)
  })
}

export function totalFloorsMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select tablet-small-hidden phone-large-hidden' },
    value: this.props.totalFloorsMin,
    label: this.labelProvider('totalFloorsMin'),
    options: floors,
    onSelect: () => this.changeInput('totalFloorsMin', option.value)
  })
}

export function totalFloorsMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input select last tablet-small-hidden phone-large-hidden' },
    value: this.props.totalFloorsMax,
    label: this.labelProvider('totalFloorsMax'),
    options: floors,
    onSelect: () => this.changeInput('totalFloorsMax', option.value)
  })
}
