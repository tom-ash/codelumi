import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import SVG from '../../../../../../../../support/components/svg/svg'
import sendGaEvent from '../../../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'
import { countryCodes } from '../../../../../../../../../../../shared/shared/constants/country-codes'
import { EMPTY_LANG_OBJECT } from '../../../../../../../../../constants/lang-objects/empty'
import { phoneNumberValidator } from '../components/phone-number/phone-number.validator'

const { PASSWORD_INPUTTED_EVENT, AREA_CODE_SELECTED_EVENT, PHONE_NUMBER_INPUTTED_EVENT } =
  analyticEvents

export function areaCodeManager() {
  const options = countryCodes.map(countryCode => ({
    value: countryCode,
    text: countryCode,
    // key: countryCode
  }))

  return {
    onFocusCoverZIndex: 3001,
    id: 'user-create-email-area-code',
    classNames: { container: 'country-code' },
    children: <SVG name='chevron' />,
    value: this.props.countryCode,
    options,
    onSelect: option => {
      this.props.changeInputs({ countryCode: option.value })
      sendGaEvent(AREA_CODE_SELECTED_EVENT)
    },
  }
}

export function phoneNumberManager() {
  const { label } = inputs.phone
  const {
    dispatch
  } = this.props

  return {
    id: 'user-create-email-phone-number',
    autoComplete: 'tel-local',
    match: /^(\d){0,9}$/,
    type: 'tel',
    controlled: false,
    classNames: { container: 'text-input phone-number' },
    label: this.langHandler(label),
    placeholder: this.langHandler({ pl: 'Podaj numer telefonu', en: 'Provide phone number' }),
    onFocus: () => dispatch({
      type: 'user/create/errors',
      value: { phone: EMPTY_LANG_OBJECT }
    }),
    onBlur: (phoneNumber) => phoneNumberValidator({ phoneNumber, dispatch}),
    error: this.langHandler(this.props.phoneError),
  }
}
