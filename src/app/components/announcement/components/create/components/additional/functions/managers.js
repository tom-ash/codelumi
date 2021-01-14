import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { numberOptionsProvider } from '../../../../../../../functions/shared'
import ScalableVectorGraphic from '../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
import { sendGaEvent } from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  RENT_INPUTTED_EVENT,
  RENT_CURRENCY_SELECTED_EVENT,
  ROOMS_INPUTTED_EVENT,
  FLOOR_INPUTTED_EVENT,
  TOTAL_FLOORS_INPUTTED_EVENT
} = analyticEvents

export function rentAmountManager() {
  const {
    create: text
  } = inputs.rentHeight

  const {
    category,
    changeInputs,
    scalableVectorGraphics
  } = this.props

  let label = this.langObjHandler(text)

  const rentAmountType = [0, 1, 6, 7].indexOf(category) !== -1 ? 'netRentAmount' : 'grossRentAmount'

  if(rentAmountType === 'netRentAmount') {
    label = this.langObjHandler({ pl: 'Miesięczna cena netto', en: 'Monthly Net Price'})
  }

  return {
    classNames: { container: 'form-input text with-icon rent-amount' },
    value: this.props[rentAmountType],
    children: <>
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.coins} />
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
    </>,
    type: 'number',
    label,
    onChange: value => changeInputs({ [rentAmountType]: value }),
    onBlur: () => {
      this.getRentAmounts()
      sendGaEvent(RENT_INPUTTED_EVENT)
    }
  }
}

export function rentCurrencyManager() {
  const { rentCurrency: value, scalableVectorGraphics } = this.props
  const currencies = [
    { value: 0, text: 'zł' },
    { value: 1, text: '€' },
    { value: 2, text: '$' }
  ]

  return {
    classNames: { container: 'form-input select rent-currency' },
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />,
    value,
    options: currencies,
    onSelect: ({ value: optionValue }) => {
      this.onSelectHandler('rentCurrency', optionValue)
      sendGaEvent(RENT_CURRENCY_SELECTED_EVENT)
    }
  }
}

export function roomsManager() {
  const {
    icon,
    create: text
  } = inputs.rooms

  const { category, scalableVectorGraphics } = this.props

  let label = this.langObjHandler(text)

  if (category === 2) label = this.langObjHandler({ pl: 'Liczba pokoi', en: 'Rooms Amount' })

  return {
    classNames: { container: 'form-input with-icon select' },
    children: <>
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.door_open} />
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
    </>,
    value: this.props.rooms,
    label,
    options: numberOptionsProvider(99),
    onSelect: (option) => {
      this.onSelectHandler('rooms', option.value)
      sendGaEvent(ROOMS_INPUTTED_EVENT)
    }
  }
}

export function floorManager() {
  const {
    icon,
    create: text
  } = inputs.floor

  const {
    scalableVectorGraphics
  } = this.props

  return {
    classNames: { container: 'form-input with-icon select' },
    children: <>
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.layers} />
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
    </>,
    value: this.props.floor,
    label: this.langObjHandler(text),
    options: this.floorsProvider(),
    onSelect: (option) => {
      this.onSelectHandler('floor', option.value)
      sendGaEvent(FLOOR_INPUTTED_EVENT)
    }
  }
}

export function totalFloorsManager() {
  const {
    icon,
    create: text
  } = inputs.totalFloors

  const {
    scalableVectorGraphics
  } = this.props

  return {
    classNames: { container: 'form-input with-icon select' },
    children: <>
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.building} />
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.pen} />
    </>,
    value: this.props.totalFloors,
    label: this.langObjHandler(text),
    options: numberOptionsProvider(99),
    onSelect: (option) => {
      this.onSelectHandler('totalFloors', option.value)
      sendGaEvent(TOTAL_FLOORS_INPUTTED_EVENT)
    }
  }
}
