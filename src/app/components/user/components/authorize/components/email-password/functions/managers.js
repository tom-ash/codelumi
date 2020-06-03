import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../support/components/button-spinner/button-spinner'
import { emailValidator } from '../../../../../../../functions/email-validator'

const noError = { pl: '', en: '' }

export function emailAddressManager() {
  const { icon, label } = inputs.email

  return {
    id: 'user-logon-email-address',
    controlled: false,
    classNames: { container: 'form-input text email'},
    label: this.languageObjectHandler(label),
    onChange: () => this.props.changeErrors({ emailOrPassword: noError }),
    onBlur: (value) => this.emailAddressManager().validate(value),
    validate: (value) => {
      if (!emailValidator(value).isValid) {
        this.props.changeErrors({
          emailOrPassword: {
            pl: 'nieprawidłowy adres email lub hasło', en: 'invalid email address and/or password'
          }
        })
      }
    },
    error: this.languageHandler(this.props.emailOrPasswordError.pl, this.props.emailOrPasswordError.en)
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
    onChange: () => this.props.changeErrors({ emailOrPassword: noError, email: noError }),
    onBlur: (value) => this.passwordManager().validate(value),
    validate: ((value) => {
      if (value.length < 1) {
        this.props.changeErrors({
          emailOrPassword: {
            pl: 'nieprawidłowy adres email lub hasło', en: 'invalid email address and/or password'
          }
        })
        return false
      }
      return true
    }),
    error: this.languageHandler(this.props.emailOrPasswordError.pl, this.props.emailOrPasswordError.en)
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
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Zaloguj', en: 'Sign In' }}
        languageObjectHandler={this.languageObjectHandler}
      />
    ),
    onClick: this.logIn
  }
}
