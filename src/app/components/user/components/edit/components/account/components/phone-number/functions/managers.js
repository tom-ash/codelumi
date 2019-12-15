import { handleLanguageVersions } from '../../../../../../../../../functions/shared.js'
import { changePhone } from './adapters'

const noError = { pl: '', en: '' }

export function phoneCodeManager() {
  return {
    controlled: false,
    classNames: { container: 'form-input select country-code' },
    value: this.props.phoneCode,
    options: [{ value: '+48', text: '+48' }, { value: '+1', text: '+1' }, { value: '+44', text: '+44' }],
    onSelect: (option) => this.props.changeInputs({ phoneCode: option.value })
  }
}

export function bodyManager() {
  return {
    id: 'user-edit-account-phone-number-body',
    type: 'tel',
    controlled: false,
    classNames: { container: 'form-input text phone-body' },
    label: handleLanguageVersions(this.props.language, {
      pl: 'numer telefonu',
      en: 'phone number'
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
      const phoneCode = this.props.phoneCode
      const body = document.getElementById('user-edit-account-phone-number-body').value
      if (!this.bodyManager().validate(body)) return
      changePhone.call(this, phoneCode, body)
    }
  }
}