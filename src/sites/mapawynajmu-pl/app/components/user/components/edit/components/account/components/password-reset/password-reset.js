import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import withStyles from 'isomorphic-style-loader-react18/withStyles'
import styles from './styles/styles.scss'
import { componentWillUnmount } from './functions/lifecycle'
import { emailManager, verificationManager, passwordManager, buttonManager } from './functions/managers'
import { sendEmail, sendVerification, sendPassword } from './functions/adapters'
import { monitProvider } from './functions/monit-provider'
import { langHandler } from '../../../../../../../../functions/lang-handler'
import { Heading } from '../../../../../../../../../../shared/app/components/support/heading/heading'
import { Line } from '../../../../../../../support/components/line/line'

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
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { editAccount } = this.props

    const headerText = this.langHandler({ pl: 'Zresetuj hasło', en: 'Reset password' })

    return (
      <div id='user-update-password' className={`${editAccount ? '' : 'container'}`}>
        <div className='inputs'>
          {!editAccount && <Heading rank={1} heading={headerText} />}
          <Line />
          <div className='monit-and-text-inputs'>
            <div className='monit'>{this.monitProvider()}</div>
            <ManagedText key='emailAddress' {...this.emailManager()} />
            <ManagedText key='verificationCode' {...this.verificationManager()} />
            <ManagedText key='password' {...this.passwordManager()} />
          </div>
          <Line />
          <ManagedButton key='button' {...this.buttonManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserEditAccountPassword))
