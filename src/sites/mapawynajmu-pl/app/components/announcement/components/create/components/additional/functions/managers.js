import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import { numberOptionsProvider } from '../../../../../../../functions/shared'
import SVG from '../../../../../../support/components/svg/svg'
import sendGaEvent from '../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  RENT_INPUTTED_EVENT,
  RENT_CURRENCY_SELECTED_EVENT,
  ROOMS_INPUTTED_EVENT,
  FLOOR_INPUTTED_EVENT,
  TOTAL_FLOORS_INPUTTED_EVENT,
} = analyticEvents

export function rentAmountManager() {
  const { create: text } = inputs.rentHeight

  const { category, changeInputs } = this.props

  let label = this.langHandler(text)

  const rentAmountType = [0, 1, 6, 7].indexOf(category) !== -1 ? 'netRentAmount' : 'grossRentAmount'

  if (rentAmountType === 'netRentAmount') {
    label = this.langHandler({ pl: 'Miesięczna cena netto', en: 'Monthly Net Price' })
  }

  return {
    classNames: { container: 'text-input rent-amount' },
    value: this.props[rentAmountType],
    children: <SVG name='coins' />,
    type: 'number',
    label,
    onChange: value => changeInputs({ [rentAmountType]: value }),
    onBlur: () => {
      sendGaEvent(RENT_INPUTTED_EVENT)
    },
  }
}

export function rentCurrencyManager() {
  const { rentCurrency: value } = this.props
  const currencies = [
    { value: 0, text: 'zł' },
    { value: 1, text: '€' },
    { value: 2, text: '$' },
  ]

  return {
    classNames: { container: 'select-element rent-currency' },
    children: <SVG name='chevron' />,
    value,
    options: currencies,
    onSelect: ({ value: optionValue }) => {
      this.onSelectHandler('rentCurrency', optionValue)
      sendGaEvent(RENT_CURRENCY_SELECTED_EVENT)
    },
  }
}

export function roomsManager() {
  const { icon, create: text } = inputs.rooms

  const { category } = this.props

  let label = this.langHandler(text)

  if (category === 2) label = this.langHandler({ pl: 'Liczba pokoi', en: 'Rooms Amount' })

  return {
    classNames: { container: 'select-element' },
    children: (
      <>
        <SVG name='doorOpen' />
        <SVG name='chevron' />
      </>
    ),
    value: this.props.rooms,
    label,
    options: numberOptionsProvider(99),
    onSelect: option => {
      this.onSelectHandler('rooms', option.value)
      sendGaEvent(ROOMS_INPUTTED_EVENT)
    },
  }
}

export function floorManager() {
  const { icon, create: text } = inputs.floor

  return {
    classNames: { container: 'select-element' },
    children: (
      <>
        <SVG name='layers' />
        <SVG name='chevron' />
      </>
    ),
    value: this.props.floor,
    label: this.langHandler(text),
    options: this.floorsProvider(),
    onSelect: option => {
      this.onSelectHandler('floor', option.value)
      sendGaEvent(FLOOR_INPUTTED_EVENT)
    },
  }
}

export function totalFloorsManager() {
  const { icon, create: text } = inputs.totalFloors

  return {
    classNames: { container: 'select-element' },
    children: (
      <>
        <SVG name='building' />
        <SVG name='chevron' />
      </>
    ),
    value: this.props.totalFloors,
    label: this.langHandler(text),
    options: numberOptionsProvider(99),
    onSelect: option => {
      this.onSelectHandler('totalFloors', option.value)
      sendGaEvent(TOTAL_FLOORS_INPUTTED_EVENT)
    },
  }
}
