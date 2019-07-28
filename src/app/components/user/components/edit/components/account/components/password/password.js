import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import { componentWillUnmount } from './functions/lifecycle'
import { emailManager, verificationManager, passwordManager, buttonManager } from './functions/managers'
import { sendEmail, sendVerification, sendPassword } from './functions/adapters'
import { monitProvider } from './functions/monit-provider'
import WindmillSpinner from '../../../../../../../support/components/spinner/components/windmill/windmill.js'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import './styles/styles.scss'
import { labelProvider } from '../../../../../../../../functions/providers/label'

class UserEditAccountPassword extends React.Component {
  constructor(props) {
    super(props)
    this.componentWillUnmount = componentWillUnmount.bind(this)
    this.emailManager = emailManager.bind(this)
    this.verificationManager = verificationManager.bind(this)
    this.passwordManager = passwordManager.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.sendEmail = sendEmail.bind(this)
    this.sendVerification = sendVerification.bind(this)
    this.sendPassword = sendPassword.bind(this)
    this.monitProvider = monitProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    return (
      <div id={this.props.path === '/resethasla' || this.props.path === '/resetpassword' ? 'user-reset-password' : 'user-edit-account-password'}>
        <h2 className='page-header'>
          <i className='fas fa-user-plus' /> {this.languageHandler('Resetowanie hasła', 'Password Resetting')}
        </h2>
        {
        (this.props.path === '/resethasla' || this.props.path === '/resetpassword') && this.props.connecting &&
        <div>
          <WindmillSpinner spinnerClass='windmill-medium-spinner'/>
        </div>
        }
        <div className='inputs'>
          {
          !this.props.connecting &&
          <div className='monit'>
            {this.monitProvider()}
          </div>
          }
          <ManagedText key='emailAddress' manager={this.emailManager} />
          <ManagedText key='verificationCode' manager={this.verificationManager} />
          <ManagedText key='password' manager={this.passwordManager} />
          <ManagedButton key='button' manager={this.buttonManager} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountPassword)