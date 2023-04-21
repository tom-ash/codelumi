import React from 'react'
import { useStore } from '../../../../../shared/app/functions/store/useStore'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Logo } from './components/logo'
import { LangSwitch } from '../../../../../shared/app/components/support/lang-switch/lang-switch'
import { FloatClear } from '../../../../../shared/app/components/support/float-clear/float-clear'
import { SignUpLink } from './components/links/components/sign-up/sign-up.link'
import { SignInLink } from './components/links/components/sign-in/sign-in.link'
import { SignOutButton } from './components/links/components/sign-out/sign-out'

interface HeaderInterface {
  (props: {}): JSX.Element
}

const Header: HeaderInterface = props => {
  useStyles(styles)

  const { state, dispatch } = useStore()
  const { user } = state
  const { authorized } = user

  return (
    <div id='header'>
      <Logo />
      <LangSwitch />
      {!authorized && <SignUpLink />}
      {!authorized && <SignInLink />}
      {authorized && <SignOutButton />}
      <FloatClear />
    </div>
  )
}

export default Header
