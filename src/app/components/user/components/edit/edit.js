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
    const { showPasswordReset, showAccount } = this.props

    return (
      <div
        id='user-edit'
        // className='container narrow-container shadowed'
        onClick={e => e.stopPropagation()}
      >
        {false             && <UserEditPhoneNumberVerify />}
        {showPasswordReset && <UserEditAccountPassword />}
        {showAccount       && <UserEditAccount />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
