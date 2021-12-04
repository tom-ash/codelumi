import React, { useState } from 'react'
import Links from './components/links/links.js'
import Menu from './components/menu/menu.js'

const HeaderCustomization = props => {

  const [showMenu, changeShowMenu] = useState(false)
  const enhancedProps = { ...props, showMenu, changeShowMenu }

  return (
    <>
      <Menu {...enhancedProps} />
      <Links {...enhancedProps}/>
    </>
  )
}

export default HeaderCustomization

