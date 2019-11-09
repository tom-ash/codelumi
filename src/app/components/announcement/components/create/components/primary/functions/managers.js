import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { requiredInputs } from '../../../constants/required-inputs'
import { categories } from '../../../../../constants/categories'
import { districts } from '../../../../../constants/districts'
import { numberOptionsProvider } from '../../../../../../../functions/shared'

const noError = { polish: '', english: '' }

export function categoryManager() {
  const {
    value: officeValue,
    label: officeLabel
  } = categories[0]
  const {
    value: usablePremisesValue,
    label: usablePremisesLabel
  } = categories[1]
  const {
    category: { id }
  } = requiredInputs
  const {
    category,
    errors,
    changeErrors
  } = this.props
  const {
    icon,
    all: text
  } = inputs.category
  const {
    category: categoryError
  } = errors

  return {
    id,
    classNames: { container: 'form-input select' },
    value: category,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: [
      { value: '', text: '' },
      { value: officeValue, text: this.languageObjectHandler(officeLabel) },
      { value: usablePremisesValue, text: this.languageObjectHandler(usablePremisesLabel) }
    ],
    onFocus: () => changeErrors({ category: noError }),
    onSelect: (option) => this.onSelectHandler('category', option.value),
    onBlur: () => this.categoryManager().validate(),
    validate: () => this.handleErrorOnValidate('category', category),
    error: this.languageObjectHandler(categoryError)
  }
}

export function districtManager() {
  const {
    icon,
    all: text
  } = inputs.district

  return {
    id: requiredInputs.district.id,
    classNames: { container: 'form-input select' },
    value: this.props.district,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: [{ value: '', text: '' }].concat(districts),
    onFocus: () => this.props.changeErrors({ district: noError }),
    onSelect: (option) => this.onSelectHandler('district', option.value),
    onBlur: () => this.districtManager().validate(),
    validate: () => this.handleErrorOnValidate('district', this.props.district),
    error: this.languageObjectHandler(this.props.errors.district)
  }
}

export function rentCurrencyManager() {
  const {
    icon,
    all: text
  } = inputs.rentCurrency

  return {
    id: requiredInputs.rentCurrency.id,
    classNames: { container: 'form-input select rent' },
    value: this.props.rentCurrency,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: [{ value: '', text: '' },
              { value: 0, text: 'zł (PLN)' },
              { value: 1, text: '€ (EUR)' },
              { value: 2, text: '$ (USD)' }],
    onFocus: () => this.props.changeErrors({ rentCurrency: noError }),
    onSelect: (option) => this.onSelectHandler('rentCurrency', option.value),
    onBlur: () => this.rentCurrencyManager().validate(),
    validate: () => this.handleErrorOnValidate('rentCurrency', this.props.rentCurrency),
    error: this.languageObjectHandler(this.props.errors.rentCurrency)
  }
}

export function rentAmountManager() {
  const {
    icon,
    create: text
  } = inputs.rentHeight

  return {
    id: requiredInputs.netRentAmount.id,
    classNames: { container: 'form-input text rent amount' },
    value: this.props.netRentAmount,
    match: /^\d+$/,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    onFocus: () => this.props.changeErrors({ netRentAmount: noError }),
    onChange: (value) => this.props.changeInputs({ netRentAmount: value }),
    onBlur: () => {
      this.rentAmountManager().validate()
      this.getRentAmounts()
    },
    validate: () => this.handleErrorOnValidate('netRentAmount', this.props.netRentAmount),
    error: this.languageObjectHandler(this.props.errors.netRentAmount)
  }
}

export function additionalFeesManager() {
  const {
    icon,
    all: text
  } = inputs.additionalFees

  return {
    id: requiredInputs.additionalFees.id,
    classNames: { container: 'form-input select' },
    value: this.props.additionalFees,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: [{ value: '', text: '' },
              { value: true, text: this.languageHandler('Tak', 'Yes') },
              { value: false, text: this.languageHandler('Nie', 'No') }],
    onFocus: () => this.props.changeErrors({ additionalFees: noError }),
    onSelect: (option) => this.onSelectHandler('additionalFees', option.value),
    onBlur: () => this.additionalFeesManager().validate(),
    validate: () => this.handleErrorOnValidate('additionalFees', this.props.additionalFees),
    error: this.languageObjectHandler(this.props.errors.additionalFees)
  }
}

