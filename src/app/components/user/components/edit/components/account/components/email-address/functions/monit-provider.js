import * as monits from '../constants/monits'

export function monitProvider() {
  switch (this.props.step) {
    case 'currentEmailVerification':
      return this.props.language === 'polish' ? monits.currentEmailVerification.polish : monits.currentEmailVerification.english
    case 'newEmail':
      return this.props.language === 'polish' ? monits.newEmail.polish : monits.newEmail.english
    case 'newEmailVerification':
      return this.props.language === 'polish' ? monits.newEmailVerification.polish : monits.newEmailVerification.english
    case 'password':
      return this.props.language === 'polish' ? monits.password.polish : monits.password.english   
    case 'success':
      return this.props.language === 'polish' ? monits.success.polish : monits.success.english
    default:
      break;
  }
}