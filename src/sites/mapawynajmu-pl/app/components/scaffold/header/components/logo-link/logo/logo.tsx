import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

export const Logo = () => {
  useStyles(styles)

  return (
    <div
      id='logo'
    >
      <div className='tile'>
        <div className='house'>
          <div className='chimney' />
          <div className='pin'>
            <div className='head' />
            <div className='leg' />
          </div>
        </div>
      </div>
      <div className='name'>
        <span>mapa</span>
        <span className='lease'>wynajmu</span>
      </div>
    </div>
  )
}
