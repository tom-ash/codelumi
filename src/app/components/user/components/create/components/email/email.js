import React from 'react'
import { connect } from 'react-redux'
import UserCreateEmailInputs from './components/inputs/inputs'
import UserCreateConsents from '../consents/consents'
import UserCreateSubmit from './components/submit/submit'
import UserCreateEmailVerify from './components/verify/verify'
import * as mappers from './constants/mappers'

class UserCreateEmail extends React.Component {
  render() {
    const {
      showAnnouncementCreate,
      token
    } = this.props

    if (showAnnouncementCreate) {
      return (
        <div id='user-create-email'>
          {/* <i className="fas fa-user-alt"></i> */}
          <form>
            <UserCreateEmailInputs />
            <UserCreateConsents />
            <UserCreateSubmit />
          </form>
        </div>
      )
    }

    return (
      <div id='user-create-email'>
        <form>
          {!token ?
          <>
            {/* <i className="fas fa-user-alt"></i> */}
            <UserCreateEmailInputs />
            <UserCreateConsents />
            <UserCreateSubmit />
          </>
          :
          <UserCreateEmailVerify />}
        </form>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmail);