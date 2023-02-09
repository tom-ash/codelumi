import React from 'react'
import { noError } from '../constants/no-error'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinnerDeprecated from '../../../../../../../../support/components/button-spinner/button-spinner'
import { emailValidator } from '../../../../../../../../../functions/email-validator'
import SVG from '../../../../../../../../support/components/svg/svg'

export function emailManager() {
  const { label, icon } = inputs.email
  const { step, setErrors, error } = this.props

  return {
    id: 'user-edit-password-email',
    display: step === null ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    label: this.langHandler(label),
    children: <SVG name='envelope' />,
    onChange: () => setErrors({ password: noError }),
    onBlur: value => this.emailManager().validate(value),
    validate: value => {
      const { isValid, error } = emailValidator(value)
      if (isValid) return

      setErrors({ password: error })
    },
    error: this.langHandler(error),
  }
}

export function verificationManager() {
  const { step, setErrors } = this.props

  const { label } = inputs.verification

  return {
    id: 'user-edit-password-verification',
    display: step === 'verificationCode' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    label: this.langHandler(label),
    children: <SVG name='lock' />,
    onChange: () => setErrors({ password: noError }),
    onBlur: value => this.verificationManager().validate(value),
    validate: value => {
      if (value.length === 4) return true
      setErrors({
        password: { pl: 'Nieprawidłowy kod weryfikacyjny.', en: 'Invalid verification code.' },
      })
      return false
    },
    error: this.langHandler(this.props.error),
  }
}

export function passwordManager() {
  const { step, setErrors } = this.props
  const { label, icon } = inputs.password

  return {
    id: 'user-edit-password',
    display: step === 'password' ? 'block' : 'none',
    controlled: false,
    type: 'password',
    autoComplete: 'new-password',
    classNames: { container: 'text-input' },
    label: this.langHandler(label),
    children: <SVG name='lock' />,
    onChange: () => setErrors({ password: noError }),
    onBlur: value => this.passwordManager().validate(value),
    validate: value => {
      if (value.length > 5) return true

      setErrors({
        password: {
          pl: 'hasło musi mieć przynajmniej sześć znaków',
          en: 'the password has to be at least six characters long',
        },
      })
      return false
    },
    error: this.langHandler(this.props.error),
  }
}

export function buttonManager() {
  const { step, connecting } = this.props

  return {
    display: step === 'success' ? 'none' : 'block',
    classNames: { container: 'submit-button' },
    label: (
      <ButtonSpinnerDeprecated
        connecting={connecting}
        label={buttonTextProvider.call(this)}
        langHandler={this.langHandler}
      />
    ),
    onClick: buttonOnClickProvider.call(this),
  }
}

function buttonOnClickProvider() {
  const { connecting, step, setErrors } = this.props

  if (connecting) return

  switch (step) {
    case null:
      return () => {
        const value = document.getElementById('user-edit-password-email').value
        const { isValid, error } = emailValidator(value)
        if (isValid) return this.sendEmail()
        setErrors({ password: error })
      }
    case 'verificationCode':
      return this.sendVerification
    case 'password':
      return this.sendPassword
  }
}

function buttonTextProvider() {
  const { step } = this.props

  if (step === 'password') return { pl: 'Zmień', en: 'Change' }

  return { pl: 'Dalej', en: 'Next' }
}
