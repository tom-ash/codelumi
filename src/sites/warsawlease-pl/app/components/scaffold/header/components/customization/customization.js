import React from 'react'
import Links from './components/links/links.js'
import Menu from './components/menu/menu.js'

const HeaderCustomization = props => {
  return (
    <>
      <Menu {...props}/>
      <Links {...props}/>
    </>
  )
}

export default HeaderCustomization

