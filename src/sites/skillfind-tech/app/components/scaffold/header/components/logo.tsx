import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { Link } from '../../../../../../shared/app/components/support/link/link'

interface LogoInterface {
  (props: {}): JSX.Element
}

export const Logo: LogoInterface = props => {
  useStyles(styles)

  const label = (
    <div className='text'>
      <strong>skillfind.<span className='tech'>tech</span></strong>
    </div>
  )

  const linkProps = {
    linkKey: 'root',
    label,
    customClassNames: 'logo',
  }

  return <Link {...linkProps} />
}
