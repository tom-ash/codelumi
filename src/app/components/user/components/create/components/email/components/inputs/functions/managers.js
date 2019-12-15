import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'

export function businessNameManager() {
  const { icon, label } = inputs.businessName

  return {
    id: 'user-create-email-business-name',
    autoComplete: 'off',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.errorResetter('businessName'),
    onBlur: (value) => this.businessNameManager().validate(value),
    validate: (value) => this.businesstNameValidator(value),
    error: this.languageObjectHandler(this.props.businessNameError)
  }
}

export function areaCodeManager() {
  const {
    icon,
    label
  } = inputs.phone

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

  const input = inputs.phone
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
