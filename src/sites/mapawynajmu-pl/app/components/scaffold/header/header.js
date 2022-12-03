import React from 'react'
import { Logo } from './components/logo'
import useStyles from 'isomorphic-style-loader/useStyles'

const Header = props => {
  const { HeaderCustomization, device, styles, links, lang, Logo: HtmlLogo, changeRoute, buildUrl } = props

  useStyles(styles)

  const isMobile = ['largeTablet', 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

  const logoProps = {
    links,
    lang,
    HtmlLogo,
    changeRoute,
    buildUrl,
  }

  return (
    <header id='header'>
      <Logo {...logoProps} />
      <HeaderCustomization {...{ ...props, isMobile }} />
      <div className='float-clear' />
    </header>
  )
}

export default Header
