import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import UserEditAccountPassword from './components/account/components/password/password'
import UserEditAccount from './components/account/account'
import UserEditPhoneNumberVerify from './components/phone/components/verify/verify'
import './styles/styles.scss'

class UserEdit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { showPasswordReset, showPhoneVerify, showAccount } = this.props

    return (
      <div
        id='user-edit'
        onClick={e => e.stopPropagation()}
      >
        {showPasswordReset && <UserEditAccountPassword />}
        {showPhoneVerify   && <UserEditPhoneNumberVerify />}
        {showAccount       && <UserEditAccount />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
