import React from 'react'
import { connect } from 'react-redux'
import Hint from '../../../../../../../support/components/hint/hint'
import { langHandler } from '../../../../../../../../functions/lang-handler'
import * as mappers from './constants/mappers'
import { NAME_AREA_CODE_AND_PHONE_NUMBER_HINT } from './constants/texts'
import { AccountType } from '../../../../../../types/user.types'

import { AccountTypeRadio } from '../../../../../../../../../../shared/app/components/user/components/new/components/account-type/account-type.radio'
import { BusinessNameInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/business-name/business-name.input'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/password/password.input'
import { CountryCodeSelect } from '../../../../../../../../../../shared/app/components/user/components/new/components/country-code/country-code.select'
import { PhoneNumberInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/phone-number/phone-number.input'
import { TermsOfServiceConsent } from '../../../../../../../../../../shared/app/components/user/components/new/components/terms-of-service-consent/terms-of-service-consent'

class UserCreateEmailInputs extends React.Component {
  langHandler: LangHandler

  // @ts-ignore
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const {
      // @ts-ignore
      accountType,
    } = this.props

    const isBusinessAccount = accountType === AccountType.BUSINESS


    return (
      <div className='inputs'>
        <AccountTypeRadio />
        {isBusinessAccount && <BusinessNameInput />}
        <EmailAddressInput />
        <PasswordInput />
        {/* @ts-ignore */}
        <Hint text={this.langHandler(NAME_AREA_CODE_AND_PHONE_NUMBER_HINT)} />
        <div className='country-code-phone-number-container'>
          <CountryCodeSelect />
          <PhoneNumberInput />
        </div>
        <TermsOfServiceConsent />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs)
