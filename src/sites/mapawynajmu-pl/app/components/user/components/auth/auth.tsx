import React from 'react'
import Email from './components/sign-in/components/email/email'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useApp } from '../../../../../../shared/app/functions/store/use-app'

const UserAuth = () => {
  useStyles(styles)

  const { minInnerHeight } = useApp()

  return (
    <div
      id='user-auth'
      style={{
        minHeight: minInnerHeight,
      }}
    >
      <Email />
    </div>
  )
}

export default UserAuth
