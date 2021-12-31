import React from 'react'
import { inputs } from '../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../support/components/button-spinner/button-spinner'
import { emailValidator } from '../../../../../../../functions/email-validator'
import SVG from '../../../../../../support/components/svg/svg'

const noError = { pl: '', en: '' }

export function emailAddressManager() {
  const { label } = inputs.email

  return {
    id: 'user-logon-email-address',
    classNames: { container: 'form-input text with-icon email'},
    autoComplete: 'email',
    controlled: false,
    label: this.langHandler(label),
    children: <SVG name='envelope' />,
    onChange: () => this.props.changeErrors({ emailOrPassword: noError }),
    onBlur: value => this.emailAddressManager().validate(value),
    validate: value => {
      if (!emailValidator(value).isValid) {
        this.props.changeErrors({
          emailOrPassword: {
            pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.'
          }
        })
      }
    },
    error: this.langHandler({ pl: this.props.emailOrPasswordError.pl, en: this.props.emailOrPasswordError.en })
  }
}

export function passwordManager() {
  const { label } = inputs.password

  return {
    id: 'user-logon-password',
    autoComplete: 'current-password',
    type: 'password',
    controlled: false,
    classNames: { container: 'form-input text with-icon password'},
    label: this.langHandler(label),
    children: <SVG name='lock' />,
    onChange: () => this.props.changeErrors({ emailOrPassword: noError, email: noError }),
    onBlur: value => this.passwordManager().validate(value),
    validate: (value => {
      if (value.length < 1) {
        this.props.changeErrors({
          emailOrPassword: {
            pl: 'Nieprawidłowy adres email lub hasło.', en: 'Invalid email address and/or password.'
          }
        })
        return false
      }
      return true
    }),
    error: this.langHandler({ pl: this.props.emailOrPasswordError.pl, en: this.props.emailOrPasswordError.en })
  }
}

export function rememberMeManager() {
  const { rememberMe } = this.props

  return {
    classNames: { container: 'form-input checkbox'},
    checked: this.props.rememberMe,
    label: this.langHandler({ pl: 'Zapamiętaj mnie', en: 'Remember me' }),
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
        langHandler={this.langHandler}
      />
    ),
    onClick: this.logIn
  }
}
