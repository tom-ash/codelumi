
import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

interface LogoInterface {
  (props: { scale?: number }): React.ReactElement
}

export const Logo: LogoInterface = (props) => {
  useStyles(styles)

  const { scale: customScale } = props
  const scale = customScale || 1
  const height = 360 * scale

  return (
    <div
      id='logo'
      style={{
        height: height
      }}
    >
      <img
        src='https://mapawynajmupl.s3.eu-central-1.amazonaws.com/logo.jpeg?a=123'
        alt='mapawynajmu.pl logo'
        crossOrigin={'anonymous'}
      />
    </div>
  )
}

export default Logo
