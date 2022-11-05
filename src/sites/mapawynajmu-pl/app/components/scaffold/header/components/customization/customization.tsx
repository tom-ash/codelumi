import React, { useState } from 'react'
import Links from './components/links/links'
import Menu from './components/menu/menu'

// @ts-ignore
export const HeaderCustomization = props => {
  const [showMenu, changeShowMenu] = useState(false)
  const enhancedProps = { ...props, showMenu, changeShowMenu }

  return (
    <>
      <Menu {...enhancedProps} />
      <Links {...enhancedProps} />
    </>
  )
}
