import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedSelect } from 'managed-inputs'
import Hint from '../../../../../../../support/components/hint/hint.js'
import * as managers from './functions/managers'
import { langHandler } from '../../../../../../../../functions/lang-handler'
import * as mappers from './constants/mappers'
import { NAME_AREA_CODE_AND_PHONE_NUMBER_HINT } from './constants/texts.js'

class UserCreateEmailInputs extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.areaCodeManager = managers.areaCodeManager.bind(this)
    this.phoneNumberManager = managers.phoneNumberManager.bind(this)
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    this.passwordManager = managers.passwordManager.bind(this)
  }

  render() {
    return (
      <div className='inputs'>
        <ManagedText {...this.emailAddressManager()} />
        <ManagedText {...this.passwordManager()} />
        <Hint text={this.langHandler(NAME_AREA_CODE_AND_PHONE_NUMBER_HINT)} />
        <div className='country-code-phone-number-container'>
          <ManagedSelect {...this.areaCodeManager()} />
          <ManagedText {...this.phoneNumberManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs)
