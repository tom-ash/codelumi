import React from 'react'
import { connect } from 'react-redux'
import { ManagedCheckbox } from 'managed-inputs'
import * as mappers from './constants/mappers'
import * as managers from './functions/managers'
import { termsValidator, privacyValidator } from './functions/validators'
import { containerClassHandler } from './functions/conteiner-class-handler'
import { errorTextProvider } from './functions/error-text-provider'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import './styles/styles.scss'

class UserCreateConsents extends React.Component {
  constructor(props) {
    super(props)
    this.termsOfServiceManager = managers.termsOfServiceManager.bind(this)
    this.privacyPolicyManager = managers.privacyPolicyManager.bind(this)
    this.containerClassHandler = containerClassHandler.bind(this)
    this.errorTextProvider = errorTextProvider.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.termsValidator = termsValidator.bind(this)
    this.privacyValidator = privacyValidator.bind(this)
  }

  render() {
    return (
      <div id='user-create-consents-container'>
        <div className={this.containerClassHandler()}>
          <ManagedCheckbox manager={this.termsOfServiceManager}/>
          <ManagedCheckbox manager={this.privacyPolicyManager}/>
        </div>
        <div className='error'>
          {this.errorTextProvider()}
        </div>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateConsents);
