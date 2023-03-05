import React from 'react'
import Hint from '../../../../../../../support/components/hint/hint'
import { AccountType } from '../../../../../../types/user.types'
import { AccountTypeRadio } from '../../../../../../../../../../shared/app/components/user/components/new/components/account-type/account-type.radio'
import { BusinessNameInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/business-name/business-name.input'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/password/password.input'
import { CountryCodeSelect } from '../../../../../../../../../../shared/app/components/user/components/new/components/country-code/country-code.select'
import { PhoneNumberInput } from '../../../../../../../../../../shared/app/components/user/components/new/components/phone-number/phone-number.input'
import { TermsOfServiceConsent } from '../../../../../../../../../../shared/app/components/user/components/new/components/terms-of-service-consent/terms-of-service-consent'
import { SubmitButton } from './components/submit-button'
import { useStore } from '../../../../../../../../../../shared/app/functions/store/useStore'

{/* {!renderAnnouncementCreate && <Line />}
{!renderAnnouncementCreate && <Submit />} */}

export const UserNewEmailForm = () => {
  const { state } = useStore()
  const { texts, inputs } = state
  const { phoneNumberExplanation } = texts
  const { accountType } = inputs

  const isBusinessAccount = accountType === AccountType.BUSINESS

  return (
    <form className='inputs'>
      <AccountTypeRadio />
      {isBusinessAccount && <BusinessNameInput />}
      <EmailAddressInput />
      <PasswordInput />
      {/* @ts-ignore */}
      <Hint text={phoneNumberExplanation} />
      <div className='country-code-phone-number-container'>
        <CountryCodeSelect />
        <PhoneNumberInput />
      </div>
      <TermsOfServiceConsent />
      <SubmitButton />
    </form>
  )
}
