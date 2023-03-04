import React from 'react'
import { connect } from 'react-redux'
import Hint from '../../../../../../../support/components/hint/hint'
import { langHandler } from '../../../../../../../../functions/lang-handler'
import * as mappers from './constants/mappers'
import { NAME_AREA_CODE_AND_PHONE_NUMBER_HINT } from './constants/texts'
import { UserTypeRadio } from './components/account-type/account-type.input'
import { UserTypes } from '../../../../../../types/user.types'
import { PasswordInput } from './components/password/password.input'
import { CountryCodeSelect } from './components/country-code/country-code.select'
import { PhoneNumberInput } from './components/phone-number/phone-number.input'
import { TermsAndPrivacyConsent } from './components/terms-and-privacy-consent/terms-and-privacy-consent'

import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/email-address/email-address.input'
import { BusinessNameInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/business-name/business-name.input'

class UserCreateEmailInputs extends React.Component {
  langHandler: LangHandler

  // @ts-ignore
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    // @ts-ignore
    const {
      // @ts-ignore
      accountType,
      // @ts-ignore
      businessName,
      // @ts-ignore
      businessNameError,
      // @ts-ignore
      password,
      // @ts-ignore
      passwordError,
      // @ts-ignore
      countryCode,
      // @ts-ignore
      phoneNumber,
      // @ts-ignore
      phoneNumberError,
      // @ts-ignore
      setInputs,
      // @ts-ignore
      langHandler,
      // @ts-ignore
      dispatch,
      // @ts-ignore
      links,
      // @ts-ignore
      termsAndPrivacyConsent,
      // @ts-ignore
      termsAndPrivacyConsentError,
    } = this.props

    const isBusinessAccount = accountType === UserTypes.BUSINESS

    const accountTypeProps = {
      accountType,
      setInputs,
      langHandler,
    }

    const passwordProps = {
      password,
      passwordError,
      setInputs,
      langHandler,
      dispatch,
    }

    const countryCodeProps = {
      countryCode,
      dispatch,
    }

    const phoneNumberProps = {
      phoneNumber,
      phoneNumberError,
      langHandler,
      dispatch,
    }

    const termsAndPrivacyConsentProps = {
      termsAndPrivacyConsent,
      termsAndPrivacyConsentError,
      langHandler,
      dispatch,
      links,
    }

    return (
      <div className='inputs'>
        <UserTypeRadio {...accountTypeProps} />
        {isBusinessAccount && <BusinessNameInput />}
        <EmailAddressInput />
        <PasswordInput {...passwordProps} />
        {/* @ts-ignore */}
        <Hint text={this.langHandler(NAME_AREA_CODE_AND_PHONE_NUMBER_HINT)} />
        <div className='country-code-phone-number-container'>
          <CountryCodeSelect {...countryCodeProps} />
          <PhoneNumberInput {...phoneNumberProps} />
        </div>
        <TermsAndPrivacyConsent {...termsAndPrivacyConsentProps} />
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmailInputs)
