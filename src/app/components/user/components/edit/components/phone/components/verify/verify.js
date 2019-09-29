import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler} from '../../../../../../../../functions/language-handler'
import { ManagedText, ManagedButton } from 'managed-inputs'
import { verificationManager, buttonManager } from './functions/managers'
import { startVerification, sendVerification } from './functions/adapters'
import WindmillSpinner from '../../../../../../../support/components/spinner/components/windmill/windmill.js'
import { monits } from './constants/monits'
import * as lifecycle from './functions/lifecycle'
import './styles/styles.scss'

class UserEditPhoneVerify extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount.bind(this)
    this.componentDidUpdate = lifecycle.componentDidUpdate.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.verificationManager = verificationManager.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.startVerification = startVerification.bind(this)
    this.sendVerification = sendVerification.bind(this)
  }

  render() {
    return (
      <div id='user-edit-phone-verify'>
        <h2 className='page-header'>
          <i className='far fa-check-circle' />
          {this.languageHandler('Weryfikacja numeru telefonu', 'Phone Number Verification')}
        </h2>
        <div className='monit-inputs'>
          {
          (this.props.connecting || !this.props.phoneVerificationStarted) && !this.props.phoneVerified &&
          <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
          }
          {
          !this.props.connecting && this.props.phoneVerificationStarted && !this.props.phoneVerified &&
          <div>
            <div className='monit'>
              {this.languageObjectHandler(monits.reason)}
            </div>
            <ManagedText {...this.verificationManager()} />
            <ManagedButton key='button' {...this.buttonManager()} />
          </div>
          }
          {
          !this.props.connecting && this.props.phoneVerificationStarted && this.props.phoneVerified &&
          <div>
            {this.languageObjectHandler(monits.success)}
          </div>
          }
          {
          !this.props.connecting && !this.props.phoneVerificationStarted && this.props.phoneVerified &&
          <div>
            {this.languageObjectHandler(monits.already)}
          </div>
          }
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPhoneVerify)