import React from 'react'
import ButtonSpinnerDeprecated from '../../../../support/components/button-spinner/button-spinner'
import { destroy } from './adapters'
import { inputs } from '../../../constants/inputs'
const noError = { pl: '', en: '' }

export function verificationManager() {
  const { setErrors } = this.props
  const { icon, label } = inputs.verification

  return {
    id: 'user-destroy-verification',
    controlled: false,
    classNames: { container: 'text-input' },
    label: this.langHandler(label),
    children: <i className={icon} />,
    onChange: () => setErrors({ verification: noError }),
    onBlur: value => this.verificationManager().validate(value),
    validate: value => {
      if (value.length < 4) {
        setErrors({
          verification: { pl: 'Nieprawidłowy kod weryfikacyjny.', en: 'Invalid verification code.' },
        })
        return false
      }
      return true
    },
    error: this.langHandler(this.props.error),
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    id: 'user-destroy-button',
    classNames: { container: 'submit-button' },
    label: (
      <ButtonSpinnerDeprecated
        connecting={connecting}
        label={{ pl: 'Usuń konto', en: 'Delete Account' }}
        langHandler={this.langHandler}
      />
    ),
    onClick: () => destroy.call(this),
  }
}
