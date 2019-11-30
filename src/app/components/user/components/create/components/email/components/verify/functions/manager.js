import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import WindmillSpinner from '../../../../../../../../support/components/spinner/components/windmill/windmill.js'

export function verificationManager() {
  const { icon, label } = inputs.verification

  return {
    id: 'user-create-email-verification',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    children: <i className={icon} />,
    onChange: () => this.props.changeErrors({ verification: { polish: '', english: '' }}),
    onBlur: (value) => this.verificationManager().validate(value),
    validate: () => {
      const verificationCode = document.getElementById('user-create-email-verification').value
      if (verificationCode.length !== 8) {
        this.props.changeErrors({
          verification: {
            polish: 'kod weryfikacyjny musi składać się z 8 znaków',
            english: 'the verification code must consist of 8 characters'
          }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.verification)
  }
}

export function buttonManager() {
  const { connecting } = this.props
  
  return {
    classNames: { container: 'form-input button' },
    label: connecting ? <WindmillSpinner spinnerClass='very-small-windmill-spinner'/> : this.languageHandler('Dalej', 'Next'),
    onClick: () => this.verify()
  }
}