import { managerAgent } from 'managed-inputs'
import { handleLanguageVersions } from '../../../../../../../../../functions/shared.js'
const noError = { polish: '', english: '' }

export function currentEmailVerificationManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-edit-email-current-verification',
    display: this.props.step === 'currentEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification code'),
    onChange: () => this.props.changeErrors({ currentEmailVerification: noError }),
    onBlur: () => this.currentEmailVerificationManager('validate', value),
    validate: () => {
      if (value.length < 8) {
        this.props.changeErrors({
          currentEmailVerification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code'}
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.currentEmailVerificationError)
  })
}

export function newEmailAddressManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-edit-email-new',
    display: this.props.step === 'newEmail' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Nowy adres email', 'New Email Address'),
    onChange: () => this.props.changeErrors({ newEmail: noError }),
    onBlur: () => this.newEmailAddressManager('validate', value),
    validate: () => {
      if (value.length < 1) {
        this.props.changeErrors({
          newEmail: { polish: 'nieprawidłowy adres email', english: 'invalid email address' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.newEmailError)
  })
}

export function newEmailVerificationManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-edit-email-new-verification',
    display: this.props.step === 'newEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    onChange: () => this.props.changeErrors({ newEmailVerification: noError }),
    onBlur: () => this.newEmailVerificationManager('validate', value),
    validate: () => {
      if (value.length < 1) {
        this.props.changeErrors({
          newEmailVerification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.newEmailVerificationError)
  })
}

export function passwordManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-edit-email-password',
    display: this.props.step == 'password' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    type: 'password',
    autoComplete: 'new-password',
    label: this.languageHandler('Hasło', 'Password'),
    onChange: () => this.props.changeErrors({ newEmailPassword: noError }),
    onBlur: () => this.passwordManager('validate', value),
    validate: () => {
      if (value.length < 6) {
        this.props.changeErrors({
          newEmailPassword: { polish: 'nieprawidłowe hasło', english: 'invalid password' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.newEmailPasswordError)
  })
}

export function buttonManager(aspect) {
  return managerAgent(aspect, {
    id: 'user-edit-email-button',
    display: this.props.step === 'success' ? 'none' : 'block',
    classNames: { container: 'form-input button' },
    label: this.props.language === 'polish' ? 'Dalej' : 'Next',
    onClick: buttonOnClickProvider.call(this)
  })
}

function buttonOnClickProvider() {
  if (this.props.connecting) return
  switch (this.props.step) {
    case 'currentEmailVerification': return this.sendCurrentEmailVerification
    case 'newEmail': return this.sendNewEmailAddress
    case 'newEmailVerification': return this.sendNewEmailVerification
    case 'password': return this.sendPassword
  }
}