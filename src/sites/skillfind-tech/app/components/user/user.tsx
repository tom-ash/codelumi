import React from 'react'
import { useStore } from '../../../../shared/app/functions/store/useStore'
import loadable from '@loadable/component'
const UserNew = loadable(() => import('./components/new/new'))
const UserAuth = loadable(() => import('./components/auth/auth'))
const PasswordReset = loadable(() => import('./components/password-reset/password-reset'))
// const UserEdit = loadable(() => import('./components/edit/edit'))
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'

const User = () => {
  useStyles(styles)

  const { state } = useStore()
  const { render } = state
  const {
    'user/new': renderNew,
    'user/auth': renderAuth,
    // 'user/edit': renderEdit,
    'user/password-reset': renderPasswordReset,
  } = render

  return (
    <div id='user'>
      {renderNew && <UserNew />}
      {/* {renderEdit && <UserEdit />} */}
      {renderAuth && <UserAuth />}
      {renderPasswordReset && <PasswordReset />}
    </div>
  )
}

export default User
