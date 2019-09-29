import { handleLanguageVersions } from '../../../../../../../../../functions/shared.js'
import { changeBusinessName } from './adapters'

const noError = { polish: '', english: '' }

export function textManager() {
  return {
    id: 'user-edit-account-business-name-text',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: handleLanguageVersions(this.props.language, {
      polish: 'nazwa',
      english: 'business name'
    }),
    onChange: () => this.props.changeErrors({ businessName: noError }),
    onBlur: (value) => this.textManager().validate(value),
    validate: (value) => {
      if (value.length < 1) {
        this.props.changeErrors({
          businessName: { polish: 'nazwa nie moze być pusta', english: "the business name can't be blank" }
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
    label: handleLanguageVersions(this.props.language, {
      polish: 'Zmień',
      english: 'Change'
    }),
    onClick: () => {
      const businessName = document.getElementById('user-edit-account-business-name-text').value
      if (!this.textManager().validate(businessName)) return
      changeBusinessName.call(this, businessName)
    }
  }
}