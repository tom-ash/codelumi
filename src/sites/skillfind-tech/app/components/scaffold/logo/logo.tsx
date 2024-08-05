import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../shared/app/components/support/link/link'
import Icon from '../icon/icon'

interface LogoInterface {
  (props: { scale?: number }): JSX.Element
}

export const Logo: LogoInterface = props => {
  useStyles(styles)

  return (
    <div id='logo'>
      <Icon />
      <span>
        skillfind.tech
      </span>
    </div>
  )
}

export default Logo
