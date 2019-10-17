const noError = { polish: '', english: '' }

export function verificationManager() {
  return {
    id: 'user-edit-phone-verification-code',
    controlled: false,
    classNames: { container: 'form-input text'},
    label: this.languageHandler('kod weryfikacyjny', 'verification code'),
    onFocus: () => this.props.changeErrors({ phoneVerification: noError }),
    onBlur: (value) => this.verificationManager().validate(value),
    validate: (value) => {
      if (value.length === 8) return true
      this.props.changeErrors({
        phoneVerification: {
          polish: 'nieprawidłowy kod weryfikacyjny',
          english: 'invalid verification code'
        }
      })
      return false
    },
    error: this.languageObjectHandler(this.props.error)
  }
}

export function buttonManager(aspect) {
  return {
    classNames: { container: 'form-input button'},
    label: this.languageHandler('Dalej', 'Next'),
    onClick: () => this.sendVerification()
  }
}



