import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import UserCreate from './components/create/create'
import UserAuthorize from './components/authorize/authorize'
import UserShow from './components/show/show'
import UserEditAccountPassword from './components/edit/components/account/components/password/password'
import UserEditPhoneNumberVerify from './components/edit/components/phone/components/verify/verify'
import UserEditAccount from './components/edit/components/account/account'
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
      <React.Fragment>
        {(showCreate || showAuthorize || showPasswordReset || showEditPhoneVerify) &&
        <div onClick={this.hideUser} className='darkened-cover '>
          {showCreate          && <UserCreate />}
          {showAuthorize       && <UserAuthorize />}
          {showPasswordReset   && <UserEditAccountPassword />}
          {showEditPhoneVerify && <UserEditPhoneNumberVerify />}
        </div>}
        {showAccount &&
        <div onClick={this.hideUser} className='transparent-cover'>
          <UserShow />
        </div>}
        {showEdit && <UserEditAccount />}
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
