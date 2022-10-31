import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import SVG from '../../../../../../../../support/components/svg/svg'
import sendGaEvent from '../../../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'
import { accountTypeValidator, nameValidator, phoneValidator, emailValidator, passwordValidator } from './validators.js'
import errorResetter from './error-resetter.js'
import { countryCodes } from '../constants/country-codes'

const {
  ACCOUNT_TYPE_SELECTED_EVENT,
  EMAIL_ADDRESS_INPUTTED_EVENT,
  PASSWORD_INPUTTED_EVENT,
  FIRST_NAME_INPUTTED_EVENT,
  BUSINESS_NAME_INPUTTED_EVENT,
  AREA_CODE_SELECTED_EVENT,
  PHONE_NUMBER_INPUTTED_EVENT,
} = analyticEvents

export function accountTypeManager() {
  const { changeInputs } = this.props

  const privateAccount = <div className='account-type'>{this.langHandler({ pl: 'Prywatne', en: 'Private' })}</div>

  const professionalAccount = <div className='account-type'>{this.langHandler({ pl: 'Firmowe', en: 'Business' })}</div>

  const { accountType } = this.props

  return {
    name: 'announcement-category',
    classNames: { container: 'form-element radio' },
    checked: accountType,
    radios: [
      { value: 'private', label: privateAccount },
      { value: 'professional', label: professionalAccount },
    ],
    onClick: value => {
      errorResetter.call(this, 'firstName')
      errorResetter.call(this, 'businessName')
      errorResetter.call(this, 'accountType')
      changeInputs({ accountType: value })
      sendGaEvent(ACCOUNT_TYPE_SELECTED_EVENT)
    },
  }
}

export function emailAddressManager() {
  const { label } = inputs.email
  const { email: value, changeInputs } = this.props

  return {
    classNames: { container: 'text-input with-icon' },
    type: 'email',
    autoComplete: 'email',
    label: this.langHandler(label),
    value: value || '',
    onFocus: () => errorResetter.call(this, 'email'),
    onBlur: value => {
      this.emailAddressManager().validate(value)
      sendGaEvent(EMAIL_ADDRESS_INPUTTED_EVENT)
    },
    onChange: value => changeInputs({ email: value }),
    validate: value => emailValidator.call(this, value),
    error: this.langHandler(this.props.emailError),
  }
}

export function passwordManager() {
  const { label } = inputs.password

  return {
    id: 'user-create-email',
    classNames: { container: 'text-input with-icon' },
    type: 'password',
    autoComplete: 'new-password',
    controlled: false,
    label: this.langHandler(label),
    // children: <SVG name='lock' />,
    onFocus: () => errorResetter.call(this, 'password'),
    onBlur: value => {
      this.passwordManager().validate(value)
      sendGaEvent(PASSWORD_INPUTTED_EVENT)
    },
    validate: value => passwordValidator.call(this, value),
    error: this.langHandler(this.props.passwordError),
  }
}

export function firstNameManager() {
  const { accountType } = this.props
  const { icon, label } = inputs.firstName

  return {
    display: accountType === 'private' ? undefined : 'none',
    classNames: { container: 'text-input with-icon' },
    id: 'user-create-email-first-name',
    autoComplete: 'given-name',
    controlled: false,
    label: this.langHandler(label),
    // children: <SVG name='user' />,
    onFocus: () => errorResetter.call(this, 'firstName'),
    onBlur: value => {
      this.firstNameManager().validate(value)
      sendGaEvent(FIRST_NAME_INPUTTED_EVENT)
    },
    validate: value => nameValidator.call(this, 'firstName', value),
    error: this.langHandler(this.props.firstNameError),
  }
}

export function businessNameManager() {
  const { accountType } = this.props
  const { icon, label } = inputs.businessName

  return {
    display: accountType === 'professional' ? undefined : 'none',
    id: 'user-create-email-business-name',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'form-element text' },
    label: this.langHandler(label),
    onFocus: () => errorResetter.call(this, 'businessName'),
    onBlur: value => {
      this.businessNameManager().validate(value)
      sendGaEvent(BUSINESS_NAME_INPUTTED_EVENT)
    },
    validate: value => nameValidator.call(this, 'businessName', value),
    error: this.langHandler(this.props.businessNameError),
  }
}

export function areaCodeManager() {
  const options = countryCodes.map(countryCode => ({
    value: countryCode,
    text: countryCode,
  }))

  return {
    onFocusCoverZIndex: 3001,
    id: 'user-create-email-area-code',
    classNames: { container: 'select-element country-code' },
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

  return {
    id: 'user-create-email-phone-number',
    autoComplete: 'tel-local',
    match: /^(\d){0,9}$/,
    type: 'tel',
    controlled: false,
    classNames: { container: 'text-input phone-number' },
    label: this.langHandler(label),
    onFocus: () => errorResetter.call(this, 'phone'),
    onBlur: value => {
      this.phoneNumberManager().validate(value)
      sendGaEvent(PHONE_NUMBER_INPUTTED_EVENT)
    },
    validate: value => phoneValidator.call(this, value),
    error: this.langHandler(this.props.phoneError),
  }
}
