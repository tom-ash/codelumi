import React from 'react'
import CommonPasswordReset from '../../../../../../shared/app/components/user/components/password-reset/password-reset'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { useApp } from '../../../../../../shared/app/functions/store/use-app'

const PasswordReset = () => {
  useStyles(styles)

  const { minInnerHeight } = useApp()

  return (
    <div
      id='user-password-reset'
      style={{
        minHeight: minInnerHeight,
      }}
    >
      <CommonPasswordReset />
    </div>
  )
}

export default PasswordReset