export function areaManager() {
  const {
    icon,
    create: text
  } = inputs.area

  return {
    id: requiredInputs.area.id,
    classNames: { container: 'form-input text' },
    value: this.props.area,
    match: /^\d+$/,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    onFocus: () => this.props.changeErrors({ area: noError }),
    onChange: (value) => this.props.changeInputs({ area: value }),
    onBlur: () => {
      this.areaManager().validate()
      this.getRentAmounts()
    },
    validate: () => this.handleErrorOnValidate('area', this.props.area),
    error: this.languageObjectHandler(this.props.errors.area)
  }
}

export function roomsManager() {
  const {
    icon,
    create: text
  } = inputs.rooms

  return {
    id: requiredInputs.rooms.id,
    classNames: { container: 'form-input select' },
    value: this.props.rooms,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ rooms: noError }),
    onSelect: (option) => this.onSelectHandler('rooms', option.value),
    onBlur: () => this.roomsManager().validate(),
    validate: () => this.handleErrorOnValidate('rooms', this.props.rooms),
    error: this.languageObjectHandler(this.props.errors.rooms)
  }
}

export function floorManager() {
  const {
    icon,
    create: text
  } = inputs.floor

  return {
    id: requiredInputs.floor.id,
    classNames: { container: 'form-input select' },
    value: this.props.floor,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ floor: noError }),
    onSelect: (option) => this.onSelectHandler('floor', option.value),
    onBlur: () => this.floorManager().validate(),
    validate: () => this.handleErrorOnValidate('floor', this.props.floor),
    error: this.languageObjectHandler(this.props.errors.floor)
  }
}

export function totalFloorsManager() {
  const {
    icon,
    create: text
  } = inputs.totalFloors

  return {
    id: requiredInputs.totalFloors.id,
    classNames: { container: 'form-input select' },
    value: this.props.totalFloors,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ totalFloors: noError }),
    onSelect: (option) => this.onSelectHandler('totalFloors', option.value),
    onBlur: () => this.totalFloorsManager().validate(),
    validate: () => this.handleErrorOnValidate('totalFloors', this.props.totalFloors),
    error: this.languageObjectHandler(this.props.errors.totalFloors)
  }
}

export function availabilityDateSelectManager() {
  const {
    icon,
    all: text
  } = inputs.availabilityDate

  return {
    id: requiredInputs.availabilityDateSelect.id,
    classNames: { container: 'form-input select' },
    value: this.props.availabilityDateSelect,
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    options: [{ value: '', text: '' },
              { value: 'now', text: this.languageHandler('Już dostępne', 'Already available') },
              { value: 'date', text: this.languageHandler('Podaj datę', 'Provide date') }],
    onSelect: (option) => this.props.changeInputs({
      availabilityDateSelect: option.value,
      ...option.value == 'now' && { availabilityDate: '' }
    }),
    onFocus: () => this.props.changeErrors({ availabilityDateSelect: noError }),
    onBlur: () => this.availabilityDateSelectManager().validate(),
    validate: () => this.handleErrorOnValidate('availabilityDateSelect', this.props.availabilityDateSelect),
    error: this.languageObjectHandler(this.props.errors.availabilityDateSelect)
  }
}

export function availableDateManager() {
  const {
    availabilityDate,
    changeControl,
    errors
  } = this.props
  const {
    availableDateManager: thisManager,
    labelProvider,
    handleErrorOnValidate,
    languageObjectHandler
  } = this
  const {
    availabilityDate: { id }
  } = requiredInputs
  const {
    availabilityDate: { icon, all: text }
  } = inputs

  return {
    id,
    classNames: { container: 'form-input select' },
    value: availabilityDate || '',
    options: [
      { value: '', text: '' }, 
      { value: availabilityDate, text: availabilityDate }
    ],
    label: this.languageObjectHandler(text),
    children: <i className={icon} />,
    disableSelectOptions: true,
    onBlur: () => {
      changeControl({ availabilityDateFocus: false })
      thisManager().validate()
    },
    validate: () => handleErrorOnValidate('availabilityDate', availabilityDate),
    onFocus: () => changeControl({ availabilityDateFocus: true }),
    error: (() => {
      if (availabilityDate) return null
      return languageObjectHandler(errors.availabilityDate)
    })()
  }
}
