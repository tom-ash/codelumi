import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedSelect } from 'managed-inputs'
import Hint from '../../../../../../../support/components/hint/hint'
import * as managers from './functions/managers'
import { langHandler } from '../../../../../../../../functions/lang-handler'
import * as mappers from './constants/mappers'
import { NAME_AREA_CODE_AND_PHONE_NUMBER_HINT } from './constants/texts'
import { UserTypeRadio } from './components/account-type/account-type.input'
import { BusinessNameInput } from './components/business-name/business-name.input'
import { UserTypes } from '../../../../../../types/user.types'

class UserCreateEmailInputs extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.langHandler = langHandler.bind(this)
    // @ts-ignore
    this.areaCodeManager = managers.areaCodeManager.bind(this)
    // @ts-ignore
    this.phoneNumberManager = managers.phoneNumberManager.bind(this)
    // @ts-ignore
    this.emailAddressManager = managers.emailAddressManager.bind(this)
    // @ts-ignore
    this.passwordManager = managers.passwordManager.bind(this)
  }

  render() {
    // @ts-ignore
    const { accountType, businessName, businessNameError, changeInputs, langHandler, dispatch } = this.props

    const accountTypeProps = {
      accountType,
      changeInputs,
      langHandler,
    }

    const businessNameProps = {
      businessName,
      businessNameError,
      changeInputs,
      langHandler,
      dispatch,
    }

    return (
      <div className='inputs'>
        <UserTypeRadio {...accountTypeProps} />
        {accountType === UserTypes.BUSINESS && <BusinessNameInput {...businessNameProps} />}
        {/* @ts-ignore */}
        <ManagedText {...this.emailAddressManager()} />
        {/* @ts-ignore */}
        <ManagedText {...this.passwordManager()} />
        {/* @ts-ignore */}
        <Hint text={this.langHandler(NAME_AREA_CODE_AND_PHONE_NUMBER_HINT)} />
        <div className='country-code-phone-number-container'>
          {/* @ts-ignore */}
          <ManagedSelect {...this.areaCodeManager()} />
          {/* @ts-ignore */}
          <ManagedText {...this.phoneNumberManager()} />
        </div>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs)
