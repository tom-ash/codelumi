import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Logo from '../logo/logo'

interface ExtendedLogoInterface {
  (props: { scale?: number }): React.ReactElement
}

export const ExtendedLogo: ExtendedLogoInterface = (props) => {
  useStyles(styles)

  const { scale: customScale } = props
  const scale = customScale || 1

  const paddingLeft = 420 * scale
  const fontSize = 160 * scale

  return (
    <div id='extended-logo'>
      <Logo scale={scale} />
      <div
        className='title'
        style={{
          paddingLeft,
          fontSize,
        }}
      >
        <div>mapa</div>
        <div className='lease'>wynajmu</div>
      </div>
    </div>
  )
}

export default ExtendedLogo
