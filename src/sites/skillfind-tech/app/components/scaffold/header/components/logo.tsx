import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../shared/app/components/support/link/link'

interface LogoInterface {
  (props: { scale?: number }): JSX.Element
}

export const LogoName: LogoInterface = props => {
  useStyles(styles)

  const label = (
    <div id='logo-name'>
      <span>skillfind.</span>
      <span className='tech'>tech</span>
    </div>
  )

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <Link {...linkProps} />
}

export default LogoName
