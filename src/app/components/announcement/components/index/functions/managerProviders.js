import React from 'react'
import { rentOptions } from '../constants/rent-options'
import { areaOptions } from '../constants/area-options'
import { rooms } from '../../../constants/rooms'
import { floors } from '../../../constants/floors'
import { inputs } from '../../../constants/inputs'
import { ManagedSelect } from 'managed-inputs'
const options = { rent: rentOptions, area: areaOptions, rooms: rooms, floor: floors, totalFloors: floors }

export function compositeManagerProvider(inputName) {
  return () => (
    {
      classNames: {
        container: `composite-input select ${inputName}`
      },
      disableSelectOptions: true,
      disableBlurOnValue: true,
      substituteOptionsContainerClass: 'sub-contain',
      onFocusCoverZIndex: 98,
      substituteOptions: (
        <div className='subinputs-container'>
          <ManagedSelect {...this[`${inputName}MinManager`]()}/>
          <ManagedSelect {...this[`${inputName}MaxManager`]()}/>
          {inputName == 'rent' && <ManagedSelect {...this.rentCurrencyManager()}/>}
          <div className='float-clear' />
        </div>
      ),
      onFocusCoverZIndex: 9,
      label: this.labelProvider(inputName),
      children: <i className={`icon ${inputs[inputName].icon}`} />,
      value: this.subInputValueParser(inputName) ? 'filled' : '',
      options: [{ value: '', text: '' },  { value: 'filled', text: this.subInputValueParser(inputName) }],
      onFocus: () => this.props.changeControl({ [`${inputName}Active`]: true }),
      onBlur: () => {
        this.props.changeControl({ [`${inputName}Active`]: false })
      }
    }
  )
}

export function subInputMinManagerProvider(inputName) {
  return () => (
    {
      classNames: { container: `sub-input select ${inputName} min` },
      onFocusCoverZIndex: 99,
      value: this.props[`${inputName}Min`],
      label: this.languageHandler('Od', 'From'),
      options: options[inputName],
      onSelect: (option) => this.changeInput(`${inputName}Min`, option.value)
    }
  )
}

export function subInputMaxManagerProvider(inputName) {
  return () => (
    {
      classNames: { container: `sub-input select ${inputName} max` },
      onFocusCoverZIndex: 99,
      value: this.props[`${inputName}Max`],
      label: this.languageHandler('Do', 'To'),
      options: options[inputName],
      onSelect: (option) => this.changeInput(`${inputName}Max`, option.value)
    }
  )
}
