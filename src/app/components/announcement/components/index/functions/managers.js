import React from 'react'
import { managerAgent } from 'managed-inputs'
import { currencies } from '../../../constants/currencies'

export function categoryManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'simple-index-input select unit category' },
    value: this.props.category,
    label: this.labelProvider('category'),
    children: <i className='icon fas fa-clone' />,
    options: this.buildSelectCategories(),
    onSelect: () => this.changeInput('category', option.value),
  })
}

export function districtManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'simple-index-input select district unit' },
    children: <i className='icon fas fa-city' />,
    value: this.props.district,
    label: this.labelProvider('district'),
    options: this.buildSelectDistricts(),
    onSelect: () => this.changeInput('district', option.value),
    onFocus: () => this.props.changeControl({ rentActive: false })
  })
}


export function rentCurrencyManager(aspect, option, keyCode) {
  return managerAgent(aspect, {
    classNames: { container: 'sub-input select rent last' },
    value: this.props.rentCurrency,
    label: this.languageHandler('Waluta', 'Currency'),
    options: currencies,
    onSelect: () => this.changeInput('rentCurrency', option.value)
  })
}

export function availabilityDateManager(aspect) {
  return managerAgent(aspect, {
    classNames: { container: 'composite-input select availability-date' },
    disableOnFocusCover: true,
    disableSelectOptions: true,
    children: <i className='icon far fa-calendar-alt' />,
    value: this.props.availabilityDate ? 'filled' : '',
    options: [{ value: '', text: '' },  { value: 'filled', text: this.props.availabilityDate }],
    label: this.labelProvider('availabilityDate'),
    onFocus: () => this.props.changeControl({
      availabilityDateFocus: true,
      roomsActive: false,
      floorActive: false }),
    onBlur: () => {
      if (this.props.availabilityDateActive) return
      this.props.changeControl({ availabilityDateFocus: false })
    },
    onChange: () => null
  })
}
