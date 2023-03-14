import React from 'react'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'
import { ManagedLink } from 'managed-inputs'
import { changeUrl } from '../../../../../../shared/app/functions/routes/changers/change-url'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

interface LogoInterface {
  (props: {}): JSX.Element
}

export const Logo: LogoInterface = props => {
  useStyles(styles)

  const { state } = useStore()
  const { links } = state
  const rootLink = links['root']
  const classNames = { container: 'logo' }
  const label = (
    <div className='text'>
      <strong>skillfind.<span className='tech'>tech</span></strong>
    </div>
  )
  const onClick = () => {
    window.areListingsObsolete = true
    changeUrl({ ...rootLink })
  }
  const linkProps = { classNames, ...rootLink, label, onClick }

  return <ManagedLink {...linkProps} />
}
