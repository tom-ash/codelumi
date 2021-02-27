import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import { componentWillUnmount } from './functions/lifecycle'
import { emailManager, verificationManager, passwordManager, buttonManager } from './functions/managers'
import { sendEmail, sendVerification, sendPassword } from './functions/adapters'
import { monitProvider } from './functions/monit-provider'
import langObjHandler from '../../../../../../../../functions/lang-handler'
import { labelProvider } from '../../../../../../../../functions/providers/label'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Header from '../../../../../../../support/components/header/header.js'

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
    this.langObjHandler = langObjHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    const { editAccount } = this.props

    const headerText = this.langObjHandler({ pl: 'Zresetuj hasło', en: 'Reset password' })
    
    return (
      <div
        id='user-edit-account-password'
        className={`${editAccount ? '' : 'container full'}`}
      >
        {!editAccount && <Header tier={1} text={headerText} svg='lock' />}
        <div className='inputs'>
          <div className='monit-and-text-inputs'>
            <div className='monit'>
              {this.monitProvider()}
            </div>
            <ManagedText key='emailAddress' {...this.emailManager()} />
            <ManagedText key='verificationCode' {...this.verificationManager()} />
            <ManagedText key='password' {...this.passwordManager()} />
          </div>
          <div className='separation-line' />
          <ManagedButton key='button' {...this.buttonManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserEditAccountPassword))
