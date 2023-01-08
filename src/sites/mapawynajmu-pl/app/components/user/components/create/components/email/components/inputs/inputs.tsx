import React from 'react'
import { connect } from 'react-redux'
import { ManagedText, ManagedSelect } from 'managed-inputs'
import Hint from '../../../../../../../support/components/hint/hint'
import * as managers from './functions/managers'
import { langHandler } from '../../../../../../../../functions/lang-handler'
import * as mappers from './constants/mappers'
import { NAME_AREA_CODE_AND_PHONE_NUMBER_HINT } from './constants/texts'
import { UserTypeRadio } from './components/account-type/account-type.input'
import { UserTypes } from '../../../../../../types/user.types'
import { BusinessNameInput } from './components/business-name/business-name.input'
import { EmailAddressInput } from './components/email-address/email-address.input'
import { PasswordInput } from './components/password/password.input'

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
  }

  render() {
    // @ts-ignore
    const { accountType, businessName, businessNameError, emailAddress, emailAddressError, password, passwordError, changeInputs, langHandler, dispatch } = this.props

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

    const emailAddressProps = {
      emailAddress,
      emailAddressError,
      changeInputs,
      langHandler,
      dispatch,
    }

    const passwordProps = {
      password,
      passwordError,
      changeInputs,
      langHandler,
      dispatch,
    }

    return (
      <div className='inputs'>
        <UserTypeRadio {...accountTypeProps} />
        {accountType === UserTypes.BUSINESS && <BusinessNameInput {...businessNameProps} />}
        <EmailAddressInput {...emailAddressProps} />
        <PasswordInput {...passwordProps} />
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
