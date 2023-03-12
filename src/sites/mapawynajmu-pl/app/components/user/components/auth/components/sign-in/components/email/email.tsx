import React, { useContext } from 'react'
import AppContext from '../../../../../../../../constants/context'
import { useStore } from '../../../../../../../../../../shared/app/functions/store/useStore'
import { Line } from '../../../../../../../support/components/line/line'
import { EmailAddressInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/email-address/email-address.input'
import { PasswordInput } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { PasswordAutoComplete } from '../../../../../../../../../../shared/app/components/user/components/common/components/password/password.input'
import { passwordValidator } from '../../../../../../../../../../shared/app/components/user/components/auth/components/sign-in/components/password/password.validator'
import { SubmitButton } from './components/submit-button'
import { Heading } from '../../../../../../../support/components/heading'
import { CredentialsError } from '../../../../../../../../../../shared/app/components/user/components/auth/components/sign-in/components/credentials-error'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const UserAuthEmail = () => {
  useStyles(styles)

  const { changeRoute } = useContext(AppContext)
  const { state } = useStore()
  const { texts, links } = state
  const { headingOne, resetPassword } = texts
  const { href: resetPasswordHref } = links['user/password-reset']

  const passwordInputProps = {
    autoComplete: PasswordAutoComplete.CURRENT_PASSWORD,
    validator: passwordValidator,
  }

  const headingProps = {
    tier: 1,
    text: headingOne,
  }

  return (
    <div id='user-authorize-email'>
      <Heading {...headingProps} />
      <Line />
      <form>
        <EmailAddressInput />
        <PasswordInput {...passwordInputProps} />
        <CredentialsError />
        <SubmitButton />
      </form>
      <Line />
      <div className='links'>
        <span onClick={() => changeRoute({ href: resetPasswordHref })}>
          {resetPassword}
        </span>
      </div>
    </div>
  )
}

export default UserAuthEmail
