import React from 'react'
import { connect } from 'react-redux'
import { prepareUserAccount } from './functions/adapters'
import * as mappers from './constants/mappers'
import * as inputValidators from '../inputs/functions/validators'
import * as consentValidators from '../../../consents/functions/validators'
import './styles/styles.scss'
import { languageHandler } from '../../../../../../../../functions/language-handler'
import { errorSetter } from '../../../../../../functions/error-setter'

class UserCreateSubmit extends React.Component {
  constructor(props) {
    super(props)
    this.prepareUserAccount = prepareUserAccount.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.businesstNameValidator = inputValidators.businesstNameValidator.bind(this)
    this.phoneValidator = inputValidators.phoneValidator.bind(this)
    this.emailValidator = inputValidators.emailValidator.bind(this)
    this.passwordValidator = inputValidators.passwordValidator.bind(this)
    this.termsValidator = consentValidators.termsValidator.bind(this)
    this.privacyValidator = consentValidators.privacyValidator.bind(this)
    this.errorSetter = errorSetter.bind(this)
  }

  render() {
    return (
      <div id='user-create-email-submit'>
        <button
        className='button'
        onClick={this.prepareUserAccount}>
          {this.languageHandler('Dalej', 'Next')}
        </button>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateSubmit);
