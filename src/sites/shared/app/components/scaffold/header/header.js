import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { logoManager } from './functions/managers'
import useStyles from 'isomorphic-style-loader/useStyles'

const Header = props => {
  const { HeaderCustomization, device, styles } = props

  useStyles(styles)

  const isMobile = ['largeTablet', 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

  return (
    <header id='header'>
      <div className='inner'>
        <ManagedLink {...logoManager(props)} />
        <HeaderCustomization {...{ ...props, isMobile }} />
        <div className='float-clear' />
      </div>
    </header>
  )
}

export default Header
