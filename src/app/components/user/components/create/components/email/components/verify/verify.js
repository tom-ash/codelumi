import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import { ManagedText, ManagedButton } from 'managed-inputs'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { verificationManager, buttonManager } from './functions/manager'
import { verify } from './functions/adapter'
import { monit } from './constants/monit'
import { changeRoute } from '../../../../../../../../functions/routers'

class UserCreateEmailVerify extends React.Component {
  constructor(props) {
    super(props)
    this.verify = verify.bind(this)
    this.verificationManager = verificationManager.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    return (
      <div id='user-create-email-verify'>
        <div className='monit'>
          {this.languageObjectHandler(monit)}
        </div>
        <ManagedText {...this.verificationManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailVerify)
