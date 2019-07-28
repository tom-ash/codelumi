import * as monits from '../constants/monits'

export function monitProvider() {
  switch (this.props.step) {
    case null: return this.languageObjectHandler(monits.emailAddress)
    case 'verificationCode': return this.languageObjectHandler(monits.verificationCode)
    case 'password': return this.languageObjectHandler(monits.password)
    case 'success': return this.languageObjectHandler(monits.success)
    default: break
  }
}