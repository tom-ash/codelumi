import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedCheckbox, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { logIn } from './functions/adapters'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler } from '../../../../../../functions/lang-handler'
import AppContext from '../../../../../../constants/context'
import { buildUrl } from '../../../../../../../shared/functions/builders/url'
import { Line } from '../../../../../support/components/line/line'

class UserAuthEmail extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    // @ts-ignore
    this.passwordManager = managers.passwordManager.bind(this)
    // @ts-ignore
    this.rememberMeManager = managers.rememberMeManager.bind(this)
    // @ts-ignore
    this.buttonManager = managers.buttonManager.bind(this)
    // @ts-ignore
    this.logIn = logIn.bind(this)
    // @ts-ignore
    this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext

  render() {
    // @ts-ignore
    const { links } = this.props
    const resetPasswordLinkData = links['user/reset-password']
    const resetPasswordHref = resetPasswordLinkData && buildUrl({ path: resetPasswordLinkData.path })
    const { changeRoute } = this.context

    return (
      <div id='user-authorize-email'>
        <form>
          {/* @ts-ignore */}
          <ManagedText {...this.emailAddressManager()} />
          {/* @ts-ignore */}
          <ManagedText {...this.passwordManager()} />
          {/* @ts-ignore */}
          <ManagedCheckbox {...this.rememberMeManager()} />
          {/* @ts-ignore */}
          <ManagedButton {...this.buttonManager()} />
        </form>
        <Line />
        <div className='links'>
          <span onClick={() => changeRoute({ href: resetPasswordHref })}>
            {/* @ts-ignore */}
            {this.langHandler({ pl: 'Zresetuj hasło', en: 'Reset password' })}
          </span>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthEmail)
