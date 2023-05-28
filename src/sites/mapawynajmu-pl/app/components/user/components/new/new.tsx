import React from 'react'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'
import { UserNewEmail } from './components/email/email'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const UserNew = () => {
  useStyles(styles)

  const { state } = useStore()
  const { render, app } = state
  const { minInnerHeight } = app
  const renderAnnouncementCreate = render['announcement/create/form']

  if (renderAnnouncementCreate) return <UserNewEmail />

  return (
    <>
      <div
        id='user-create'
        style={{
          minHeight: minInnerHeight
        }}
      >
        <UserNewEmail />
      </div>
    </>
  )
}

export default UserNew
