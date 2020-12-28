import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
const UserCreate = loadable(() => import('./components/create/create'))
const UserAuthorize = loadable(() => import('./components/authorize/authorize'))
const UserShow = loadable(() => import('./components/show/show'))
const UserEditAccountPassword = loadable(() => import('./components/edit/components/account/components/password/password'))
const UserEditAccount = loadable(() => import('./components/edit/components/account/account'))

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      renderCreate,
      renderAuthorize,
      renderPasswordReset,
      renderAccount,
      renderEdit
    } = this.props

    return (
      <React.Fragment>
        {renderCreate && <UserCreate />}
        {renderAuthorize && <UserAuthorize />}
        {renderPasswordReset && <UserEditAccountPassword />}
        {renderAccount &&
        <div
          TODO
          className='transparent-cover'
        >
          <UserShow />
        </div>}
        {renderEdit && <UserEditAccount />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
