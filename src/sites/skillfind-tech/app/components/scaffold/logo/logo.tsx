import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import Icon from '../icon/icon'

interface LogoInterface {
  (props: { scale?: number }): JSX.Element
}

export const Logo: LogoInterface = props => {
  useStyles(styles)

  const { scale } = props

  return (
    <div
      id='logo'
      style={{
        transform: `scale(${scale})`,
      }}
    >
      <span className='skillfind'>skillfind</span>
      <Icon scale={0.03} />
      <span className='tech'>tech</span>
    </div>
  )
}

export default Logo
