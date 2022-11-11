import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinnerDeprecated from '../../../../../../../../support/components/button-spinner/button-spinner'

import { verificationCodeValidator } from '../../../../../../../functions/verification-code-validator'
import { emailValidator } from '../../../../../../../../../functions/email-validator'
import { passwordValidator } from '../../../../../../../functions/password-validator'

const noError = { pl: '', en: '' }

export function currentEmailVerificationManager() {
  const { langHandler, currentEmailVerificationManager: thisManager, props } = this
  const { step, changeErrors, currentEmailVerificationError: error, connecting } = props
  const { icon, label } = inputs.verification

  return {
    id: 'user-edit-email-current-verification',
    display: step === 'currentEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    children: <i className={icon} />,
    label: langHandler(label),
    onChange: () => changeErrors({ currentEmailVerification: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      changeErrors({ currentEmailVerification: error })
    },
    error: langHandler(error),
  }
}

export function newEmailManager() {
  const { langHandler, newEmailManager: thisManager, props } = this
  const { step, changeErrors, newEmailError: error } = props
  const { icon, label } = inputs.email

  return {
    id: 'user-edit-email-new',
    display: step === 'newEmail' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    children: <i className={icon} />,
    label: langHandler(label),
    onChange: () => changeErrors({ newEmail: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = emailValidator(value)
      if (isValid) return
      changeErrors({ newEmail: error })
    },
    error: langHandler(error),
  }
}

export function newEmailVerificationManager() {
  const { langHandler, newEmailVerificationManager: thisManager, props } = this
  const { step, changeErrors, newEmailVerificationError: error } = props
  const { icon, label } = inputs.verification

  return {
    id: 'user-edit-email-new-verification',
    display: step === 'newEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'text-input' },
    children: <i className={icon} />,
    label: langHandler(label),
    onChange: () => changeErrors({ newEmailVerification: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      changeErrors({ newEmailVerification: error })
    },
    error: langHandler(error),
  }
}

export function passwordManager() {
  const { langHandler, passwordManager: thisManager, props } = this
  const { step, changeErrors, newEmailPasswordError: error } = props
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
    onChange: () => changeErrors({ newEmailPassword: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = passwordValidator(value)
      if (isValid) return
      changeErrors({ newEmailPassword: error })
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
  const { connecting, step, changeErrors } = this.props

  if (connecting) return

  switch (step) {
    case 'currentEmailVerification':
      return () => {
        const verificationCode = document.getElementById('user-edit-email-current-verification').value
        const { isValid, error } = verificationCodeValidator(verificationCode)
        if (isValid) return this.sendCurrentEmailVerification(verificationCode)
        changeErrors({ currentEmailVerification: error })
      }
    case 'newEmail':
      return () => {
        const email = document.getElementById('user-edit-email-new').value
        const { isValid, error } = emailValidator(email)
        if (isValid) return this.sendNewEmail(email)
        changeErrors({ newEmail: error })
      }
    case 'newEmailVerification':
      return () => {
        const verificationCode = document.getElementById('user-edit-email-new-verification').value
        const { isValid, error } = verificationCodeValidator(verificationCode)
        if (isValid) return this.sendNewEmailVerification(verificationCode)
        changeErrors({ newEmailVerification: error })
      }
    case 'password':
      return () => {
        const password = document.getElementById('user-edit-email-password').value
        const { isValid, error } = passwordValidator(password)
        if (isValid) return this.sendPassword(password)
        changeErrors({ newEmailPassword: error })
      }
  }
}
