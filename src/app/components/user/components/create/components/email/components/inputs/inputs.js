import React from 'react'
import { connect } from 'react-redux'
import { ManagedRadio, ManagedText, ManagedSelect } from 'managed-inputs'
import * as managers from './functions/managers'
import * as mappers from './constants/mappers'
import { langHandler } from '../../../../../../../../functions/lang-handler'
import { langObjHandler } from '../../../../../../../../functions/lang-handler'
import { errorSetter } from '../../../../../../functions/error-setter'
import { errorResetter } from './functions/error-resetter'
import * as validators from './functions/validators'
import { labelProvider } from '../../../../../../../../functions/providers/label'

class UserCreateEmailInputs extends React.Component {
  constructor(props) {
    super(props)
    this.firstNameManager = managers.firstNameManager.bind(this)
    this.businessNameManager = managers.businessNameManager.bind(this)
    this.accountTypeManager = managers.accountTypeManager.bind(this)
    this.areaCodeManager = managers.areaCodeManager.bind(this)
    this.phoneNumberManager = managers.phoneNumberManager.bind(this)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.errorSetter = errorSetter.bind(this)
    this.errorResetter = errorResetter.bind(this)
    this.accountTypeValidator = validators.accountTypeValidator.bind(this)
    this.nameValidator = validators.nameValidator.bind(this)
    this.phoneValidator = validators.phoneValidator.bind(this)
    this.emailValidator = validators.emailValidator.bind(this)
    this.passwordValidator = validators.passwordValidator.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    const {
      accountType
    } = this.props

    return (
      <div className='user-create-email-inputs-container'>
        <h2>
          {this.langObjHandler({ pl: 'Dane konta', en: 'Account  data' })}
        </h2>
        <div className='radio-container'>
          <div className='title'>
            {this.langObjHandler({ pl: 'Rodzaj konta', en: 'Account Type' })}
          </div>
          <ManagedRadio {...this.accountTypeManager()}/>
        </div>
        <div className='gap' />
        <ManagedText {...this.emailAddressManager()}/>
        <ManagedText {...this.passwordManager()}/>
        <h2>
          {this.langObjHandler({ pl: 'Dane kontaktowe', en: 'Contact  data' })}
        </h2>
        <div className='input-explanation-user'>
          {this.langObjHandler({
            pl: 'Imię oraz numer telefonu będą służyły jako dane kontaktowe przy Twoich ogłoszeniach.',
            en: 'The name and phone number shall be used as a contact data with your announcements.'
          })}
        </div>
        <ManagedText {...this.firstNameManager()}/>
        <ManagedText {...this.businessNameManager()}/>
        <ManagedSelect {...this.areaCodeManager()}/>
        <ManagedText {...this.phoneNumberManager()}/>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs);
