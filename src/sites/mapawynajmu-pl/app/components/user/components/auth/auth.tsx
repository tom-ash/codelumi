import React from 'react'
import Email from './components/email/email'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const UserAuth = () => {
  useStyles(styles)

  return (
    <div id='user-authorize'>
      <Email />
    </div>
  )
}

export default UserAuth
