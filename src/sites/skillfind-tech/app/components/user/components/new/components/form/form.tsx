import React from 'react'
import { BusinessName } from './components/business-name/business-name'
import { Industry } from './components/industry/industry'
import { Logo } from './components/logo/logo'
import { EmailCredentials } from './components/email-credentials/email-credentials'
import { TermsOfServiceConsent } from '../../../../../../../../shared/app/components/user/components/new/components/form/components/terms-of-service-consent/terms-of-service-consent'
import { Submit } from './components/submit/submit'
import { MainHeading } from '../../../../../../../../shared/app/components/support/headings/main-heading'

interface FormInterface {
  (props: { isSubmittable?: boolean }): React.ReactElement
}

const Form: FormInterface = props => {
  const { isSubmittable = true } = props

  return (
    <form className='users-new-form'>
      <MainHeading icon='userPlus' />
      <BusinessName />
      <Industry />
      <Logo />
      <EmailCredentials />
      <TermsOfServiceConsent />
      {isSubmittable && <Submit />}
    </form>
  )
}

export default Form
