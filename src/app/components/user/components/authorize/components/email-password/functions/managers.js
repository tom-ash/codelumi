import React from 'react'
import { emailAddressValidator } from '../../../../../functions/shared'
import { inputs } from '../../../../../constants/inputs'
import WindmillSpinner from '../../../../../../support/components/spinner/components/windmill/windmill.js'

const noError = { polish: '', english: '' }

export function emailAddressManager() {
  const { icon, label } = inputs.email

  return {
    id: 'user-logon-email-address',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onChange: () => this.props.changeErrors({ emailOrPassword: noError, email: noError }),
    onBlur: (value) => this.emailAddressManager().validate(value),
    validate: (value) => {
      emailAddressValidator.call(this, value, 'changeErrors', {
        email: { polish: 'nieprawidłowy adres email', english: 'invalid email address' }
      })
    },
    error: (() => {
      if (this.props.emailError.polish) {
        return this.languageHandler(this.props.emailError.polish, this.props.emailError.english)
      }
      return this.languageHandler(this.props.emailOrPasswordError.polish, this.props.emailOrPasswordError.english)
    })()
  }
}

export function passwordManager() {
  const { icon, label } = inputs.password

  return {
    id: 'user-logon-password',
    type: 'password',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onChange: () => this.props.changeErrors({ emailOrPassword: noError, email: noError }),
    onBlur: (value) => this.passwordManager().validate(value),
    validate: ((value) => {
      if (value.length < 1) return false
      return true
    }),
    error: this.languageHandler(this.props.emailOrPasswordError.polish, this.props.emailOrPasswordError.english)
  }
}

export function rememberMeManager() {
  const { rememberMe } = this.props

  return {
    classNames: { container: 'form-input checkbox'},
    checked: this.props.rememberMe,
    label: this.languageHandler('Zapamiętaj mnie', 'Remember me'),
    onClick: () => this.props.changeInputs({ rememberMe: !rememberMe })
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: connecting ? <WindmillSpinner spinnerClass='very-small-windmill-spinner'/> : this.languageHandler('Zaloguje', 'Sign in'),
    onClick: this.logIn
  }
}
