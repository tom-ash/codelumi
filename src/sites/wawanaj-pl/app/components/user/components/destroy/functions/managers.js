import React from 'react'
import ButtonSpinner from '../../../../support/components/button-spinner/button-spinner'
import { destroy } from './adapters'
import { inputs } from '../../../constants/inputs'
const noError = { pl: '', en: '' }

export function verificationManager() {
  const { changeErrors } = this.props
  const { icon, label } = inputs.verification

  return {
    id: 'user-destroy-verification',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.langObjHandler(label),
    children: <i className={icon} />,
    onChange: () => changeErrors({ verification: noError }),
    onBlur: value => this.verificationManager().validate(value),
    validate: value => {
      if (value.length < 4) {
        changeErrors({
          verification: { pl: 'Nieprawidłowy kod weryfikacyjny.', en: 'Invalid verification code.' }
        })
        return false
      }
      return true
    },
    error: this.langObjHandler(this.props.error)
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    id: 'user-destroy-button',
    classNames: { container: 'form-input button destroy' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Usuń konto', en: 'Delete Account' }}
        langObjHandler={this.langObjHandler}
      />
    ),
    onClick: () => destroy.call(this)
  }
}
