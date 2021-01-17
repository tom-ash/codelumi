import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import ScalableVectorGraphic from '../../../../../../../../support/components/scalable-vector-graphic/scalable-vector-graphic'
import { sendGaEvent } from '../../../../../../../../../functions/google-analytics/send-ga-event'
import analyticEvents from '../constants/analytics/events'

const {
  ACCOUNT_TYPE_SELECTED_EVENT,
  EMAIL_ADDRESS_INPUTTED_EVENT,
  PASSWORD_INPUTTED_EVENT,
  FIRST_NAME_INPUTTED_EVENT,
  BUSINESS_NAME_INPUTTED_EVENT,
  AREA_CODE_SELECTED_EVENT,
  PHONE_NUMBER_INPUTTED_EVENT
} = analyticEvents

export function accountTypeManager() {
  const { changeInputs } = this.props

  const privateAccount = (
    <div className='account-type'>
      {this.langObjHandler({ pl: 'Prywatne', en: 'Private' })}
    </div>
  )

  const professionalAccount = (
    <div className='account-type'>
      {this.langObjHandler({ pl: 'Firmowe', en: 'Business' })}
    </div>
  )

  const { accountType } = this.props

  return {
    name: 'announcement-category',
    classNames: { container: 'form-input radio'},
    checked: accountType,
    radios: [
      { value: 'private', label: privateAccount },
      { value: 'professional', label: professionalAccount }
    ],
    onClick: value => {
      this.errorResetter('firstName')
      this.errorResetter('businessName')
      this.errorResetter('accountType')
      changeInputs({ accountType: value })
      sendGaEvent(ACCOUNT_TYPE_SELECTED_EVENT)
    }
  }
}

export function emailAddressManager() {
  const { scalableVectorGraphics } = this.props
  const { label } = inputs.email

  const input = inputs.email
  return {
    id: 'user-create-email-email-address',
    classNames: { container: 'form-input with-icon text' },
    type: 'email',
    autoComplete: 'email',
    controlled: false,
    label: this.langObjHandler(label),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.envelope} />,
    onFocus: () => this.errorResetter('email'),
    onBlur: value => {
      this.emailAddressManager().validate(value)
      sendGaEvent(EMAIL_ADDRESS_INPUTTED_EVENT)
    },
    validate: value => this.emailValidator(value),
    error: this.langObjHandler(this.props.emailError)
  }
}

export function passwordManager() {
  const { scalableVectorGraphics } = this.props
  const { label } = inputs.password

  const input = inputs.password
  return {
    id: 'user-create-email-password',
    classNames: { container: 'form-input with-icon text' },
    type: 'password',
    autoComplete: 'new-password',
    controlled: false,
    label: this.langObjHandler(label),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.lock} />,
    onFocus: () => this.errorResetter('password'),
    onBlur: value => {
      this.passwordManager().validate(value)
      sendGaEvent(PASSWORD_INPUTTED_EVENT)
    },
    validate: value => this.passwordValidator(value),
    error: this.langObjHandler(this.props.passwordError)
  }
}

export function firstNameManager() {
  const {
    accountType,
    scalableVectorGraphics
  } = this.props
  const { icon, label } = inputs.firstName

  return {
    display: accountType === 'private' ? undefined : 'none',
    classNames: { container: 'form-input with-icon text' },
    id: 'user-create-email-first-name',
    autoComplete: 'given-name',
    controlled: false,
    label: this.langObjHandler(label),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.user} />,
    onFocus: () => this.errorResetter('firstName'),
    onBlur: value => {
      this.firstNameManager().validate(value)
      sendGaEvent(FIRST_NAME_INPUTTED_EVENT)
    },
    validate: value => this.nameValidator('firstName', value),
    error: this.langObjHandler(this.props.firstNameError)
  }
}

export function businessNameManager() {
  const {
    accountType,
    scalableVectorGraphics
  } = this.props
  const { icon, label } = inputs.businessName

  return {
    display: accountType === 'professional' ? undefined : 'none',
    id: 'user-create-email-business-name',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.langObjHandler(label),
    onFocus: () => this.errorResetter('businessName'),
    onBlur: value => {
      this.businessNameManager().validate(value)
      sendGaEvent(BUSINESS_NAME_INPUTTED_EVENT)
    },
    validate: value => this.nameValidator('businessName', value),
    error: this.langObjHandler(this.props.businessNameError)
  }
}

export function areaCodeManager() {
  const {
    scalableVectorGraphics
  } = this.props

  return {
    onFocusCoverZIndex: 3001,
    id: 'user-create-email-area-code',
    classNames: { container: 'form-input with-icon select phone-country-code' },
    children: <>
      {/* <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.phone} /> */}
      <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.chevron} />
    </>,
    value: this.props.phoneCode,
    options: [ { value: '+48', text: '+48' }, { value: '+1', text: '+1' }, { value: '+44', text: '+44' } ],
    onSelect: (option) => {
      this.props.changeInputs({ phoneCode: option.value })
      sendGaEvent(AREA_CODE_SELECTED_EVENT)
    }
  }
}

export function phoneNumberManager() {
  const {
    scalableVectorGraphics
  } = this.props

  const {
    icon,
    label
  } = inputs.phone

  return {
    id: 'user-create-email-phone-number',
    autoComplete: 'tel-local',
    match: /^(\d){0,9}$/,
    type: 'tel',
    controlled: false,
    classNames: { container: 'form-input text with-icon phone-body'},
    label: this.langObjHandler(label),
    children: <ScalableVectorGraphic pathData={scalableVectorGraphics && scalableVectorGraphics.phone} />,
    onFocus: () => this.errorResetter('phone'),
    onBlur: value => {
      this.phoneNumberManager().validate(value)
      sendGaEvent(PHONE_NUMBER_INPUTTED_EVENT)
    },
    validate: value => this.phoneValidator(value),
    error: this.langObjHandler(this.props.phoneError)
  }
}


