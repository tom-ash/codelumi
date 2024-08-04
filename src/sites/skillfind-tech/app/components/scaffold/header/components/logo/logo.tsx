import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../../shared/app/components/support/link/link'
import Symbol from './components/symbol/symbol'

interface LogoInterface {
  (): JSX.Element
}

export const Logo: LogoInterface = () => {
  useStyles(styles)

  const label = (
    <div id='logo'>
      <span className='skillfind'>
        skillfind
      </span>
      <Symbol />
      <span className='tech'>
        tech
      </span>
    </div>
  )

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <Link {...linkProps} />
}

export default Logo
