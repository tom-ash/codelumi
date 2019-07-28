import { managerAgent } from 'managed-inputs'
import { destroy } from './adapters'

const noError = { polish: '', english: '' }

export function verificationManager(action, value) {
  return managerAgent(action, {
    id: 'user-destroy-verification',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    onChange: () => this.props.changeErrors({ verification: noError }),
    onBlur: () => this.verificationManager('validate', value),
    validate: () => {
      if (value.length < 8) {
        this.props.changeErrors({
          verification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.error)
  })
}

export function buttonManager(action) {
  return managerAgent(action, {
    id: 'user-destroy-button',
    classNames: { container: 'form-input button' },
    label: this.languageHandler('Usuń konto', 'Delete account'),
    onClick: () => destroy.call(this)
  })
}