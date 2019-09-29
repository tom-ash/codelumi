const noError = { polish: '', english: '' }

export function currentEmailVerificationManager() {
  return {
    id: 'user-edit-email-current-verification',
    display: this.props.step === 'currentEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification code'),
    onChange: () => this.props.changeErrors({ currentEmailVerification: noError }),
    onBlur: (value) => this.currentEmailVerificationManager().validate(value),
    validate: (value) => {
      if (value.length < 8) {
        this.props.changeErrors({
          currentEmailVerification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code'}
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.currentEmailVerificationError)
  }
}

export function newEmailAddressManager() {
  return {
    id: 'user-edit-email-new',
    display: this.props.step === 'newEmail' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Nowy adres email', 'New Email Address'),
    onChange: () => this.props.changeErrors({ newEmail: noError }),
    onBlur: (value) => this.newEmailAddressManager().validate(value),
    validate: (value) => {
      if (value.length < 1) {
        this.props.changeErrors({
          newEmail: { polish: 'nieprawidłowy adres email', english: 'invalid email address' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.newEmailError)
  }
}

export function newEmailVerificationManager() {
  return {
    id: 'user-edit-email-new-verification',
    display: this.props.step === 'newEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    onChange: () => this.props.changeErrors({ newEmailVerification: noError }),
    onBlur: (value) => this.newEmailVerificationManager().validate(value),
    validate: (value) => {
      if (value.length < 1) {
        this.props.changeErrors({
          newEmailVerification: { polish: 'nieprawidłowy kod weryfikacyjny', english: 'invalid verification code' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.newEmailVerificationError)
  }
}

export function passwordManager() {
  return {
    id: 'user-edit-email-password',
    display: this.props.step == 'password' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    type: 'password',
    autoComplete: 'new-password',
    label: this.languageHandler('Hasło', 'Password'),
    onChange: () => this.props.changeErrors({ newEmailPassword: noError }),
    onBlur: (value) => this.passwordManager().validate(value),
    validate: (value) => {
      if (value.length < 6) {
        this.props.changeErrors({
          newEmailPassword: { polish: 'nieprawidłowe hasło', english: 'invalid password' }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.newEmailPasswordError)
  }
}

export function buttonManager(aspect) {
  return {
    id: 'user-edit-email-button',
    display: this.props.step === 'success' ? 'none' : 'block',
    classNames: { container: 'form-input button' },
    label: this.props.language === 'polish' ? 'Dalej' : 'Next',
    onClick: buttonOnClickProvider.call(this)
  }
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