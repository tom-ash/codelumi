import React from 'react'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/auth/components/sign-in/components/password/password.validator'
import { SignInButton } from './components/sign-in-button'
import { CredentialsError } from '../../../../../../../../../../shared/app/components/user/components/auth/components/sign-in/components/credentials-error'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useTexts } from '../../../../../../../../../../shared/app/functions/store/use-texts'
import { Link } from '../../../../../../../../../../shared/app/components/support/link/link'
import { MainHeading } from '../../../../../../../../../../shared/app/components/support/headings/main-heading'

const UserAuthEmail = () => {
  useStyles(styles)

  const { headingOne } = useTexts()
  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.CURRENT_PASSWORD,
    validator: passwordValidator,
  }

  return (
    <div id='user-auth-email'>
      <MainHeading icon='signIn' />
      <form>
        <EmailAddressInput />
        <PasswordInput {...passwordInputProps} />
        <CredentialsError />
        <SignInButton />
      </form>
      <Link linkKey='user/password-reset' />
    </div>
  )
}

export default UserAuthEmail
