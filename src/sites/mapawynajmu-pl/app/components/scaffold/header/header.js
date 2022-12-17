import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import { LogoLink } from './components/logo-link'

const Header = props => {
  const { HeaderCustomization, device, styles, links, lang, changeRoute, buildUrl } = props

  useStyles(styles)

  const isMobile = ['largeTablet', 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

  const logoLinProps = {
    links,
    lang,
    changeRoute,
    buildUrl,
  }

  return (
    <header id='header'>
      <LogoLink {...logoLinProps} />
      <HeaderCustomization {...{ ...props, isMobile }} />
      <div className='float-clear' />
    </header>
  )
}

export default Header
