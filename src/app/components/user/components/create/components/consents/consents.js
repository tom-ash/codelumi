import React from 'react'
import { connect } from 'react-redux'
import { ManagedCheckbox } from 'managed-inputs'
import { termsAndPrivacyConsentValidator } from './functions/validators'
import { containerClassHandler } from './functions/conteiner-class-handler'
import { errorTextProvider } from './functions/error-text-provider'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import * as mappers from './constants/mappers'
import * as managers from './functions/managers'
import { textProvider } from './functions/text-provider'
import './styles/styles.scss'

class UserCreateConsents extends React.Component {
  constructor(props) {
    super(props)
    this.termsAndPrivacyConsentManager = managers.termsAndPrivacyConsentManager.bind(this)
    this.containerClassHandler = containerClassHandler.bind(this)
    this.errorTextProvider = errorTextProvider.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.termsAndPrivacyConsentValidator = termsAndPrivacyConsentValidator.bind(this)
    this.textProvider = textProvider.bind(this)
  }

  render() {
    return (
      <div id='user-create-consents-container'>
        <div className={this.containerClassHandler()}>
          <ManagedCheckbox {...this.termsAndPrivacyConsentManager()}/>
        </div>
        <div className='error'>
          {this.errorTextProvider()}
        </div>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateConsents);
