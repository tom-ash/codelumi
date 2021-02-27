import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import { langObjHandler } from '../../../../../../../../functions/lang-handler'
import { verificationManager, buttonManager } from './functions/manager'
import { verify } from './functions/adapter'
import { monit } from './constants/monit'
import AppContext from '../../../../../../../../constants/context.js'

class UserCreateEmailVerify extends React.Component {
  constructor(props) {
    super(props)
    this.verify = verify.bind(this)
    this.verificationManager = verificationManager.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
  }

  static contextType = AppContext

  render() {
    return (
      <div id='user-create-email-verify'>
        <div className='monit'>
          {this.langObjHandler(monit)}
        </div>
        <ManagedText {...this.verificationManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailVerify)
