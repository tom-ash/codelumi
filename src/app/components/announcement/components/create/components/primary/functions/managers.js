import { managerAgent } from 'managed-inputs'
import { numberOptionsProvider } from '../../../../../../../functions/shared'
import { districts } from '../../../../../constants/districts'
import { requiredInputs } from '../../../constants/required-inputs'
import { inputs } from '../../../../../constants/inputs'

const noError = { polish: '', english: '' }

export function categoryManager(aspect, option) {
  return managerAgent(aspect, {
    id: requiredInputs.category.id,
    classNames: { container: 'primary-input select' },
    value: this.props.category,
    label: this.labelProvider(inputs.category.icon, inputs.category.all),
    options: [{ value: '', text: '' },
              { value: '0', text: this.languageHandler('biuro', 'office') },
              { value: '1', text: this.languageHandler('lokal uzytkowy', 'usable premises') }],
    onFocus: () => this.props.changeErrors({ category: noError }),
    onSelect: () => this.onSelectHandler('category', option.value),
    onBlur: () => this.categoryManager('validate'),
    validate: () => this.handleErrorOnValidate('category', this.props.category),
    error: this.languageObjectHandler(this.props.errors.category)
  })
}

export function districtManager(aspect, option) {
  return managerAgent(aspect, {
    id: requiredInputs.district.id,
    classNames: { container: 'primary-input select' },
    value: this.props.district,
    label: this.labelProvider(inputs.district.icon, inputs.district.all),
    options: [{ value: '', text: '' }].concat(districts),
    onFocus: () => this.props.changeErrors({ district: noError }),
    onSelect: () => this.onSelectHandler('district', option.value),
    onBlur: () => this.districtManager('validate'),
    validate: () => this.handleErrorOnValidate('district', this.props.district),
    error: this.languageObjectHandler(this.props.errors.district)
  })
}

export function rentCurrencyManager(aspect, option) {
  return managerAgent(aspect, {
    id: requiredInputs.rentCurrency.id,
    classNames: { container: 'primary-input select rent' },
    value: this.props.rentCurrency,
    label: this.labelProvider(inputs.rentCurrency.icon, inputs.rentCurrency.all),
    options: [{ value: '', text: '' },
              { value: '0', text: 'PLN' },
              { value: '1', text: 'EUR' },
              { value: '2', text: 'USD' }],
    onFocus: () => this.props.changeErrors({ rentCurrency: noError }),
    onSelect: () => this.onSelectHandler('rentCurrency', option.value),
    onBlur: () => this.rentCurrencyManager('validate'),
    validate: () => this.handleErrorOnValidate('rentCurrency', this.props.rentCurrency),
    error: this.languageObjectHandler(this.props.errors.rentCurrency)
  })
}

export function rentAmountManager(aspect, value, keyCode) {
  return managerAgent(aspect, {
    id: requiredInputs.rentAmount.id,
    classNames: { container: 'primary-input text rent amount' },
    value: this.props.rentAmount,
    match: /^\d+$/,
    label: this.labelProvider(inputs.rentHeight.icon, inputs.rentHeight.create),
    onFocus: () => this.props.changeErrors({ rentAmount: noError }),
    onChange: () => this.props.changeInputs({ rentAmount: value }),
    onBlur: () => this.rentAmountManager('validate'),
    validate: () => this.handleErrorOnValidate('rentAmount', this.props.rentAmount),
    error: this.languageObjectHandler(this.props.errors.rentAmount)
  })
}

export function additionalFeesManager(aspect, option) {
  return managerAgent(aspect, {
    id: requiredInputs.additionalFees.id,
    classNames: { container: 'primary-input select' },
    value: this.props.additionalFees,
    label: this.labelProvider(inputs.additionalFees.icon, inputs.additionalFees.all),
    options: [{ value: '', text: '' },
              { value: 'true', text: this.languageHandler('tak', 'yes') },
              { value: 'false', text: this.languageHandler('nie', 'no') }],
    onFocus: () => this.props.changeErrors({ additionalFees: noError }),
    onSelect: () => this.onSelectHandler('additionalFees', option.value),
    onBlur: () => this.additionalFeesManager('validate'),
    validate: () => this.handleErrorOnValidate('additionalFees', this.props.additionalFees),
    error: this.languageObjectHandler(this.props.errors.additionalFees)
  })
}

