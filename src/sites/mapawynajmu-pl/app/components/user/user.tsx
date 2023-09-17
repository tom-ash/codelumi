import React from 'react'
import loadable from '@loadable/component'
import { useRender } from '../../../../shared/app/functions/store/use-render'
const UserNew = loadable(() => import('./components/new/new'))
const UserAuth = loadable(() => import('./components/auth/auth'))
const PasswordReset = loadable(() => import('./components/password-reset/password-reset'))
const UserEdit = loadable(() => import('./components/edit/edit'))

const User = () => {
  const {
    'user/new': renderCreate,
    'user/auth': renderAuthorize,
    'user/edit': renderEdit,
    'user/password-reset': renderPasswordReset,
  } = useRender()

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
