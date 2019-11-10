import React from 'react'
import { rentOptions } from '../constants/rent-options'
import { areaOptions } from '../constants/area-options'
import { rooms } from '../../../constants/rooms'
import { inputs } from '../../../constants/inputs'
import { ManagedSelect } from 'managed-inputs'
const options = { rent: rentOptions, area: areaOptions, rooms: rooms }

export function compositeManagerProvider(inputName) {
  return () => {
    const value = this.subInputValueParser(inputName)

    return {
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
      children: <React.Fragment>
        <i className={`icon ${inputs[inputName].icon}`} />
        {value &&
        <i
          className='close fas fa-times'
          onClick={() => {
            this.props.changeInputs({
              [`${inputName}Min`]: '',
              [`${inputName}Max`]: '',
            })
            this.props.changeControl({ fetchAmount: true })
            this.props.changeMapInputs({
              [`${inputName}Min`]: '',
              [`${inputName}Max`]: '',
            })
            this.props.changeMapControl({ fetch: true })
          }}
        />}
      </React.Fragment>,
      value: value ? 'filled' : '',
      options: [{ value: '', text: '' },  { value: 'filled', text: value }]
    }
  }
}

export function subInputMinManagerProvider(inputName) {
  return () => (
    {
      classNames: { container: `sub-input select ${inputName} min` },
      onFocusCoverZIndex: 99,
      value: this.props[`${inputName}Min`],
      label: this.languageHandler('Od', 'From'),
      options: (() => {
        if (['floor', 'totalFloors'].indexOf(inputName) === -1) return options[inputName]
        return [
          { value: '', text: '' },
          { value: 0, text:  this.languageHandler('Parter', 'Groundfloor') }
        ].concat(Array(99).fill().map((_, index) => ({ value: index + 1, text: `${index + 1}` })))

      })(),
      onSelect: (option) => this.changeInput(inputName, 'min', option.value)
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
      options: (() => {
        if (['floor', 'totalFloors'].indexOf(inputName) === -1) return options[inputName]
        return [
          { value: '', text: '' },
          { value: -1, text:  this.languageHandler('Podziemie', 'Underground') },
          { value: 0, text:  this.languageHandler('Parter', 'Groundfloor') }
        ].concat(Array(100).fill().map((_, index) => ({ value: index + 1, text: `${index + 1}` })))

      })(),
      onSelect: (option) => this.changeInput(inputName, 'max', option.value)
    }
  )
}
