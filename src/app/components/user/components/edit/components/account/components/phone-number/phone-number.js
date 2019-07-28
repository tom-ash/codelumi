import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { monit } from './constants/monit'
import { ManagedSelect } from 'managed-inputs'
import { ManagedText } from 'managed-inputs'
import { ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'

class UserEditAccountPhoneNumber extends React.Component {
  constructor(props) {
    super(props)
    this.countryCodeManager = managers.countryCodeManager.bind(this)
    this.bodyManager = managers.bodyManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
  }

  render() {
    return (
      <div>
        <div className='monit'>
          {monit.polish}
        </div>
        <div style={{float: 'left', width: 88, marginRight: 12 }}>
          <ManagedSelect manager={this.countryCodeManager}/>
        </div>
        <div style={{float: 'left', width: 218 }}>
          <ManagedText manager={this.bodyManager} />
        </div>
        <div className='float-clear' />
        <ManagedButton manager={this.buttonManager} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccountPhoneNumber)