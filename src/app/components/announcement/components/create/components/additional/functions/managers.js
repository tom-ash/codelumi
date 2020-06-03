import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { requiredInputs } from '../../../constants/required-inputs'
import { categories } from '../../../../../constants/categories'
import { districts } from '../../../../../constants/districts'
import { numberOptionsProvider } from '../../../../../../../functions/shared'

const noError = { pl: '', en: '' }





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
    options: numberOptionsProvider(99),
    onSelect: (option) => this.onSelectHandler('totalFloors', option.value),
  }
}

export function showAvailabilityDateManager() {
  const {
    showAvilabilityDate,
    changeControl
  } = this.props

  return {
    classNames: { container: 'form-input checkbox availability-date' },
    checked: showAvilabilityDate,
    label: this.languageObjectHandler({
      pl: 'Dodaj datę dostępności',
      en: 'Add Availability Date'
    }),
    onClick: value => {
      changeControl({ showAvilabilityDate: value })
    }
  }
}
