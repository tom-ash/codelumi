import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import { componentDidMount, componentWillUnmount } from './functions/lifecycle'
import { monit } from './constants/monit'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { deauthorizeUser } from '../authorize/functions/adapters'
import { changeRoute } from '../../../../functions/routers'
import * as managers from './functions/managers'
import * as adapters from './functions/adapters'

class UserDestroy extends React.Component {
  constructor(props) {
    super(props)
    this.sendEmail = adapters.sendEmail.bind(this)
    this.destroy = adapters.destroy.bind(this)
    this.componentDidMount = componentDidMount
    this.componentWillUnmount = componentWillUnmount
    this.verificationManager = managers.verificationManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.deauthorizeUser = deauthorizeUser.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    return (
      <div id='user-destroy'>
        <div className='monit'>
          {this.languageObjectHandler(monit)}
        </div>
        <ManagedText {...this.verificationManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDestroy)