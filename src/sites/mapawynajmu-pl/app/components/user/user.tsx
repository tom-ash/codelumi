import React from 'react'
import { useStore } from '../../../../shared/app/functions/store/useStore'
import loadable from '@loadable/component'
const UserNew = loadable(() => import('./components/new/new'))
const UserAuth = loadable(() => import('./components/auth/auth'))
const PasswordReset = loadable(() => import('./components/password-reset/password-reset'))
const UserEdit = loadable(() => import('./components/edit/edit'))

const User = () => {
  const { state } = useStore()
  const { render } = state
  const {
    'user/new': renderCreate,
    'user/auth': renderAuthorize,
    'user/edit': renderEdit,
    'user/password-reset': renderPasswordReset,
  } = render

  return (
    <React.Fragment>
      {renderCreate && <UserNew />}
      {renderEdit && <UserEdit />}
      {renderAuthorize && <UserAuth />}
      {renderPasswordReset && <PasswordReset />}
    </React.Fragment>
  )
}

export default User
