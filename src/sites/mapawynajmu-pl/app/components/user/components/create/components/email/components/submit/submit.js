import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import langHandler from '../../../../../../../../functions/lang-handler'
import { buttonManager } from './functions/managers'
import { ManagedButton } from 'managed-inputs'
import AppContext from '../../../../../../../../constants/context.js'

class UserCreateSubmit extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.buttonManager = buttonManager.bind(this)
  }

  static contextType = AppContext

  render() {
    return (
      <div id='user-create-email-submit'>
        <div className='separation-line' />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateSubmit)
