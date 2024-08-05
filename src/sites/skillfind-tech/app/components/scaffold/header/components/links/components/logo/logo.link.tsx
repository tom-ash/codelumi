import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../../../../shared/app/components/support/link/link'
import Logo from '../../../../../logo/logo'

interface LogoInterface {
  (): JSX.Element
}

export const LogoLink: LogoInterface = () => {
  useStyles(styles)

  const label = <Logo />

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo-link'
  }

  return <Link {...linkProps} />
}

export default LogoLink
