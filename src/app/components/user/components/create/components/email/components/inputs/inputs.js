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
import './styles/styles.scss'

class UserCreateEmailInputs extends React.Component {
  constructor(props) {
    super(props)
    this.businessNameManager = managers.businessNameManager.bind(this)
    this.taxIdentificationNumberManager = managers.taxIdentificationNumberManager.bind(this)
    this.areaCodeManager = managers.areaCodeManager.bind(this)
    this.phoneNumberManager = managers.phoneNumberManager.bind(this)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.errorSetter = errorSetter.bind(this)
    this.errorResetter = errorResetter.bind(this)
    this.businesstNameValidator = validators.businesstNameValidator.bind(this)
    this.taxIdentificationValidator = validators.taxIdentificationValidator.bind(this)
    this.phoneValidator = validators.phoneValidator.bind(this)
    this.emailValidator = validators.emailValidator.bind(this)
    this.passwordValidator = validators.passwordValidator.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    return (
      <div className='user-create-email-inputs-container'>
        <h3 className='section-header'>
          <i className='fas fa-business-time' /> {this.languageHandler('Dane ogłoszeniodawcy', 'Announcer Data')}
        </h3>
        <ManagedText manager = {this.businessNameManager}/>
        {/* <ManagedText manager = {this.taxIdentificationNumberManager}/> */}
        <div style={{ float: 'left', width: '30%'}}>
          <ManagedSelect manager={this.areaCodeManager}/>
        </div>
        <div style={{ float: 'left', width: '70%', paddingLeft: 12}}>
          <ManagedText manager={this.phoneNumberManager}/>
        </div>
        <div className='float-clear'/>
        <h3 className='section-header account-data'>
          <i className='fas fa-user' /> {this.languageHandler('Dane konta', 'Account data')}
        </h3>
        <ManagedText manager = {this.emailAddressManager}/>
        <ManagedText manager = {this.passwordManager}/>
      </div>
    )
  }
}
export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs);
