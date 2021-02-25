import React from 'react'
import { noError } from '../constants/no-error'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'
import { emailValidator } from '../../../../../../../../../functions/email-validator'
import SVG from '../../../../../../../../support/components/svg/svg'

export function emailManager() {
  const { label, icon } = inputs.email
  const { step, changeErrors, error } = this.props
  
  return {
    id: 'user-edit-password-email',
    display: step === null ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input with-icon text' },
    label: this.langObjHandler(label),
    children: <SVG name='envelope' />,
    onChange: () => changeErrors({ password: noError }),
    onBlur: value => this.emailManager().validate(value),
    validate: value => {
      const { isValid, error } = emailValidator(value)
      if (isValid) return

      changeErrors({ password: error })
    },
    error: this.langObjHandler(error)
  }
}

export function verificationManager() {
  const {
    step,
    changeErrors
  } = this.props

  const { label } = inputs.verification

  return {
    id: 'user-edit-password-verification',
    display: step === 'verificationCode' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input with-icon text' },
    label: this.langObjHandler(label),
    children: <SVG name='lock' />,
    onChange: () => changeErrors({ password: noError }),
    onBlur: value => this.verificationManager().validate(value),
    validate: value => {
      if (value.length === 4) return true
      changeErrors({
        password: { pl: 'Nieprawidłowy kod weryfikacyjny.', en: 'Invalid verification code.' }
      })
      return false
    },
    error: this.langObjHandler(this.props.error)
  }
}

export function passwordManager() {
  const { step, changeErrors } = this.props
  const { label, icon } = inputs.password

  return {
    id: 'user-edit-password',
    display: step === 'password' ? 'block' : 'none',
    controlled: false,
    type: 'password',
    autoComplete: 'new-password',
    classNames: { container: 'form-input with-icon text' },
    label: this.langObjHandler(label),
    children: <SVG name='lock' />,
    onChange: () => changeErrors({ password: noError }),
    onBlur: value => this.passwordManager().validate(value),
    validate: value => {
      if (value.length > 5) return true

      changeErrors({
        password: {
          pl: 'hasło musi mieć przynajmniej sześć znaków',
          en: 'the password has to be at least six characters long'
        }
      })
      return false
    },
    error: this.langObjHandler(this.props.error)
  }
}

export function buttonManager() {
  const { step, connecting } = this.props

  return {
    display: step === 'success' ? 'none' : 'block',
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={buttonTextProvider.call(this)}
        langObjHandler={this.langObjHandler}
      />
    ),
    onClick: buttonOnClickProvider.call(this)
  }
}

function buttonOnClickProvider() {
  const { connecting, step, changeErrors } = this.props

  if (connecting) return
  
  switch (step) {
    case null: return () => {
      const value = document.getElementById('user-edit-password-email').value
      const { isValid, error } = emailValidator(value)
      if (isValid) return this.sendEmail()
      changeErrors({ password: error })
    }
    case 'verificationCode': return this.sendVerification
    case 'password': return this.sendPassword
  }
}

function buttonTextProvider() {
  const { step } = this.props

  if (step === 'password') return { pl: 'Zmień', en: 'Change' }

  return { pl: 'Dalej', en: 'Next' }
}
