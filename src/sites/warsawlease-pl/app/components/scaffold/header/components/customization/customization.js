import React from 'react'
import PageHeader from './components/page-header/page-header'
import Links from './components/links/links.js'
import Menu from './components/menu/menu.js'

const HeaderCustomization = props => {
  const { render: { "announcement/index/map": renderMap, "announcement/index/catalogue": renderCatalogue }, isMobile, langHandler } = props

  return (
    <>
      <Menu {...props}/>
      <Links {...props}/>
    </>
  )
}

export default HeaderCustomization

