import { destroy } from './adapters'

const noError = { pl: '', en: '' }

export function verificationManager() {
  return {
    id: 'user-destroy-verification',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    onChange: () => this.props.changeErrors({ verification: noError }),
    onBlur: (value) => this.verificationManager().validate(value),
    validate: (value) => {
      if (value.length < 8) {
        this.props.changeErrors({
          verification: { pl: 'nieprawidłowy kod weryfikacyjny', en: 'invalid verification code' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.error)
  }
}

export function buttonManager(action) {
  return {
    id: 'user-destroy-button',
    classNames: { container: 'form-input button' },
    label: this.languageHandler('Usuń konto', 'Delete account'),
    onClick: () => destroy.call(this)
  }
}
