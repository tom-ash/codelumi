import React from 'react'
import { connect } from 'react-redux'
import UserCreateEmailInputs from './components/inputs/inputs'
import UserCreateConsents from '../consents/consents'
import UserCreateSubmit from './components/submit/submit'
import UserCreateEmailVerify from './components/verify/verify'
import * as mappers from './constants/mappers'

class UserCreateEmail extends React.Component {
  render() {
    const { token } = this.props

    return (
      <div id='user-create-email'>
        <form>
          {!token ?
          <>
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