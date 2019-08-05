import React from 'react'
import { managerAgent } from 'managed-inputs'
import { rentOptions } from '../constants/rent-options'
import { areaOptions } from '../constants/area-options'
import { rooms } from '../../../constants/rooms'
import { floors } from '../../../constants/floors'
import { inputs } from '../../../constants/inputs'
const options = { rent: rentOptions, area: areaOptions, rooms: rooms, floor: floors, totalFloors: floors }

export function compositeManagerProvider(inputName) {
  return (aspect) => (
    managerAgent(aspect, {
      classNames: { container: `composite-input select ${inputName}` },
      disableSelectOptions: true,
      label: this.labelProvider(inputName),
      children: <i className={`icon ${inputs[inputName].icon}`} />,
      value: this.subInputValueParser(inputName) ? 'filled' : '',
      options: [{ value: '', text: '' },  { value: 'filled', text: this.subInputValueParser(inputName) }],
      onFocus: () => this.props.changeControl({ [`${inputName}Active`]: true }),
      onBlur: () => {
        if (this.props.isMobile) this.props.changeControl({ [`${inputName}Active`]: false })
      }
    })
  )
}

export function subInputMinManagerProvider(inputName) {
  return (aspect, option) => (
    managerAgent(aspect, {
      classNames: { container: `sub-input select ${inputName}` },
      onFocusCoverZIndex: 3,
      value: this.props[`${inputName}Min`],
      label: this.languageHandler('Od', 'From'),
      options: options[inputName],
      onSelect: () => this.changeInput(`${inputName}Min`, option.value)
    })
  )
}

export function subInputMaxManagerProvider(inputName) {
  return (aspect, option) => (
    managerAgent(aspect, {
      classNames: { container: `sub-input select ${inputName}` },
      onFocusCoverZIndex: 3,
      value: this.props[`${inputName}Max`],
      label: this.languageHandler('Do', 'To'),
      options: options[inputName],
      onSelect: () => this.changeInput(`${inputName}Max`, option.value)
    })
  )
}