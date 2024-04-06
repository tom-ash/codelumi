import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useRender } from '../../../../../../shared/app/functions/store/use-render'
import { UserNewEmail } from './components/email/email'
import { Logo } from './components/logo/logo'
import { BusinessName } from './components/business-name/business-name'

const UserNew = () => {
  useStyles(styles)

  const render = useRender()

  const renderAnnouncementCreate = render['listings>new>form']

  if (renderAnnouncementCreate) return <UserNewEmail />

  return (
    <div id='user-new'>
      <BusinessName />
      <Logo />
      <UserNewEmail />
    </div>
  )
}

export default UserNew
