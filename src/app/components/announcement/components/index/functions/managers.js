import React from 'react'
import { currencies } from '../../../constants/currencies'
import { parseDate } from '../../../../../functions/date-parsers'

import Calendar from 'react-calendar';

export function categoryManager() {
  return {
    classNames: {
      container: 'simple-index-input select unit category'
    },
    value: this.props.category,
    onFocusCoverZIndex: 10,
    label: this.labelProvider('category'),
    children: <i className='icon far fa-list-alt' />,
    options: this.buildSelectCategories(),
    onSelect: (option) => this.changeInput('category', option.value),
  }
}

export function districtManager() {
  return {
    classNames: { container: 'simple-index-input select district unit' },
    children: <i className='icon fas fa-city' />,
    value: this.props.district,
    onFocusCoverZIndex: 10,
    label: this.labelProvider('district'),
    options: this.buildSelectDistricts(),
    onSelect: (option) => this.changeInput('district', option.value),
    onFocus: () => this.props.changeControl({ rentActive: false })
  }
}

export function rentCurrencyManager() {
  return {
    classNames: { container: 'sub-input select rent last' },
    onFocusCoverZIndex: 11,
    value: this.props.rentCurrency,
    label: this.languageHandler('Waluta', 'Currency'),
    options: currencies,
    onSelect: (option) => this.changeInput('rentCurrency', option.value)
  }
}

export function availabilityDateManager() {
  const {
    language,
    availabilityDate,
    changeInputs,
    changeControl,
    venue
  } = this.props
  
  const fetchKey = venue == 'indexFull' ? 'fetchAmount' : 'fetch'

  return {
    classNames: {
      container: `composite-input-container availability-date`
    },
    disableSelectOptions: true,
    onFocusCoverZIndex: 98,
    substituteOptions:(
      <Calendar
        locale={language == 'polish' ? 'pl' : 'en'}
        onChange = {(date) => {
          changeInputs({ availabilityDate: parseDate(date) })
          changeControl({ [fetchKey]: true })
        }}
      />
    ),
    children: <i className='icon far fa-calendar-alt' />,
    value: availabilityDate ? availabilityDate : '',
    options: [
      { value: '', text: '' }, 
      { value: availabilityDate, text: availabilityDate }
    ],
    label: this.labelProvider('availabilityDate')
  }
}
