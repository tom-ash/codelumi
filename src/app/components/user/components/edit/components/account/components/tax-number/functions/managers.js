import { handleLanguageVersions } from '../../../../../../../../../functions/shared.js'
import { changetaxNumber } from './adapters'
const noError = { pl: '', en: '' }

export function textManager() {
  return {
    id: 'user-edit-account-tax-identification-text',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: handleLanguageVersions(this.props.language, {
      pl: 'numer identyfikacji podatkowej (NIP)',
      en: 'tax identification number'
    }),
    onChange: () => this.props.changeErrors({ taxNumber: noError }),
    onBlur: (value) => this.textManager().validate(value),
    validate: (value) => {
      if (value.length < 10) {
        this.props.changeErrors({ taxNumber: {
          pl: 'nieprawidłowy numer identyfikacji podatkowej',
          en: 'invalid tax identification number' }
        })
        return false
      }
      return true
    },
    error: handleLanguageVersions(this.props.language, {
      pl: this.props.error.pl,
      en: this.props.error.en
    })
  }
}

export function buttonManager() {
  return {
    classNames: { container: 'form-input button' },
    label: handleLanguageVersions(this.props.language, { pl: 'Zmień', en: 'Change' }),
    onClick: () => {
      const taxNumber = document.getElementById('user-edit-account-tax-identification-text').value
      if (!this.textManager().validate(taxNumber)) return
      changetaxNumber.call(this, taxNumber)
    },
    error: ''
  }
}
