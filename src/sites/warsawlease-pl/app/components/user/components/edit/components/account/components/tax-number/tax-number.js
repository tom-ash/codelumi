import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { monit } from './constants/monit'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import langObjHandler from '../../../../../../../../functions/lang-handler'
import * as managers from './functions/managers'

class UserEditAccountTaxNumber extends React.Component {
  constructor(props) {
    super(props)
    this.textManager = managers.textManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
  }

  render() {
    return (
      <div id='user-edit-account-tax-number'>
        <div className='monit'>
          {monit.pl}
        </div>
        <ManagedText {...this.textManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountTaxNumber)