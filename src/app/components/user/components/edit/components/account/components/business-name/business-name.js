import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { monit } from './constants/monit'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'

class UserEditAccountBusinessName extends React.Component {
  constructor(props) {
    super(props)
    this.textManager = managers.textManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
  }

  render() {
    return (
      <div id='user-edit-account-business-name'>
        <div className='monit'>
          {monit.polish}
        </div>
        <ManagedText {...this.textManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountBusinessName)