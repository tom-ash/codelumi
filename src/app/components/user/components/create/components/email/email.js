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
      token,
      showAnnouncementCreate
    } = this.props

    return (
      <div id='user-create-email'>
        {!token ?
        <React.Fragment>
          <UserCreateEmailInputs />
          <UserCreateConsents />
          {/* {!showAnnouncementCreate && <UserCreateSubmit />} */}
          <UserCreateSubmit />
        </React.Fragment>
        :
        <UserCreateEmailVerify />}
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmail);