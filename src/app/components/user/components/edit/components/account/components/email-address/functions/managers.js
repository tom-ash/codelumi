const noError = { pl: '', en: '' }
import { verificationCodeValidator } from '../../../../../../../functions/verification-code-validator'
import { emailValidator } from '../../../../../../../../../functions/email-validator'
import { passwordValidator } from '../../../../../../../functions/password-validator'

export function currentEmailVerificationManager() {
  const {
    languageHandler,
    languageObjectHandler,
    currentEmailVerificationManager: thisManager,
    props
  } = this
  const {
    step,
    changeErrors,
    currentEmailVerificationError: error
  } = props

  return {
    id: 'user-edit-email-current-verification',
    display: step === 'currentEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: {
      container: 'form-input text'
    },
    label: languageHandler('Kod weryfikacyjny', 'Verification code'),
    onChange: () => changeErrors({
      currentEmailVerification: noError
    }),
    onBlur: value => thisManager().validate(value),
    validate: (value) => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      changeErrors({ currentEmailVerification: error })
    },
    error: languageObjectHandler(error)
  }
}

export function newEmailManager() {
  const {
    languageHandler,
    languageObjectHandler,
    newEmailManager: thisManager,
    props
  } = this
  const {
    step,
    changeErrors,
    newEmailError: error
  } = props

  return {
    id: 'user-edit-email-new',
    display: step === 'newEmail' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: languageHandler('Nowy adres email', 'New Email Address'),
    onChange: () => changeErrors({ newEmail: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = emailValidator(value)
      if (isValid) return
      changeErrors({ newEmail: error })
    },
    error: languageObjectHandler(error)
  }
}

export function newEmailVerificationManager() {
  const {
    languageHandler,
    languageObjectHandler,
    newEmailVerificationManager: thisManager,
    props
  } = this
  const {
    step,
    changeErrors,
    newEmailVerificationError: error
  } = props

  return {
    id: 'user-edit-email-new-verification',
    display: step === 'newEmailVerification' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    label: languageHandler('Kod weryfikacyjny', 'Verification Code'),
    onChange: () => changeErrors({ newEmailVerification: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return
      changeErrors({ newEmailVerification: error })
    },
    error: languageObjectHandler(error)
  }
}

export function passwordManager() {
  const {
    languageHandler,
    languageObjectHandler,
    passwordManager: thisManager,
    props
  } = this
  const {
    step,
    changeErrors,
    newEmailPasswordError: error
  } = props

  return {
    id: 'user-edit-email-password',
    display: step == 'password' ? 'block' : 'none',
    controlled: false,
    classNames: { container: 'form-input text' },
    type: 'password',
    autoComplete: 'new-password',
    label: languageHandler('Hasło', 'Password'),
    onChange: () => changeErrors({ newEmailPassword: noError }),
    onBlur: value => thisManager().validate(value),
    validate: value => {
      const { isValid, error } = passwordValidator(value)
      if (isValid) return
      changeErrors({ newEmailPassword: error })
    },
    error: languageObjectHandler(error)
  }
}

export function buttonManager(aspect) {
  return {
    id: 'user-edit-email-button',
    display: this.props.step === 'success' ? 'none' : 'block',
    classNames: { container: 'form-input button' },
    label: this.props.language === 'pl' ? 'Dalej' : 'Next',
    onClick: buttonOnClickProvider.call(this)
  }
}

function buttonOnClickProvider() {
  const {
    connecting,
    step,
    changeErrors
  } = this.props

  if (connecting) return

  switch (step) {
    case 'currentEmailVerification': return () => {
      const value = document.getElementById('user-edit-email-current-verification').value
      const { isValid, error } = verificationCodeValidator(value)
      if (isValid) return this.sendCurrentEmailVerification(value)
      changeErrors({ currentEmailVerification: error })
    }
    case 'newEmail': return () => {
      const newEmail = document.getElementById('user-edit-email-new').value
      const { isValid, error } = emailValidator(newEmail)
      if (isValid) return this.sendNewEmail(newEmail)
      changeErrors({ newEmail: error })
    }
    case 'newEmailVerification': return () => {
      const newEmailVerification = document.getElementById('user-edit-email-new-verification').value
      const { isValid, error } = verificationCodeValidator(newEmailVerification)
      if (isValid) return this.sendNewEmailVerification(newEmailVerification)
      changeErrors({ newEmailVerification: error }) 
    }
    case 'password': return () => {
      const password = document.getElementById('user-edit-email-password').value
      const { isValid, error } = passwordValidator(password)
      if (isValid) return this.sendPassword(password)
      changeErrors({ newEmailPassword: error })
    }
  }
}