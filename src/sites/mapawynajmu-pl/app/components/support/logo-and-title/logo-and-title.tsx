import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

interface LogoAndTitleInterface {
  (props?: { scale?: number }): React.ReactElement
}

export const LogoAndTitle: LogoAndTitleInterface = (props = { scale: 1 }) => {
  useStyles(styles)

  const { scale } = props

  return (
    <div
      id='logo'
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      }}
    >
      <img
        src='https://mapawynajmupl.s3.eu-central-1.amazonaws.com/logo.jpeg?a=123'
        alt='mapawynajmu.pl logo'
        crossOrigin={'anonymous'}
      />
      <div className='title'>
        <div>mapa</div>
        <div className='lease'>wynajmu</div>
      </div>
    </div>
  )
}

export default LogoAndTitle
