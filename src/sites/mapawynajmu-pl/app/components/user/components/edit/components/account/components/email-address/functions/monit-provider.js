import * as monits from '../constants/monits'

export function monitProvider() {
  switch (this.props.step) {
    case 'currentEmailVerification':
      return this.props.lang === 'pl' ? monits.currentEmailVerification.pl : monits.currentEmailVerification.en
    case 'newEmail':
      return this.props.lang === 'pl' ? monits.newEmail.pl : monits.newEmail.en
    case 'newEmailVerification':
      return this.props.lang === 'pl' ? monits.newEmailVerification.pl : monits.newEmailVerification.en
    case 'password':
      return this.props.lang === 'pl' ? monits.password.pl : monits.password.en   
    case 'success':
      return this.props.lang === 'pl' ? monits.success.pl : monits.success.en
    default:
      break;
  }
}