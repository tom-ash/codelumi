import React from 'react'
import { connect } from 'react-redux'
import { ManagedText } from 'managed-inputs'
import { ManagedSelect } from 'managed-inputs'
import * as managers from './functions/managers'
import * as mappers from './constants/mappers'
import { languageHandler } from '../../../../../../../../functions/language-handler'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { errorSetter } from '../../../../../../functions/error-setter'
import { errorResetter } from './functions/error-resetter'
import * as validators from './functions/validators'
import { labelProvider } from '../../../../../../../../functions/providers/label'

class UserCreateEmailInputs extends React.Component {
  constructor(props) {
    super(props)
    this.firstNameManager = managers.firstNameManager.bind(this)
    this.lastNameManager = managers.lastNameManager.bind(this)
    this.businessNameManager = managers.businessNameManager.bind(this)
    this.accountTypeManager = managers.accountTypeManager.bind(this)
    this.areaCodeManager = managers.areaCodeManager.bind(this)
    this.phoneNumberManager = managers.phoneNumberManager.bind(this)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
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
    return (
      <div className='user-create-email-inputs-container'>



        <ManagedSelect {...this.accountTypeManager()}/>

        <div className='first-name-and-surname'>
          <ManagedText {...this.firstNameManager()}/>
          <ManagedText {...this.lastNameManager()}/>
        </div>



        <ManagedText {...this.businessNameManager()}/>
        <ManagedSelect {...this.areaCodeManager()}/>
        <ManagedText {...this.phoneNumberManager()}/>
        <ManagedText {...this.emailAddressManager()}/>
        <ManagedText {...this.passwordManager()}/>
      </div>
    )
  }
}
export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs);
