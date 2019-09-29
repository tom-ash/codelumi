import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedCheckbox } from 'managed-inputs'
import * as managers from './functions/managers'
import { logIn } from './functions/adapters'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import WindmillSpinner from '../../../../../support/components/spinner/components/windmill/windmill.js'
import { changeRoute } from '../../../../../../functions/routers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { labelProvider } from '../../../../../../functions/providers/label'
import './styles/styles.scss'

class UserAuthorizeEmailPassword extends React.Component {
  constructor(props) {
    super(props)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
    this.rememberMeManager = managers.rememberMeManager.bind(this)
    this.logIn = logIn.bind(this)
    this.changeRoute = changeRoute.bind(this)
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
        <div className='email-or-password-error'>
          {
          this.languageObjectHandler(this.props.emailOrPasswordError)
          }
        </div>
        <div className='remember-me'>
          <ManagedCheckbox {...this.rememberMeManager()} />
        </div>
        <div
          className='password'>
          <span onClick={(e) => this.changeRoute(e, 'resetpassword')}>
            Resetuj hasło
          </span>
        </div>
        <button
          className='button'
          onClick = {this.logIn}>
          {
          this.props.connecting ?
          <WindmillSpinner spinnerClass='very-small-windmill-spinner'/>
          :
          <div>
            Zaloguj
          </div>
          }
        </button>
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorizeEmailPassword);
