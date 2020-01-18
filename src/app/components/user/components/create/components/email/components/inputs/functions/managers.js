import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'

export function accountTypeManager() {
  const { changeInputs } = this.props

  const privateAccount = (
    <div className='account-type'>
      {this.languageObjectHandler({ pl: 'Osoba prywatna', en: 'Private Person' })} <i className="far fa-question-circle" />
    </div>
  )

  const professionalAccount = (
    <div className='account-type'>
      {this.languageObjectHandler({ pl: 'Profesjonalne', en: 'Professional' })} <i className="far fa-question-circle" />
    </div>
  )

  const { icon, label } = inputs.accountType

  const { accountType } = this.props

  return {
    onFocusCoverZIndex: 3001,
    id: 'user-create-email-account-type',
    children: <i className={icon} />,
    classNames: { container: 'form-input select'},
    label: this.languageObjectHandler(label),
    value: accountType,
    options: [
      { value: 'private', text: privateAccount },
      { value: 'professional', text: professionalAccount }
    ],
    onBlur: () => this.accountTypeManager().validate(),
    validate: () => this.accountTypeValidator(accountType),
    onSelect: option => {
      this.errorResetter('firstName')
      this.errorResetter('lastName')
      this.errorResetter('businessName')
      this.errorResetter('accountType')
      changeInputs({ accountType: option.value })
    },
    error: this.languageObjectHandler(this.props.accountTypeError)
  }
}

export function firstNameManager() {
  const { accountType } = this.props
  const { icon, label } = inputs.firstName

  return {
    display: accountType === 'private' ? undefined : 'none',
    id: 'user-create-email-first-name',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.errorResetter('firstName'),
    onBlur: (value) => this.firstNameManager().validate(value),
    validate: value => this.nameValidator('firstName', value),
    error: this.languageObjectHandler(this.props.firstNameError)
  }
}

export function lastNameManager() {
  const { accountType } = this.props
  const { icon, label } = inputs.lastName

  return {
    display: accountType === 'private' ? undefined : 'none',
    id: 'user-create-email-last-name',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.errorResetter('lastName'),
    onBlur: value => this.lastNameManager().validate(value),
    validate: value => this.nameValidator('lastName', value),
    error: this.languageObjectHandler(this.props.lastNameError)
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
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.errorResetter('businessName'),
    onBlur: (value) => this.businessNameManager().validate(value),
    validate: (value) => this.nameValidator('businessName', value),
    error: this.languageObjectHandler(this.props.businessNameError)
  }
}

export function areaCodeManager() {
  return {
    onFocusCoverZIndex: 3001,
    id: 'user-create-email-area-code',
    children: <i className='fas fa-globe-europe' />,
    classNames: { container: 'form-input select phone-country-code'},
    value: this.props.phoneCode,
    options: [ { value: '+48', text: '+48' }, { value: '+1', text: '+1' }, { value: '+44', text: '+44' } ],
    onSelect: (option) => this.props.changeInputs({ phoneCode: option.value })
  }
}

export function phoneNumberManager() {
  const {
    icon,
    label
  } = inputs.phone

  return {
    id: 'user-create-email-phone-number',
    autoComplete: 'off',
    type: 'tel',
    controlled: false,
    classNames: { container: 'form-input text phone-body'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.errorResetter('phone'),
    onBlur: (value) => this.phoneNumberManager().validate(value),
    validate: (value) => this.phoneValidator(value),
    error: this.languageObjectHandler(this.props.phoneError)
  }
}

export function emailAddressManager() {
  const {
    icon,
    label
  } = inputs.email

  const input = inputs.email
  return {
    id: 'user-create-email-email-address',
    autoComplete: 'off',
    type: 'email',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.errorResetter('email'),
    onBlur: (value) => this.emailAddressManager().validate(value),
    validate: (value) => this.emailValidator(value),
    error: this.languageObjectHandler(this.props.emailError)
  }
}

export function passwordManager() {
  const {
    icon,
    label
  } = inputs.password

  const input = inputs.password
  return {
    id: 'user-create-email-password',
    autoComplete: 'new-password',
    type: 'password',
    controlled: false,
    autoComplete: 'new-password',
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.errorResetter('password'),
    onBlur: (value) => this.passwordManager().validate(value),
    validate: (value) => this.passwordValidator(value),
    error: this.languageObjectHandler(this.props.passwordError)
  }
}
