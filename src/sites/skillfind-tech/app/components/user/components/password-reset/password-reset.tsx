import React from 'react'
import CommonPasswordReset from '../../../../../../shared/app/components/user/components/password-reset/password-reset'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const PasswordReset = () => {
  useStyles(styles)

  // <MainHeading icon='signIn' />
  return <CommonPasswordReset />
}

export default PasswordReset