export function areaManager(aspect, value) {
  return managerAgent(aspect, {
    id: requiredInputs.area.id,
    classNames: { container: 'primary-input text' },
    value: this.props.area,
    match: /^\d+$/,
    label: this.labelProvider(inputs.area.icon, inputs.area.create),
    onFocus: () => this.props.changeErrors({ area: noError }),
    onChange: () => this.props.changeInputs({ area: value }),
    onSelect: () => this.onSelectHandler('area', option.value),
    onBlur: () => this.areaManager('validate'),
    validate: () => this.handleErrorOnValidate('area', this.props.area),
    error: this.languageObjectHandler(this.props.errors.area)
  })
}

export function roomsManager(aspect, option) {
  return managerAgent(aspect, {
    id: requiredInputs.rooms.id,
    classNames: { container: 'primary-input select' },
    value: this.props.rooms,
    label: this.labelProvider(inputs.rooms.icon, inputs.rooms.create),
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ area: noError }),
    onSelect: () => this.onSelectHandler('rooms', option.value),
    onBlur: () => this.roomsManager('validate'),
    validate: () => this.handleErrorOnValidate('rooms', this.props.rooms),
    error: this.languageObjectHandler(this.props.errors.rooms)
  })
}

export function floorManager(aspect, option) {
  return managerAgent(aspect, {
    id: requiredInputs.floor.id,
    classNames: { container: 'primary-input select' },
    value: this.props.floor,
    label: this.labelProvider(inputs.floor.icon, inputs.floor.create),
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ floor: noError }),
    onSelect: () => this.onSelectHandler('floor', option.value),
    onBlur: () => this.floorManager('validate'),
    validate: () => this.handleErrorOnValidate('floor', this.props.floor),
    error: this.languageObjectHandler(this.props.errors.floor)
  })
}

export function totalFloorsManager(aspect, option) {
  return managerAgent(aspect, {
    id: requiredInputs.totalFloors.id,
    classNames: { container: 'primary-input select' },
    value: this.props.totalFloors,
    label: this.labelProvider(inputs.buildingFloors.icon, inputs.buildingFloors.create),
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ totalFloors: noError }),
    onSelect: () => this.onSelectHandler('totalFloors', option.value),
    onBlur: () => this.totalFloorsManager('validate'),
    validate: () => this.handleErrorOnValidate('totalFloors', this.props.totalFloors),
    error: this.languageObjectHandler(this.props.errors.totalFloors)
  })
}

export function availabilityDateSelectManager(aspect, option) {
  return managerAgent(aspect, {
    classNames: { container: 'primary-input select date-select' },
    value: this.props.availabilityDateSelect,
    label: this.labelProvider(inputs.availabilityDate.icon, inputs.availabilityDate.all),
    options: [{ value: '', text: '' },
              { value: 'now', text: this.languageHandler('juz dostępne', 'already available') },
              { value: 'date', text: this.languageHandler('podaj datę', 'provide date') }],
    onSelect: () => this.props.changeInputs({ availabilityDateSelect: option.value }),
    validate: () => this.handleErrorOnValidate('availabilityDateSelect', this.props.availabilityDateSelect),
    error: this.languageObjectHandler(this.props.errors.availabilityDateSelect),
    onBlur: () => this.availabilityDateSelectManager('validate'),
    onFocus: () => this.props.changeErrors({ availabilityDateSelect: noError }),
  })
}

export function availableDateManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'primary-input text date' },
    value: this.props.availabilityDate,
    initialValue: 'aaa',
    label: this.languageHandler('', ''),
    onFocus: () => this.props.changeControl({ availabilityDateFocus: true }),
    onChange: () => this.props.changeInputs({ availabilityDate: value }),
    onBlur: () => {
      if (!this.props.calendarMouseOver) this.props.changeControl({ availabilityDateFocus: false })
    },
  })
}

