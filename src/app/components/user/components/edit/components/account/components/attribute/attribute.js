import React from 'react'
import { monit } from './constants/monit'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { languageObjectHandler } from '../../../../../../../../functions/language-handler'

class UserEditAttribute extends React.Component {
  constructor(props) {
    super(props)
    this.textManager = managers.textManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  render() {
    return (
      <div id='user-edit-account-business-name'>
        <div className='monit'>
          {this.languageObjectHandler(monit)}
        </div>
        <ManagedText {...this.textManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default UserEditAttribute
