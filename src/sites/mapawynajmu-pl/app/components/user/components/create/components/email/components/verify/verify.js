import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import langHandler from '../../../../../../../../functions/lang-handler'
import { verificationManager, buttonManager } from './functions/manager'
import { verify } from './functions/adapter'
import { monit } from './constants/monit'
import AppContext from '../../../../../../../../constants/context.js'
import { Heading } from '../../../../../../../support/components/heading'
import { PAGE_HEADER } from './constants/texts.js'

class UserCreateEmailVerify extends React.Component {
  constructor(props) {
    super(props)
    this.verify = verify.bind(this)
    this.verificationManager = verificationManager.bind(this)
    this.langHandler = langHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
  }

  static contextType = AppContext

  render() {
    return (
      <div id='user-create-email-verify'>
        <Heading tier={1} text={this.langHandler(PAGE_HEADER)} svg='userPlus' />
        <div className='monit'>{this.langHandler(monit)}</div>
        <ManagedText {...this.verificationManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailVerify)
