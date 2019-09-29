export function verificationManager() {
  return {
    id: 'user-create-email-verification',
    controlled: false,
    classNames: { container: 'input-container text' },
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    onChange: () => this.props.changeErrors({ verification: { polish: '', english: '' }}),
    onBlur: (value) => this.verificationManager().validate(value),
    validate: () => {
      const verificationCode = document.getElementById('user-create-email-verification').value
      if (verificationCode.length !== 8) {
        this.props.changeErrors({
          verification: {
            polish: 'kod weryfikacyjny musi składać się z 8 znaków',
            english: 'the verification code must consist of 8 characters'
          }
        })
        return false
      }
      return true
    },
    error: this.languageObjectHandler(this.props.verification)
  }
}

export function buttonManager() {
  return {
    classNames: { container: 'button' },
    label: this.languageHandler('Dalej', 'Next'),
    onClick: () => this.verify()
  }
}