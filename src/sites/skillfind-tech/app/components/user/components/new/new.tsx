import React from 'react'
import { UserNewEmail } from './components/email/email'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useRender } from '../../../../../../shared/app/functions/store/use-render'

const UserNew = () => {
  useStyles(styles)

  const render = useRender()

  const renderAnnouncementCreate = render['announcement/create/form']

  if (renderAnnouncementCreate) return <UserNewEmail />

  return (
    <>
      <div id='user-new'>
        <UserNewEmail />
      </div>
    </>
  )
}

export default UserNew
