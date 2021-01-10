import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { monit } from './constants/monit'
import { ManagedSelect } from 'managed-inputs'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import { langObjHandler } from '../../../../../../../../functions/lang-handler'
import * as managers from './functions/managers'

class UserEditAccountPhoneNumber extends React.Component {
  constructor(props) {
    super(props)
    this.phoneCodeManager = managers.phoneCodeManager.bind(this)
    this.bodyManager = managers.bodyManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
  }

  render() {
    return (
      <div>
        <div className='monit'>
          {monit.pl}
        </div>
        <ManagedSelect {...this.phoneCodeManager()}/>
        <ManagedText {...this.bodyManager()} />
        <ManagedButton {...this.buttonManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountPhoneNumber)