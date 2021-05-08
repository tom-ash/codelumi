import React from 'react'
import { ManagedLink } from 'managed-inputs'
import { logoManager, langManager } from './functions/managers'
import useStyles from 'isomorphic-style-loader/useStyles'

const Header = props => {
  const { styles } = props
  
  useStyles(styles)

  return (
    <div id='header'>
      <div className='inner'>
        <ManagedLink {...logoManager(props)} />
        <ManagedLink {...langManager(props)} />
      </div>
    </div>
  )
}

export default Header
