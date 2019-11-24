import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import UserEditAccountPassword from './components/account/components/password/password'
import UserEditAccount from './components/account/account'
import UserEditCard from './components/card/card'
import UserEditPhoneNumberVerify from './components/phone/components/verify/verify'
import { checkRoute } from '../../../../functions/routers'
import './styles/styles.scss'

class UserEdit extends React.Component {
  constructor(props) {
    super(props)
    this.checkRoute = checkRoute.bind(this)
  }
  render() {
    return (
      <div
        id='user-edit'
        // onClick={e => e.stopPropagation()}
      >
        {
        this.checkRoute('phoneVerify') &&
        <UserEditPhoneNumberVerify />
        }
        {
        (this.props.path === '/resetpassword' ||  this.props.path === '/resethasla') &&
        <UserEditAccountPassword />
        }
        {
        (this.props.path === '/myaccount/settings' ||  this.props.path === '/mojekonto/ustawienia') &&
        <UserEditAccount />
        }
        {
        (this.props.path === '/myaccount/card' ||  this.props.path === '/mojekonto/wizytowka') &&
        <UserEditCard />
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit)
