import React from 'react'
import { LogoLink } from './components/logo-link/logo-link'
import { FloatClear } from '../../../../../shared/app/components/support/float-clear/float-clear'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Links } from './components/links/links'
import { MyAccountMenu } from './components/my-account-menu/my-account-menu'
import { MobileMenu } from './components/mobile-menu/mobile-menu'
import { LangSwitch } from '../../../../../shared/app/components/support/lang-switch/lang-switch'
import { useControl } from '../../../../../shared/app/functions/store/use-control'
import { useApp } from '../../../../../shared/app/functions/store/use-app'

const Header = () => {
  useStyles(styles)

  const { device } = useApp()
  const { showMyAccountMenu } = useControl()

  // TODO!!!
  const isMobile = ['largeTablet', 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

  // TODO: ADD ARTICLES TO MOBILE MENU!

  return (
    <header id='header'>
      <div id='inner-header'>
        <LogoLink />
        <LangSwitch />
        {!isMobile && <Links />}
        {showMyAccountMenu && <MyAccountMenu />}
        {isMobile && <MobileMenu />}
        <FloatClear />
      </div>
    </header>
  )
}

export default Header
