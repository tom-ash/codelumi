import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'

import { verificationCodeValidator } from '../../../../../../../functions/verification-code-validator'
import { emailValidator } from '../../../../../../../../../functions/email-validator'
import { passwordValidator } from '../../../../../../../functions/password-validator'

const noError = { pl: '', en: '' }

export function currentEmailVerificationManager() {
  const { languageObjectHandler, currentEmailVerificationManager: thisManager, props } = this
  const { step, changeErrors, currentEmailVerificationError: error, connecting } = props
  const { icon, label } = inputs.verification

  return {
    id: 'user-edit-email-current-verification',
    display: step === 'currentEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    children: <i className={icon} />,
    label: languageObjectHandler(label),
    onChange: () => changeErrors({ currentEmailVerification: noError }),
    onBlur: value => thisManager().validate(value),
    validate: (value) => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      changeErrors({ currentEmailVerification: error })
    },
    error: languageObjectHandler(error)
  }
}

export function newEmailManager() {
  const { languageObjectHandler, newEmailManager: thisManager, props } = this
  const { step, changeErrors, newEmailError: error } = props
  const { icon, label } = inputs.email

  return {
    id: 'user-edit-email-new',
    display: step === 'newEmail' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    children: <i className={icon} />,
    label: languageObjectHandler(label),
    onChange: () => changeErrors({ newEmail: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = emailValidator(value)
      if (isValid) return
      changeErrors({ newEmail: error })
    },
    error: languageObjectHandler(error)
  }
}

export function newEmailVerificationManager() {
  const { languageObjectHandler, newEmailVerificationManager: thisManager, props } = this
  const { step, changeErrors, newEmailVerificationError: error } = props
  const { icon, label } = inputs.verification

  return {
    id: 'user-edit-email-new-verification',
    display: step === 'newEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    children: <i className={icon} />,
    label: languageObjectHandler(label),
    onChange: () => changeErrors({ newEmailVerification: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      changeErrors({ newEmailVerification: error })
    },
    error: languageObjectHandler(error)
  }
}

export function passwordManager() {
  const { languageObjectHandler, passwordManager: thisManager, props } = this
  const { step, changeErrors, newEmailPasswordError: error } = props
  const { icon, label } = inputs.password

  return {
    id: 'user-edit-email-password',
    display: step == 'password' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    type: 'password',
    autoComplete: 'new-password',
    children: <i className={icon} />,
    label: languageObjectHandler(label),
    onChange: () => changeErrors({ newEmailPassword: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = passwordValidator(value)
      if (isValid) return
      changeErrors({ newEmailPassword: error })
    },
    error: languageObjectHandler(error)
  }
}

export function buttonManager() {
  const { step, connecting } = this.props

  return {
    id: 'user-edit-email-button',
    display: step === 'success' ? 'none' : 'block',
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Dalej', en: 'Next' }}
        languageObjectHandler={this.languageObjectHandler}
      />
    ),
    onClick: buttonOnClickProvider.call(this)
  }
}

function buttonOnClickProvider() {
  const { connecting, step, changeErrors } = this.props

  if (connecting) return

  switch (step) {
    case 'currentEmailVerification': return () => {
      const value = document.getElementById('user-edit-email-current-verification').value
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return this.sendCurrentEmailVerification(value)
      changeErrors({ currentEmailVerification: error })
    }
    case 'newEmail': return () => {
      const newEmail = document.getElementById('user-edit-email-new').value
      const { isValid, error } = emailValidator(newEmail)
      if (isValid) return this.sendNewEmail(newEmail)
      changeErrors({ newEmail: error })
    }
    case 'newEmailVerification': return () => {
      const newEmailVerification = document.getElementById('user-edit-email-new-verification').value
      const { isValid, error } = verificationCodeValidator(newEmailVerification)
      if (isValid) return this.sendNewEmailVerification(newEmailVerification)
      changeErrors({ newEmailVerification: error }) 
    }
    case 'password': return () => {
      const password = document.getElementById('user-edit-email-password').value
      const { isValid, error } = passwordValidator(password)
      if (isValid) return this.sendPassword(password)
      changeErrors({ newEmailPassword: error })
    }
  }
}
