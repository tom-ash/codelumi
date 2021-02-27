import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import { componentDidMount, componentWillUnmount } from './functions/lifecycle'
import { monit } from './constants/monit'
import langObjHandler from '../../../../functions/lang-handler'
import { deauthorizeUser } from '../authorize/functions/adapters'
import * as managers from './functions/managers'
import * as adapters from './functions/adapters'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AppContext from '../../../../constants/context.js'

class UserDestroy extends React.Component {
  constructor(props) {
    super(props)
    this.sendEmail = adapters.sendEmail.bind(this)
    this.destroy = adapters.destroy.bind(this)
    this.componentDidMount = componentDidMount
    this.componentWillUnmount = componentWillUnmount
    this.verificationManager = managers.verificationManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.deauthorizeUser = deauthorizeUser.bind(this)
  }

  static contextType = AppContext

  render() {
    return (
      <div id='user-destroy'>
        <div className='monit'>
          {this.langObjHandler(monit)}
        </div>
        <ManagedText {...this.verificationManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserDestroy))
