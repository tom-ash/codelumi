import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import UserCreate from './components/create/create'
import UserAuthorize from './components/authorize/authorize'
import UserShow from './components/show/show'
import UserEdit from './components/edit/edit'
import UserEditAccountPassword from './components/edit/components/account/components/password/password'
import './styles/styles.scss'

class User extends React.Component {
  constructor(props) {
    super(props)
  }

  hideUser = () => {
    const { changeApp } = this.props
    
    changeApp({ showUserCreate: false, showUserAuthorize: false, showUserEditPasswordReset: false,
                showUserShow: false, showUserEditAccount: false })
  }

  render() {
    const { showCreate, showAuthorize, showPasswordReset, showEditPhoneVerify, showAccount, showEdit } = this.props

    return (
      <div id='user'>
        {(showCreate || showAuthorize || showPasswordReset || showEditPhoneVerify) &&
        <div onClick={this.hideUser} className='darkened-cover '>
          {showCreate          && <UserCreate />}
          {showAuthorize       && <UserAuthorize />}
          {showPasswordReset   && <UserEditAccountPassword />}
          {showEditPhoneVerify && <UserEdit />}
        </div>}
        {showAccount &&
        <div onClick={this.hideUser} className='transparent-cover'>
          <UserShow />
        </div>}
        {showEdit && <UserEdit />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
