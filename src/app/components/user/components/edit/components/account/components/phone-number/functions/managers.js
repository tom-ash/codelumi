import { handleLanguageVersions } from '../../../../../../../../../functions/shared.js'
import { changePhone } from './adapters'

const noError = { polish: '', english: '' }

export function countryCodeManager() {
  return {
    controlled: false,
    classNames: { container: 'form-input select country-code' },
    value: this.props.countryCode,
    options: [{ value: '+48', text: '+48' }, { value: '+1', text: '+1' }, { value: '+44', text: '+44' }],
    onSelect: (option) => this.props.changeInputs({ phoneCountryCode: option.value })
  }
}

export function bodyManager() {
  return {
    id: 'user-edit-account-phone-number-body',
    type: 'tel',
    controlled: false,
    classNames: { container: 'form-input text phone-body' },
    label: handleLanguageVersions(this.props.language, {
      polish: 'numer telefonu',
      english: 'phone number'
    }),
    onChange: (value) => {
      if (/^\d*$/.test(value)) {
        // TODO
      } else {
        document.getElementById('user-edit-account-phone-number-body').value = value.slice(0, -1)
      }
    },
    onBlur: (value) => this.bodyManager().validate(value),
    validate: (value) => {
      return true
    },
    error: handleLanguageVersions(this.props.language, this.props.error)
  }
}

export function buttonManager() {
  return {
    classNames: { container: 'form-input button' },
    label: 'Zmień',
    onClick: () => {
      const countryCode = this.props.countryCode
      const body = document.getElementById('user-edit-account-phone-number-body').value
      if (!this.bodyManager().validate(body)) return
      changePhone.call(this, countryCode, body)
    }
  }
}