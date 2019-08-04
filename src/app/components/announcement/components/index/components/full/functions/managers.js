import { managerAgent } from 'managed-inputs'
import { scrollToElement } from '../../../../../../../functions/scroll-to-element'
import { currencies } from '../../../../../constants/currencies'
import { rentOptions } from '../../../constants/rent-options'
import { areaOptions } from '../../../constants/area-options'
import { rooms } from '../../../../../constants/rooms'
import { floors } from '../../../../../constants/floors'

export function rentManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: `index-input text rent${this.props.rentActive ? ' active' : ''}` },
    value: this.groupInputJoiner('rent'),
    label: this.labelProvider('rent'),
    onFocus: () => this.props.changeControl({ rentActive: true })
  })
}

export function rentMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select rent' },
    value: this.props.rentMin,
    label: this.languageHandler('Od', 'From'),
    options: rentOptions,
    onSelect: () => this.changeInput('rentMin', option.value)
  })
}

export function rentMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select rent' },
    value: this.props.rentMax,
    label: this.languageHandler('Do', 'To'),
    options: rentOptions,
    onSelect: () => this.changeInput('rentMax', option.value)
  })
}

export function rentCurrencyManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select rent last' },
    value: this.props.rentCurrency,
    label: this.languageHandler('Waluta', 'Currency'),
    options: currencies,
    onSelect: () => this.changeInput('rentCurrency', option.value)
  })
}

export function areaManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text rent' },
    value: this.groupInputJoiner('area'),
    label: this.labelProvider('area'),
    onFocus: () => this.props.changeControl({ areaActive: true })
  })
}

export function areaMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select' },
    value: this.props.areaMin,
    label: this.languageHandler('Od', 'From'),
    options: areaOptions,
    onSelect: () => this.changeInput('areaMin', option.value)
  })
}

export function areaMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select last' },
    value: this.props.areaMax,
    label: this.languageHandler('Do', 'To'),
    options: areaOptions,
    onSelect: () => this.changeInput('areaMax', option.value)
  })
}

export function roomsManager(aspect) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text' },
    value: this.groupInputJoiner('rooms'),
    label: this.labelProvider('rooms'),
    onFocus: () => this.props.changeControl({ roomsActive: true })
  })
}

export function roomsMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select' },
    value: this.props.roomsMin,
    label: this.languageHandler('Od', 'From'),
    options: rooms,
    onSelect: () => this.changeInput('roomsMin', option.value)
  })
}

export function roomsMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select last' },
    value: this.props.roomsMax,
    label: this.languageHandler('Do', 'To'),
    options: rooms,
    onSelect: () => this.changeInput('roomsMax', option.value)
  })
}

export function floorManager(aspect) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text' },
    value: this.groupInputJoiner('floor'),
    label: this.labelProvider('floor'),
    onFocus: () => this.props.changeControl({ floorActive: true })
  })
}

export function floorMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select' },
    value: this.props.floorMin,
    label: this.languageHandler('Od', 'From'),
    options: floors,
    onSelect: () => this.changeInput('floorMin', option.value)
  })
}

export function floorMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select last' },
    value: this.props.floorMax,
    label: this.languageHandler('Do', 'To'),
    options: floors,
    onSelect: () => this.changeInput('floorMax', option.value)
  })
}

export function totalFloorsManager(aspect) {
  return managerAgent(aspect, {
    classNames: { container: 'index-input text' },
    value: this.groupInputJoiner('totalFloors'),
    label: this.labelProvider('totalFloors'),
    onFocus: () => this.props.changeControl({ totalFloorsActive: true })
  })
}

export function totalFloorsMinManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select' },
    value: this.props.totalFloorsMIn,
    label: this.languageHandler('Od', 'From'),
    options: floors,
    onSelect: () => this.changeInput('totalFloorsMin', option.value)
  })
}

export function totalFloorsMaxManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'group-input select last' },
    value: this.props.totalFloorsMax,
    label: this.languageHandler('Do', 'To'),
    options: floors,
    onSelect: () => this.changeInput('totalFloorsMax', option.value)
  })
}

export function buttonManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button' },
    label: this.buttonLabelHandler(),
    onClick: () => {
      if (!this.props.changed) return
      this.props.changeControl({ fetch: true, page: 1 })
    }
  })
}

export function paginationManager(aspect, button) {
  return managerAgent(aspect, {
    classNames: { container: 'pagination' },
    current: +this.props.page,
    resultsPerPage: 24,
    resultAmount: +this.props.amount,
    onClick: () => {
      if (this.props.connecting) return
      scrollToElement(document.getElementById('announcement-index-full-scroll-anchor'), 256)
      window.setTimeout( () => this.props.changeControl({ page: button, fetch: true }), 512)
    }
  })
}