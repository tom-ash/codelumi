import React from 'react'
import { TextInput } from '../../../../../../../../shared/app/components/support/text-input-semanticize/text-input'
import { FloatClear } from '../../../../../../../../shared/app/components/support/float-clear/float-clear'
import { SubmitButton } from '../../../../../../../../shared/app/components/support/submit-button/submit-button'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { SubmitButtonVer2 } from '../../../../../../../../shared/app/components/support/submit-button-ver-2/submit-button-ver-2'
import { FirstName } from './components/first-name'
import { LastName } from './components/last-name'
import { Email } from './components/email'
import { PhoneNumber } from './components/phone-number'
import { LinkedInProfile } from './components/linked-in-profile'
import { GitHubAccount } from './components/git-hub-account'
import { Submit } from './components/submit'
import { Heading } from './components/heading'
import { FileInput } from '../../../../../../../../shared/app/components/support/file-input/file-input'
import { CV } from './components/cv'

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
