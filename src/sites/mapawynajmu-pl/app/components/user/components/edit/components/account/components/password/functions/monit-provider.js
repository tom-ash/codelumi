import * as monits from '../constants/monits'

export function monitProvider() {
  switch (this.props.step) {
    case null:
      return this.langHandler(monits.emailAddress)
    case 'verificationCode':
      return this.langHandler(monits.verificationCode)
    case 'password':
      return this.langHandler(monits.password)
    case 'success':
      return this.langHandler(monits.success)
    default:
      break
  }
}
