import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { LangSwitch } from '../../../../../shared/app/components/support/lang-switch/lang-switch'
import { FloatClear } from '../../../../../shared/app/components/support/float-clear/float-clear'
import { SignUpLink } from './components/links/components/sign-up/sign-up.link'
import { SignInLink } from './components/links/components/sign-in/sign-in.link'
import { useApp } from '../../../../../shared/app/functions/store/use-app'
import { useUser } from '../../../../../shared/app/functions/store/use-user'
import { AddPostingLink } from './components/links/components/add-posting/add-posting.link'
import { Account } from './components/account/account'
import { SideMenu } from './components/side-menu/side-menu'
import LogoLink from './components/links/components/logo/logo.link'

interface HeaderInterface {
  (props: {}): JSX.Element
}

// TODO

const Header: HeaderInterface = props => {
  useStyles(styles)

  const { isMobile } = useApp()
  const { authorized } = useUser()

  return (
    <header id='header'>
      <div className='inner'>
        <LogoLink />
        {isMobile && <SideMenu />}
        <LangSwitch />
        {!isMobile && (
          <>
            {!authorized && <SignUpLink />}
            {!authorized && <SignInLink />}
            {authorized && <Account />}
            <AddPostingLink />
          </>
        )}
        <FloatClear />
      </div>
    </header>
  )
}

export default Header
