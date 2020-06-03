import React from 'react'
import { changePhone } from './adapters'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'

const noError = { pl: '', en: '' }

export function phoneCodeManager() {
  const { icon } = inputs.phoneCode

  return {
    controlled: false,
    classNames: { container: 'form-input select country-code' },
    value: this.props.phoneCode,
    options: [{ value: '+48', text: '+48' }, { value: '+1', text: '+1' }, { value: '+44', text: '+44' }],
    onSelect: (option) => this.props.changeInputs({ phoneCode: option.value })
  }
}

export function bodyManager() {
  const { changeErrors } = this.props
  const { icon, label } = inputs.phone

  return {
    id: 'user-edit-account-phone-number-body',
    type: 'tel',
    controlled: false,
    classNames: { container: 'form-input text phone-body' },
    label: this.languageObjectHandler(label),
    onChange: (value) => {
      if (/^\d*$/.test(value)) {
        changeErrors({ phone: noError })
      } else {
        document.getElementById('user-edit-account-phone-number-body').value = value.slice(0, -1)
      }
    },
    onBlur: value => this.bodyManager().validate(value),
    validate: value => {
      if (value.length < 9) {
        changeErrors({ phone: { pl: 'Nieprawidłowy numer telefonu.', en: 'Invalid phone number.' } })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.error)
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'form-input button' },
    label: (
      <ButtonSpinner
        connecting={connecting}
        label={{ pl: 'Zmień', en: 'Change' }}
        languageObjectHandler={this.languageObjectHandler}
      />
    ),
    onClick: () => {
      const phoneCode = this.props.phoneCode
      const body = document.getElementById('user-edit-account-phone-number-body').value
      if (!this.bodyManager().validate(body)) return
      changePhone.call(this, phoneCode, body)
    }
  }
}