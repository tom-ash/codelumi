import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedCheckbox, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { logIn } from './functions/adapters'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler } from '../../../../../../functions/lang-handler'
import AppContext from '../../../../../../constants/context.js'
import { buildUrl } from '../../../../../../../shared/functions/builders/url'

class UserAuthEmail extends React.Component {
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
    const { links } = this.props
    const resetPasswordLinkData = links['user/reset-password']
    const resetPasswordHref = resetPasswordLinkData && buildUrl({ path: resetPasswordLinkData.path })
    const { changeRoute } = this.context

    return (
      <div id='user-authorize-email'>
        <form>
          <div className='inputs'>
            <ManagedText {...this.emailAddressManager()} />
            <ManagedText {...this.passwordManager()} />
            <ManagedCheckbox {...this.rememberMeManager()} />
            <ManagedButton {...this.buttonManager()} />
          </div>
        </form>
        <div className='reset-password'>
          <span onClick={() => changeRoute({ href: resetPasswordHref })}>
            {this.langHandler({ pl: 'Zresetuj hasło', en: 'Reset password' })}
          </span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthEmail)
