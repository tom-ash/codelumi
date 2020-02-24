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
  return {
    name: 'announcement-rent-currency',
    classNames: { container: 'form-input radio'},
    checked: this.props.rentCurrency,
    radios: [
      { value: 0, label: 'zł' },
      { value: 1, label: '€' },
      { value: 2, label: '$' }
    ],
    onClick: value => this.onSelectHandler('rentCurrency', value)
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

  if (category === 0 || category === 1) label = this.languageObjectHandler({ pl: 'Miesięczna cena (czynsz) netto', en: 'Monthly Net Price (Rent)'})
  
  const rentAmountType = category === 2 ? 'grossRentAmount' : 'netRentAmount'

  return {
    display: category === '' ? 'none' : 'block',
    id: requiredInputs.rentAmount.id,
    classNames: { container: 'form-input text rent amount' },
    value: this.props[rentAmountType],
    match: /^\d+$/,
    label,
    children: <i className={icon} />,
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

  const { category } = this.props

  let label = this.languageObjectHandler(text)

  if (category === 2) label = this.languageObjectHandler({ pl: 'Liczba pokoi', en: 'Rooms Amount' })

  return {
    display: category === '' ? 'none' : 'block',
    id: requiredInputs.rooms.id,
    classNames: { container: 'form-input select' },
    value: this.props.rooms,
    label,
    children: <i className={icon} />,
    options: numberOptionsProvider(99),
    onSelect: (option) => this.onSelectHandler('rooms', option.value)
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
    options: this.floorsProvider(),
    onSelect: (option) => this.onSelectHandler('floor', option.value),
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
    onSelect: (option) => this.onSelectHandler('totalFloors', option.value),
  }
}





export function availabilityDateSelectManager() {
  return {
    name: 'announcement-rent-availability-date',
    classNames: { container: 'form-input radio'},
    checked: this.props.availabilityDateSelect,
    radios: [
      { value: 'now', label: this.languageHandler('Już dostępne', 'Already available') },
      { value: 'date', label: this.languageHandler('Podaj datę', 'Provide date') },
    ],
    onClick: value => this.props.changeInputs({ availabilityDateSelect: value })
  }
}
