import React from 'react'
import { UserNewEmail } from './components/email/email'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useRender } from '../../../../../../shared/app/functions/store/use-render'
import { useApp } from '../../../../../../shared/app/functions/store/use-app'

const UserNew = () => {
  useStyles(styles)

  const renderListingsNewForm = useRender()['listings>new>form']

  if (renderListingsNewForm) return <UserNewEmail />

  return (
    <>
      <div id='user-create'>
        <UserNewEmail />
      </div>
    </>
  )
}

export default UserNew
