import React from 'react'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { FirstName } from './components/first-name/first-name'
import { LastName } from './components/last-name/last-name'
import { Email } from './components/email/email'
import { PhoneNumber } from './components/phone-number/phone-number'
import { LinkedInProfile } from './components/linked-in-profile/linked-in-profile'
import { GitHubAccount } from './components/git-hub-account/git-hub-account'
import { Submit } from './components/submit/submit'
import { Heading } from './components/heading/heading'
import { CV } from './components/cv/cv'
import { Link } from './components/link/link'
import { useControl } from '../../../../../../../../shared/app/functions/store/use-control'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'

interface ApplicationInterface {
  (props: {}): React.ReactElement | null
}

export const Application: ApplicationInterface = () => {
  const { applicationFormSent } = useControl()
  const { applicationSendingConfirmation } = useTexts()

  return (
    <section className='application'>
      <Heading />
      <Link />
      {!applicationFormSent ? (
        <form>
          <FirstName />
          <LastName />
          <Email />
          <PhoneNumber />
          <LinkedInProfile />
          <GitHubAccount />
          <FloatClear />
          <CV />
          <Submit />
        </form>
      ) : (
        <div className='application-confirmation'>{applicationSendingConfirmation}</div>
      )}
    </section>
  )
}
