import React from 'react'
import CommonPasswordReset from '../../../../../../shared/app/components/user/components/password-reset/password-reset'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useStore } from '../../../../../../shared/app/functions/store/useStore'

const PasswordReset = () => {
  useStyles(styles)

  const { state } = useStore()
  const { app } = state
  const { minInnerHeight } = app

  return (
    <div
      id='user-password-reset'
      style={{
        minHeight: minInnerHeight
      }}
    >
      <CommonPasswordReset />
    </div>
  )
}

export default PasswordReset
