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

interface ApplicationInterface {
  (props: {}): React.ReactElement | null
}

export const Application: ApplicationInterface = () => {
  return (
    <section className='application'>
      <Heading />
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
    </section>
  )
}
