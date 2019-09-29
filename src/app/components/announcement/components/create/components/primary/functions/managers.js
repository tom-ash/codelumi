import { numberOptionsProvider } from '../../../../../../../functions/shared'
import { districts } from '../../../../../constants/districts'
import { requiredInputs } from '../../../constants/required-inputs'
import { inputs } from '../../../../../constants/inputs'

const noError = { polish: '', english: '' }

export function categoryManager() {
  return {
    id: requiredInputs.category.id,
    classNames: { container: 'form-input select' },
    value: this.props.category,
    label: this.labelProvider(inputs.category.icon, inputs.category.all),
    options: [{ value: '', text: '' },
              { value: 0, text: this.languageHandler('biuro', 'office') },
              { value: 1, text: this.languageHandler('lokal uzytkowy', 'usable premises') }],
    onFocus: () => this.props.changeErrors({ category: noError }),
    onSelect: (option) => this.onSelectHandler('category', option.value),
    onBlur: () => this.categoryManager().validate(),
    validate: () => this.handleErrorOnValidate('category', this.props.category),
    error: this.languageObjectHandler(this.props.errors.category)
  }
}

export function districtManager() {
  return {
    id: requiredInputs.district.id,
    classNames: { container: 'form-input select' },
    value: this.props.district,
    label: this.labelProvider(inputs.district.icon, inputs.district.all),
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
    id: requiredInputs.rentCurrency.id,
    classNames: { container: 'form-input select rent' },
    value: this.props.rentCurrency,
    label: this.labelProvider(inputs.rentCurrency.icon, inputs.rentCurrency.all),
    options: [{ value: '', text: '' },
              { value: 0, text: 'PLN' },
              { value: 1, text: 'EUR' },
              { value: 2, text: 'USD' }],
    onFocus: () => this.props.changeErrors({ rentCurrency: noError }),
    onSelect: (option) => this.onSelectHandler('rentCurrency', option.value),
    onBlur: () => this.rentCurrencyManager().validate(),
    validate: () => this.handleErrorOnValidate('rentCurrency', this.props.rentCurrency),
    error: this.languageObjectHandler(this.props.errors.rentCurrency)
  }
}

export function rentAmountManager() {
  return {
    id: requiredInputs.netRentAmount.id,
    classNames: { container: 'form-input text rent amount' },
    value: this.props.netRentAmount,
    match: /^\d+$/,
    label: this.labelProvider(inputs.rentHeight.icon, inputs.rentHeight.create),
    onFocus: () => this.props.changeErrors({ netRentAmount: noError }),
    onChange: (value) => this.props.changeInputs({ netRentAmount: value }),
    onBlur: () => this.rentAmountManager().validate(),
    validate: () => this.handleErrorOnValidate('netRentAmount', this.props.netRentAmount),
    error: this.languageObjectHandler(this.props.errors.netRentAmount)
  }
}

export function additionalFeesManager() {
  return {
    id: requiredInputs.additionalFees.id,
    classNames: { container: 'form-input select' },
    value: this.props.additionalFees,
    label: this.labelProvider(inputs.additionalFees.icon, inputs.additionalFees.all),
    options: [{ value: '', text: '' },
              { value: true, text: this.languageHandler('tak', 'yes') },
              { value: false, text: this.languageHandler('nie', 'no') }],
    onFocus: () => this.props.changeErrors({ additionalFees: noError }),
    onSelect: (option) => this.onSelectHandler('additionalFees', option.value),
    onBlur: () => this.additionalFeesManager().validate(),
    validate: () => this.handleErrorOnValidate('additionalFees', this.props.additionalFees),
    error: this.languageObjectHandler(this.props.errors.additionalFees)
  }
}

export function areaManager() {
  return {
    id: requiredInputs.area.id,
    classNames: { container: 'form-input text' },
    value: this.props.area,
    match: /^\d+$/,
    label: this.labelProvider(inputs.area.icon, inputs.area.create),
    onFocus: () => this.props.changeErrors({ area: noError }),
    onChange: (value) => this.props.changeInputs({ area: value }),
    onSelect: () => this.onSelectHandler('area', option.value),
    onBlur: () => this.areaManager().validate(),
    validate: () => this.handleErrorOnValidate('area', this.props.area),
    error: this.languageObjectHandler(this.props.errors.area)
  }
}

export function roomsManager() {
  return {
    id: requiredInputs.rooms.id,
    classNames: { container: 'form-input select' },
    value: this.props.rooms,
    label: this.labelProvider(inputs.rooms.icon, inputs.rooms.create),
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ area: noError }),
    onSelect: (option) => this.onSelectHandler('rooms', option.value),
    onBlur: () => this.roomsManager().validate(),
    validate: () => this.handleErrorOnValidate('rooms', this.props.rooms),
    error: this.languageObjectHandler(this.props.errors.rooms)
  }
}

export function floorManager() {
  return {
    id: requiredInputs.floor.id,
    classNames: { container: 'form-input select' },
    value: this.props.floor,
    label: this.labelProvider(inputs.floor.icon, inputs.floor.create),
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ floor: noError }),
    onSelect: (option) => this.onSelectHandler('floor', option.value),
    onBlur: () => this.floorManager().validate(),
    validate: () => this.handleErrorOnValidate('floor', this.props.floor),
    error: this.languageObjectHandler(this.props.errors.floor)
  }
}

export function totalFloorsManager() {
  return {
    id: requiredInputs.totalFloors.id,
    classNames: { container: 'form-input select' },
    value: this.props.totalFloors,
    label: this.labelProvider(inputs.totalFloors.icon, inputs.totalFloors.create),
    options: numberOptionsProvider(99),
    onFocus: () => this.props.changeErrors({ totalFloors: noError }),
    onSelect: (option) => this.onSelectHandler('totalFloors', option.value),
    onBlur: () => this.totalFloorsManager().validate(),
    validate: () => this.handleErrorOnValidate('totalFloors', this.props.totalFloors),
    error: this.languageObjectHandler(this.props.errors.totalFloors)
  }
}

export function availabilityDateSelectManager() {
  return {
    classNames: { container: 'form-input select' },
    value: this.props.availabilityDateSelect,
    label: this.labelProvider(inputs.availabilityDate.icon, inputs.availabilityDate.all),
    options: [{ value: '', text: '' },
              { value: 'now', text: this.languageHandler('juz dostępne', 'already available') },
              { value: 'date', text: this.languageHandler('podaj datę', 'provide date') }],
    onSelect: (option) => this.props.changeInputs({ availabilityDateSelect: option.value }),
    onFocus: () => this.props.changeErrors({ availabilityDateSelect: noError }),
    onBlur: () => this.availabilityDateSelectManager().validate(),
    validate: () => this.handleErrorOnValidate('availabilityDateSelect', this.props.availabilityDateSelect),
    error: this.languageObjectHandler(this.props.errors.availabilityDateSelect)
  }
}

export function availableDateManager() {
  return {
    classNames: { container: 'form-input select' },
    value: this.props.availabilityDate ? this.props.availabilityDate : '',
    options: [{ value: '', text: '' },  { value: this.props.availabilityDate, text: this.props.availabilityDate }],
    label: this.labelProvider(inputs.availabilityDate.icon, {
      polish: 'Data dostępności', english: 'Availability date'
    }),
    disableSelectOptions: true,
    disableOnFocusCover: true,
    onFocus: () => this.props.changeControl({ availabilityDateFocus: true }),
  }
}
