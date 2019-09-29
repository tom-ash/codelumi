import { handleLanguageVersions } from '../../../../../../../../../functions/shared.js'
import { changeTaxIdentification } from './adapters'
const noError = { polish: '', english: '' }

export function textManager() {
  return {
    id: 'user-edit-account-tax-identification-text',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: handleLanguageVersions(this.props.language, {
      polish: 'numer identyfikacji podatkowej (NIP)',
      english: 'tax identification number'
    }),
    onChange: () => this.props.changeErrors({ taxIdentification: noError }),
    onBlur: (value) => this.textManager().validate(value),
    validate: (value) => {
      if (value.length < 10) {
        this.props.changeErrors({ taxIdentification: {
          polish: 'nieprawidłowy numer identyfikacji podatkowej',
          english: 'invalid tax identification number' }
        })
        return false
      }
      return true
    },
    error: handleLanguageVersions(this.props.language, {
      polish: this.props.error.polish,
      english: this.props.error.english
    })
  }
}

export function buttonManager() {
  return {
    classNames: { container: 'form-input button' },
    label: handleLanguageVersions(this.props.language, { polish: 'Zmień', english: 'Change' }),
    onClick: () => {
      const taxIdentification = document.getElementById('user-edit-account-tax-identification-text').value
      if (!this.textManager().validate(taxIdentification)) return
      changeTaxIdentification.call(this, taxIdentification)
    },
    error: ''
  }
}
