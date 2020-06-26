import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import UserCreate from './components/create/create'
import UserAuthorize from './components/authorize/authorize'
import UserShow from './components/show/show'
import UserEditAccountPassword from './components/edit/components/account/components/password/password'
import UserEditAccount from './components/edit/components/account/account'

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      changeApp,
      showCreate,
      showAuthorize,
      showPasswordReset,
      showAccount,
      showEdit
    } = this.props

    return (
      <React.Fragment>
        {showCreate    && <UserCreate />}
        {showAuthorize && <UserAuthorize />}
        {showPasswordReset   && <UserEditAccountPassword />}
        {showAccount &&
        <div
          onClick={() => changeApp({ showUserShow: false })}
          className='transparent-cover'
        >
          <UserShow />
        </div>}
        {showEdit && <UserEditAccount />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
