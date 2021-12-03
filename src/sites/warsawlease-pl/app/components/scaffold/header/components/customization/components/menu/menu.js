import React from 'react'
import Links from '../links/links.js'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import Button from './components/button/button.js'

const HeaderMenu = props => {
  const { isMobile } = props

  useStyles(styles)

  // TODO CHANGE ROUTE
  const renderMenu = false

  return (
    <>
      {isMobile && <Button {...props}/>}
      {renderMenu &&
      <div className='menu-cover' onClick={() => 'TODO'}>
        <div className='menu'>
          <Links isMenu {...props}/>
        </div>
      </div>}
    </>
  )
}

export default HeaderMenu
