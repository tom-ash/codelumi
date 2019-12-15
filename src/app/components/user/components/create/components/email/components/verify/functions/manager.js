import React from 'react'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'

export function verificationManager() {
  const { icon } = inputs.verification
  const { changeErrors, verification } = this.props

  return {
    id: 'user-create-email-verification',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    children: <i className={icon} />,
    onChange: () => changeErrors({ verification: { pl: '', en: '' }}),
    onBlur: (value) => this.verificationManager().validate(value),
    validate: () => {
      const verificationCode = document.getElementById('user-create-email-verification').value
      if (verificationCode.length !== 8) {
        changeErrors({
          verification: {
            pl: 'kod weryfikacyjny musi składać się z 8 znaków',
            en: 'the verification code must consist of 8 characters'
          }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(verification)
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Dalej', en: 'Next' }}
        languageObjectHandler={this.languageObjectHandler}
      />
    ),
    onClick: () => this.verify()
  }
}