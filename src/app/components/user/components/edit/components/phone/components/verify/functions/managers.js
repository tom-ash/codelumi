import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
const noError = { polish: '', english: '' }
import WindmillSpinner from '../../../../../../../../support/components/spinner/components/windmill/windmill.js'

export function verificationManager() {
  const { label, icon } = inputs.verification

  return {
    id: 'user-edit-phone-verification-code',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageObjectHandler(label),
    children: <i className={icon} />,
    onFocus: () => this.props.changeErrors({ phoneVerification: noError }),
    onBlur: (value) => this.verificationManager().validate(value),
    validate: (value) => {
      if (value.length === 8) return true
      this.props.changeErrors({
        phoneVerification: {
          polish: 'nieprawidłowy kod weryfikacyjny',
          english: 'invalid verification code'
        }
      })
      return false
    },
    error: this.languageObjectHandler(this.props.error)
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button'},
    label: connecting ? <WindmillSpinner spinnerClass='very-small-windmill-spinner'/> : this.languageHandler('Zweryfikuj', 'Verify'),
    onClick: () => {
      if (connecting) return

      this.sendVerification()
    }
  }
}
