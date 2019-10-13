import { noError } from '../constants/no-error'
import { inputs } from '../../../../../../../constants/inputs'
import { emailValidator } from '../../../../../../../../../functions/email-validator'

export function emailManager() {
  const input = inputs.email
  const { step, connecting, changeErrors, error } = this.props
  return {
    id: 'user-edit-password-email',
    display: step === null && !connecting ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.labelProvider(input.icon, input.label),
    onChange: () => changeErrors({ password: noError }),
    onBlur: value => this.emailManager().validate(value),
    validate: value => {
      const { isValid, error } = emailValidator(value)
      if (isValid) return
      changeErrors({ password: error })
    },
    error: this.languageObjectHandler(error)
  }
}

export function verificationManager() {
  const input = inputs.verification
  return {
    id: 'user-edit-password-verification',
    display: this.props.step === 'verificationCode' && !this.props.connecting ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.labelProvider(input.icon, input.label),
    onChange: () => this.props.changeErrors({ password: noError }),
    onBlur: (value) => this.verificationManager().validate(value),
    validate: (value) => {
      if (value.length === 8) return true
      this.props.changeErrors({
        password: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
      })
      return false
    },
    error: this.languageObjectHandler(this.props.error)
  }
}

export function passwordManager() {
  const input = inputs.password
  return {
    id: 'user-edit-password',
    display: this.props.step === 'password' && !this.props.connecting ? 'block' : 'none',
    controlled: false,
    type: 'password',
    autoComplete: 'new-password',
    classNames: { container: 'form-input text' },
    label: this.labelProvider(input.icon, input.label),
    onChange: () => this.props.changeErrors({ password: noError }),
    onBlur: (value) => this.passwordManager().validate(value),
    validate: (value) => {
      if (value.length > 5) return true
      this.props.changeErrors({
        password: {
          polish: 'hasło musi mieć przynajmniej sześć znaków',
          english: 'the password has to be at least six characters long'
        }
      })
      return false
    },
    error: this.languageObjectHandler(this.props.error)
  }
}

export function buttonManager() {
  return {
    display: this.props.step !== 'success' && !this.props.connecting ? 'block' : 'none',
    classNames: { container: 'form-input button' },
    label: buttonTextProvider.call(this),
    onClick: buttonOnClickProvider.call(this)
  }
}

function buttonOnClickProvider() {
  if (this.props.connecting) return
  switch (this.props.step) {
    case null: return () => {
      const value = document.getElementById('user-edit-password-email').value
      const { isValid, error } = emailValidator(value)
      if (isValid) return this.sendEmail()
      this.props.changeErrors({ password: error })
    }
    case 'verificationCode': return this.sendVerification
    case 'password': return this.sendPassword
  }
}

function buttonTextProvider() {
  if (this.props.step === 'password') return this.languageHandler('Zmień', 'Change')
  return this.languageHandler('Dalej', 'Next')
}
