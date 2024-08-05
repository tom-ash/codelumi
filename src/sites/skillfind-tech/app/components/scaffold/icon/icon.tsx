import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const Icon = () => {
  useStyles(styles)

  return (
    <div className='icon'>
      <div className='lens'>
        0 1
      </div>
      <div className='handle' />
    </div>
  )
}

export default Icon
