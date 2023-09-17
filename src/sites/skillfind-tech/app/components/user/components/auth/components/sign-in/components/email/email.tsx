import React from 'react'
import { Line } from '../../../../../../../../../../mapawynajmu-pl/app/components/support/components/line/line'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/auth/components/sign-in/components/password/password.validator'
import { SignInButton } from './components/sign-in-button'
import { Heading } from '../../../../../../../../../../mapawynajmu-pl/app/components/support/components/heading'
import { CredentialsError } from '../../../../../../../../../../shared/app/components/user/components/auth/components/sign-in/components/credentials-error'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { changeUrl } from '../../../../../../../../../../shared/app/functions/routes/changers/change-url'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'

const UserAuthEmail = () => {
  useStyles(styles)

  const { headingOne } = useTexts()
  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.CURRENT_PASSWORD,
    validator: passwordValidator,
  }

  const headingProps = {
    tier: 1,
    text: headingOne,
  }

  return (
    <div id='user-auth-email'>
      <Heading {...headingProps} />
      <Line />
      <form>
        <EmailAddressInput />
        <PasswordInput {...passwordInputProps} />
        <CredentialsError />
        <SignInButton />
      </form>
      {/* <Line />
      <div className='links'>
        <span onClick={() => changeUrl({ href: resetPasswordHref })}>{resetPassword}</span>
      </div> */}
    </div>
  )
}

export default UserAuthEmail
