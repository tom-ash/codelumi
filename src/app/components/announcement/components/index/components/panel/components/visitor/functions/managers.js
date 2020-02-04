import React from 'react'
import Calendar from 'react-calendar/dist/entry.nostyle'
import { currencies } from '../../../../../../../constants/currencies'
import { parseDate } from '../../../../../../../../../functions/date-parsers'
import { CloseButton } from '../../../../../../../../support/components/close-button/close-button'

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
      {value !== '' && <CloseButton classNames='index' onClick={() => {
        this.props.changeInputs({ category: '', offset: 0 })
        this.props.changeControl({ fetch: true })
      }}/>}
      }
    </React.Fragment>,
    options: this.buildSelectCategories(),
    onSelect: (option) => {
      this.props.changeInputs({ category: option.value, offset: 0 })
      this.props.changeControl({ fetch: true })
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
      {value !== '' && <CloseButton classNames='index' onClick={() => {
        this.props.changeInputs({ district: '', offset: 0 })
        this.props.changeControl({ fetch: true })
      }}/>}
    </React.Fragment>,
    options: this.buildSelectDistricts(),
    onSelect: (option) => {
      this.props.changeInputs({ district: option.value, offset: 0 })
      this.props.changeControl({ fetch: true })
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
      this.props.changeInputs({ rentCurrency: option.value, offset: 0 })
      this.props.changeControl({ fetch: true })
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
    classNames: {
      container: `composite-input-container availability-date`
    },
    disableSelectOptions: true,
    onFocusCoverZIndex: 98,
    substituteOptions:(
      <Calendar
        locale={language == 'pl' ? 'pl' : 'en'}
        onChange = {(date) => {
          changeInputs({ availabilityDate: parseDate(date), offset: 0 })
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
        this.props.changeInputs({ availabilityDate: '', offset: 0 })
        this.props.changeControl({ fetch: true })
      }}
    />
    }
  </React.Fragment>,
    value: value ? value : '',
    options: [ { value: '', text: '' }, { value, text: value } ],
    label: this.labelProvider('availabilityDate')
  }
}

export function buttonManager(action) {
  const { changeControl } = this.props
  return {
    id: 'announcement-index-full-search-button',
    classNames: { container: 'simple-index-input button' },
    label: <div>
      <i className='fas fa-map-marker-alt' /> <i className='fas fa-th-list' />
    </div>,
    onClick: () => {
      changeControl({ type: this.props.type === 'map' ? 'full' : 'map' })
    }
  }
}
