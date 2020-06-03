import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { requiredInputs } from '../../../constants/required-inputs'
import { categories } from '../../../../../constants/categories'
import { districts } from '../../../../../constants/districts'
import { numberOptionsProvider } from '../../../../../../../functions/shared'

const noError = { pl: '', en: '' }

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
    value: apartmentValue,
    label: apartmentLabel
  } = categories[2]

  const {
    category: { id }
  } = requiredInputs
  const {
    category: value,
    errors,
    changeErrors,
    changeInputs
  } = this.props
  const {
    icon,
    all: text
  } = inputs.category
  const {
    category: categoryError
  } = errors


  return {
    name: 'announcement-category',
    classNames: { container: 'form-input radio'},
    checked: value,
    radios: [
      { value: apartmentValue, label: this.languageObjectHandler(apartmentLabel) },
      { value: officeValue, label: this.languageObjectHandler(officeLabel) },
      { value: usablePremisesValue, label: this.languageObjectHandler(usablePremisesLabel) }
    ],
    onClick: value => {
      this.onSelectHandler('category', value)
      changeInputs({
        netRentAmount: '',
        netRentAmountPerSqm: '',
        grossRentAmount: '',
        grossRentAmountPerSqm: ''
      })
    }
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
    // children: <i className={icon} />,
    options: [{ value: '', text: '' }].concat(districts),
    onFocus: () => this.props.changeErrors({ district: noError }),
    onSelect: (option) => this.onSelectHandler('district', option.value),
    onBlur: () => this.districtManager().validate(),
    validate: () => this.handleErrorOnValidate('district', this.props.district),
    error: this.languageObjectHandler(this.props.errors.district)
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
    children: <div className='sqm'>{this.languageObjectHandler({ pl: <span>m<span className='sq'>2</span></span>, en: 'sqm' })}</div>,
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

export function rentAmountManager() {
  const {
    icon,
    create: text
  } = inputs.rentHeight

  const {
    category,
    errors,
    changeInputs,
    changeErrors
  } = this.props

  let label = this.languageObjectHandler(text)

  if (category === 0 || category === 1) label = this.languageObjectHandler({ pl: 'Miesięczny czynsz netto', en: 'Monthly Net Rent'})
  
  const rentAmountType = category === 2 ? 'grossRentAmount' : 'netRentAmount'

  return {
    display: category === '' ? 'none' : 'block',
    id: requiredInputs.rentAmount.id,
    classNames: { container: 'form-input text rent-amount' },
    value: this.props[rentAmountType],
    match: /^\d+$/,
    label,
    onFocus: () => changeErrors({ [rentAmountType]: noError }),
    onChange: (value) => changeInputs({ [rentAmountType]: value }),
    onBlur: () => {
      this.rentAmountManager().validate()
      this.getRentAmounts()
    },
    validate: () => this.handleErrorOnValidate(rentAmountType),
    error: this.languageObjectHandler(errors[rentAmountType])
  }
}

export function rentCurrencyManager() {
  const { rentCurrency: value } = this.props
  const currencies = [
    { value: 0, text: 'zł' },
    { value: 1, text: '€' },
    { value: 2, text: '$' }
  ]

  return {
    classNames: { container: 'form-input select rent-currency' },
    children: <i className="fas fa-chevron-down" />,
    value,
    options: currencies,
    onSelect: ({ value: optionValue }) => this.onSelectHandler('rentCurrency', optionValue),
  }
}
