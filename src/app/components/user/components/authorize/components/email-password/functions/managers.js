import { managerAgent } from 'managed-inputs'
import { emailAddressValidator } from '../../../../../functions/shared'
import { inputs } from '../../../../../constants/inputs'

const noError = { polish: '', english: '' }

export function emailAddressManager(action, value) {
  const input = inputs.email
  return managerAgent(action, {
    id: 'user-logon-email-address',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.labelProvider(input.icon, input.label),
    onChange: () => this.props.changeErrors({ emailOrPassword: noError, email: noError }),
    onBlur: () => this.emailAddressManager('validate', value),
    validate: () => {
      emailAddressValidator.call(this, value, 'changeErrors', {
        email: { polish: 'nieprawidłowy adres email', english: 'invalid email address' }
      })
    },
    error: (() => {
      if (this.props.emailError.polish) {
        return this.languageHandler(this.props.emailError.polish, this.props.emailError.english)
      }
      return this.languageHandler(this.props.emailOrPasswordError.polish, this.props.emailOrPasswordError.english)
    })()
  })
}

export function passwordManager(action, value) {
  const input = inputs.password
  return managerAgent(action, {
    id: 'user-logon-password',
    type: 'password',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.labelProvider(input.icon, input.label),
    onChange: () => this.props.changeErrors({ emailOrPassword: noError, email: noError }),
    onBlur: () => this.passwordManager('validate', value),
    validate: (() => {
      if (value.length < 1) return false
      return true
    }),
    error: this.languageHandler(this.props.emailOrPasswordError.polish, this.props.emailOrPasswordError.english)
  })
}

export function rememberMeManager(aspect, value) {
  return managerAgent(aspect, {
    classNames: { container: 'form-input checkbox'},
    checked: this.props.rememberMe,
    label: this.languageHandler('Zapamiętaj mnie', 'Remember me'),
    onClick: () => this.props.changeInputs({ rememberMe: !this.props.rememberMe })
  })
}
