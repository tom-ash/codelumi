import React from 'react'
import { connect } from 'react-redux'
import { prepareUserAccount } from './functions/adapters'
import * as mappers from './constants/mappers'
import * as inputValidators from '../inputs/functions/validators'
import * as consentValidators from '../../../consents/functions/validators'
import { langHandler, langObjHandler } from '../../../../../../../../functions/lang-handler'
import { errorSetter } from '../../../../../../functions/error-setter'
import { buttonManager } from './functions/managers'
import { ManagedButton } from 'managed-inputs'

class UserCreateSubmit extends React.Component {
  constructor(props) {
    super(props)
    this.prepareUserAccount = prepareUserAccount.bind(this)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.accountTypeValidator = inputValidators.accountTypeValidator.bind(this)
    this.nameValidator = inputValidators.nameValidator.bind(this)
    this.phoneValidator = inputValidators.phoneValidator.bind(this)
    this.emailValidator = inputValidators.emailValidator.bind(this)
    this.passwordValidator = inputValidators.passwordValidator.bind(this)
    this.termsAndPrivacyConsentValidator = consentValidators.termsAndPrivacyConsentValidator.bind(this)
    this.errorSetter = errorSetter.bind(this)
    this.buttonManager = buttonManager.bind(this)
  }

  render() {
    return (
      <div id='user-create-email-submit'>
        <div className='separation-line' />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateSubmit);
