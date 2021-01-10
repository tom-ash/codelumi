import * as monits from '../constants/monits'

export function monitProvider() {
  switch (this.props.step) {
    case null: return this.langObjHandler(monits.emailAddress)
    case 'verificationCode': return this.langObjHandler(monits.verificationCode)
    case 'password': return this.langObjHandler(monits.password)
    case 'success': return this.langObjHandler(monits.success)
    default: break
  }
}