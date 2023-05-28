import React from 'react'
import Email from './components/sign-in/components/email/email'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'

const UserAuth = () => {
  useStyles(styles)

  const { state } = useStore()
  const { app } = state
  const { minInnerHeight } = app

  return (
    <div
      id='user-auth'
      style={{
        minHeight: minInnerHeight
      }}
    >
      <Email />
    </div>
  )
}

export default UserAuth
