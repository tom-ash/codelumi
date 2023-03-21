import React from 'react'
import { useStore } from '../../../../../shared/app/functions/store/useStore'
import { LogoLink } from './components/logo-link/logo-link'
import { FloatClear } from '../../../../../shared/app/components/support/float-clear/float-clear'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Links } from './components/links/links'
import { MyAccountMenu } from './components/my-account-menu/my-account-menu'
import { MobileMenu } from './components/mobile-menu/mobile-menu'
import { LangSwitch } from '../../../../../shared/app/components/support/lang-switch/lang-switch'

const Header = () => {
  useStyles(styles)

  const { state } = useStore()
  const { app, control } = state
  const { showMyAccountMenu } = control
  const { device } = app

  // TODO!!!
  const isMobile = ['largeTablet', 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

  // TODO: ADD ARTICLES TO MOBILE MENU!

  return (
    <header id='header'>
      <LogoLink />
      <LangSwitch />
      {!isMobile && <Links />}
      {showMyAccountMenu && <MyAccountMenu />}
      {isMobile && <MobileMenu />}
      <FloatClear />
    </header>
  )
}

export default Header
