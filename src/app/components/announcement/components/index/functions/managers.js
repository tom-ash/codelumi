import React from 'react'
import { currencies } from '../../../constants/currencies'
import { parseDate } from '../../../../../functions/date-parsers'

import Calendar from 'react-calendar';

export function categoryManager() {
  const { category: value } = this.props

  return {
    classNames: {
      container: 'simple-index-input select unit category'
    },
    value,
    onFocusCoverZIndex: 10,
    label: this.labelProvider('category'),
    children: <React.Fragment>
      <i className='icon far fa-list-alt' />
      {value !== '' &&
      <i
        className='close fas fa-times'
        onClick={() => {
          this.props.changeInputs({ category: '' })
          this.props.changeControl({ fetchAmount: true })
          this.props.changeMapInputs({ category: '' })
          this.props.changeMapControl({ fetch: true })
        }}
      />
      }
    </React.Fragment>,
    options: this.buildSelectCategories(),
    onSelect: (option) => {
      this.props.changeInputs({ category: option.value })
      this.props.changeControl({ fetchAmount: true })
      this.props.changeMapInputs({ category: option.value })
      this.props.changeMapControl({ fetch: true })
    },
  }
}

export function districtManager() {
  const { district: value } = this.props

  return {
    classNames: { container: 'simple-index-input select district unit' },
    value,
    onFocusCoverZIndex: 10,
    label: this.labelProvider('district'),
    children: <React.Fragment>
      <i className='icon fas fa-city' />
      {value !== '' &&
      <i
        className='close fas fa-times'
        onClick={() => {
          this.props.changeInputs({ district: '' })
          this.props.changeControl({ fetchAmount: true })
          this.props.changeMapInputs({ district: '' })
          this.props.changeMapControl({ fetch: true })
        }}
      />
      }
    </React.Fragment>,
    options: this.buildSelectDistricts(),
    onSelect: (option) => {
      this.props.changeInputs({ district: option.value })
      this.props.changeControl({ fetchAmount: true })
      this.props.changeMapInputs({ district: option.value })
      this.props.changeMapControl({ fetch: true })
    }
  }
}

export function rentCurrencyManager() {
  return {
    classNames: { container: 'sub-input select rent last' },
    onFocusCoverZIndex: 11,
    value: this.props.rentCurrency,
    label: this.languageHandler('Waluta', 'Currency'),
    options: currencies,
    onSelect: (option) => {
      this.props.changeInputs({ rentCurrency: option.value })
      this.props.changeControl({ fetchAmount: true })
      this.props.changeMapInputs({ rentCurrency: option.value })
      this.props.changeMapControl({ fetch: true })
    }
  }
}

export function availabilityDateManager() {
  const {
    language,
    availabilityDate: value,
    changeInputs,
    changeControl,
    venue
  } = this.props
  
  const fetchKey = venue == 'indexFull' ? 'fetchAmount' : 'fetch'

  return {
    display: !this.isLargePc() && 'none',
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
    children: <React.Fragment>
    <i className='icon far fa-calendar-alt' />
    {value !== '' &&
    <i
      className='close fas fa-times'
      onClick={() => {
        this.props.changeInputs({ availabilityDate: '' })
        this.props.changeControl({ fetchAmount: true })
        this.props.changeMapInputs({ availabilityDate: '' })
        this.props.changeMapControl({ fetch: true })
      }}
    />
    }
  </React.Fragment>,
    value: value ? value : '',
    options: [
      { value: '', text: '' }, 
      { value, text: value }
    ],
    label: this.labelProvider('availabilityDate')
  }
}
