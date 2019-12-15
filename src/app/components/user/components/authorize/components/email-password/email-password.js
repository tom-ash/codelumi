import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedCheckbox, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { logIn } from './functions/adapters'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { labelProvider } from '../../../../../../functions/providers/label'
import './styles/styles.scss'

class UserAuthorizeEmailPassword extends React.Component {
  constructor(props) {
    super(props)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
    this.rememberMeManager = managers.rememberMeManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.logIn = logIn.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    return (
      <div id='user-authorize-email'>
        <form>
          <ManagedText {...this.emailAddressManager()}/>
          <ManagedText {...this.passwordManager()}/>
        </form>
        <div className='submit'>
          <ManagedCheckbox {...this.rememberMeManager()} />
          <ManagedButton {...this.buttonManager()} />
        </div>
        <div
          className='reset-password'>
          <span onClick={(e) => {
            this.props.changeApp({ showUserAuthorize: false, showUserEditPasswordReset: true })
          }}>
            {this.languageObjectHandler({ pl: 'Zresetuj hasło', en: 'Reset password' })}
          </span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorizeEmailPassword);
