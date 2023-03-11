import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const UserNew = loadable(() => import('./components/new/new'))
const UserAuth = loadable(() => import('./components/auth/auth'))
const PasswordReset = loadable(() => import('./components/password-reset/password-reset'))
const UserEdit = loadable(() => import('./components/edit/edit'))

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { renderCreate, renderAuthorize, renderEditPassword, renderEdit } = this.props

    return (
      <React.Fragment>
        {renderCreate && <UserNew />}
        {renderEdit && <UserEdit />}
        {renderAuthorize && <UserAuth />}
        {renderEditPassword && <PasswordReset />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
