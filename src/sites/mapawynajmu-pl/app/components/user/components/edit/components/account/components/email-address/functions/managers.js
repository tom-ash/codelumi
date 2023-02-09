import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinnerDeprecated from '../../../../../../../../support/components/button-spinner/button-spinner'

import { verificationCodeValidator } from '../../../../../../../functions/verification-code-validator'
import { emailValidator } from '../../../../../../../../../functions/email-validator'
import { passwordValidator } from '../../../../../../../functions/password-validator'

const noError = { pl: '', en: '' }

export function currentEmailVerificationManager() {
  const { langHandler, currentEmailVerificationManager: thisManager, props } = this
  const { step, setErrors, currentEmailVerificationError: error, connecting } = props
  const { icon, label } = inputs.verification

  return {
    id: 'user-edit-email-current-verification',
    display: step === 'currentEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    children: <i className={icon} />,
    label: langHandler(label),
    onChange: () => setErrors({ currentEmailVerification: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      setErrors({ currentEmailVerification: error })
    },
    error: langHandler(error),
  }
}

export function newEmailManager() {
  const { langHandler, newEmailManager: thisManager, props } = this
  const { step, setErrors, newEmailError: error } = props
  const { icon, label } = inputs.email

  return {
    id: 'user-edit-email-new',
    display: step === 'newEmail' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    children: <i className={icon} />,
    label: langHandler(label),
    onChange: () => setErrors({ newEmail: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = emailValidator(value)
      if (isValid) return
      setErrors({ newEmail: error })
    },
    error: langHandler(error),
  }
}

export function newEmailVerificationManager() {
  const { langHandler, newEmailVerificationManager: thisManager, props } = this
  const { step, setErrors, newEmailVerificationError: error } = props
  const { icon, label } = inputs.verification

  return {
    id: 'user-edit-email-new-verification',
    display: step === 'newEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    children: <i className={icon} />,
    label: langHandler(label),
    onChange: () => setErrors({ newEmailVerification: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      setErrors({ newEmailVerification: error })
    },
    error: langHandler(error),
  }
}

export function passwordManager() {
  const { langHandler, passwordManager: thisManager, props } = this
  const { step, setErrors, newEmailPasswordError: error } = props
  const { icon, label } = inputs.password

  return {
    id: 'user-edit-email-password',
    display: step == 'password' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    type: 'password',
    autoComplete: 'new-password',
    children: <i className={icon} />,
    label: langHandler(label),
    onChange: () => setErrors({ newEmailPassword: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = passwordValidator(value)
      if (isValid) return
      setErrors({ newEmailPassword: error })
    },
    error: langHandler(error),
  }
}

export function buttonManager() {
  const { step, connecting } = this.props

  return {
    id: 'user-edit-email-button',
    display: step === 'success' ? 'none' : 'block',
    classNames: { container: 'submit-button' },
    label: (
      <ButtonSpinnerDeprecated
        connecting={connecting}
        label={{ pl: 'Dalej', en: 'Next' }}
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
    case 'currentEmailVerification':
      return () => {
        const verificationCode = document.getElementById('user-edit-email-current-verification').value
        const { isValid, error } = verificationCodeValidator(verificationCode)
        if (isValid) return this.sendCurrentEmailVerification(verificationCode)
        setErrors({ currentEmailVerification: error })
      }
    case 'newEmail':
      return () => {
        const email = document.getElementById('user-edit-email-new').value
        const { isValid, error } = emailValidator(email)
        if (isValid) return this.sendNewEmail(email)
        setErrors({ newEmail: error })
      }
    case 'newEmailVerification':
      return () => {
        const verificationCode = document.getElementById('user-edit-email-new-verification').value
        const { isValid, error } = verificationCodeValidator(verificationCode)
        if (isValid) return this.sendNewEmailVerification(verificationCode)
        setErrors({ newEmailVerification: error })
      }
    case 'password':
      return () => {
        const password = document.getElementById('user-edit-email-password').value
        const { isValid, error } = passwordValidator(password)
        if (isValid) return this.sendPassword(password)
        setErrors({ newEmailPassword: error })
      }
  }
}
