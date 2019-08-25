import { managerAgent } from 'managed-inputs'

export function verificationManager(aspect, value) {
  return managerAgent(aspect, {
    id: 'user-create-email-verification',
    controlled: false,
    classNames: { container: 'input-container text'},
    label: this.languageHandler('Kod weryfikacyjny', 'Verification Code'),
    onChange: () => this.props.changeCreate({ verification: { polish: '', english: '' }}),
    onBlur: () => this.verificationManager('validate', value),
    validate: () => {
      const verificationCode = document.getElementById('user-create-email-verification').value
      if (verificationCode.length !== 8) {
        this.props.changeCreate({
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
  })
}

export function buttonManager(action) {
  return managerAgent(action, {
    classNames: { container: 'button' },
    label: this.languageHandler('Dalej', 'Next'),
    onClick: () => this.verify()
  })
}