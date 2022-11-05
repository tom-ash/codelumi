import React from 'react'
import { changePhone } from './adapters'
import SVG from '../../../../../../../../support/components/svg/svg'
import { inputs } from '../../../../../../../constants/inputs'
import ButtonSpinner from '../../../../../../../../support/components/button-spinner/button-spinner'
import { countryCodes } from '../../../../../../../../../../../shared/shared/constants/country-codes'

const noError = { pl: '', en: '' }

export function phoneCodeManager() {

  console.log(this.props)

  return {
    controlled: false,
    classNames: { container: 'select-input country-code' },
    children: <SVG name='chevron' />,
    value: this.props.countryCode,
    options: countryCodes.map(countryCode => (
      { value: countryCode, text: countryCode }
    )),
    onSelect: option => this.props.changeInputs({ countryCode: option.value }),
  }
}

export function bodyManager() {
  const { changeErrors } = this.props
  const { label } = inputs.phone

  return {
    id: 'user-edit-account-phone-number-body',
    type: 'tel',
    controlled: false,
    classNames: { container: 'text-input phone-body' },
    label: this.langHandler(label),
    onChange: value => {
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
    error: this.langHandler(this.props.error),
  }
}

export function buttonManager() {
  const { connecting } = this.props

  return {
    classNames: { container: 'submit-button' },
    label: (
      <ButtonSpinner connecting={connecting} label={{ pl: 'Zmień', en: 'Change' }} langHandler={this.langHandler} />
    ),
    onClick: () => {
      const countryCode = this.props.countryCode
      const body = document.getElementById('user-edit-account-phone-number-body').value
      if (!this.bodyManager().validate(body)) return
      changePhone.call(this, countryCode, body)
    },
  }
}
