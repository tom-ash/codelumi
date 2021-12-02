import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedCheckbox, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { logIn } from './functions/adapters'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import { USER_EDIT_PASSWORD_TRACK } from '../../../../../../../shared/constants/tracks/tracks'
import AppContext from '../../../../../../constants/context.js'

class UserAuthorizeEmailPassword extends React.Component {
  constructor(props) {
    super(props)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
    this.rememberMeManager = managers.rememberMeManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.logIn = logIn.bind(this)
    this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext

  render() {
    const { lang } = this.props
    const track = USER_EDIT_PASSWORD_TRACK
    const { changeRoute } = this.context

    return (
      <div id='user-authorize-email'>
        <form>
          <div className='inputs'>
            <ManagedText {...this.emailAddressManager()}/>
            <ManagedText {...this.passwordManager()}/>
          </div>
          <div className='submit'>
            <ManagedCheckbox {...this.rememberMeManager()} />
            <div className='separation-line' />
            <ManagedButton {...this.buttonManager()} />
          </div>
        </form>
        <div
          className='reset-password'>
          {/* TODO CHANGE ROUTE */}
          <span onClick={() => changeRoute({ track, lang, changeRoute })}>
            {this.langHandler({ pl: 'Zresetuj hasło', en: 'Reset password' })}
          </span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthorizeEmailPassword);
