import React from 'react'
import { ManagedRadio } from 'managed-inputs'
import { radioManager } from './functions/radio-manager.js'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'

export default props => {
  useStyles(styles)
  
  return (
    <div className='lang-switch'>
      <ManagedRadio {...radioManager(props)} />
    </div>
  )
}
