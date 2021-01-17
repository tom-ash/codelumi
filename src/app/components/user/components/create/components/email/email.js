import React from 'react'
import { connect } from 'react-redux'
import Inputs from './components/inputs/inputs'
import Consents from '../consents/consents'
import Submit from './components/submit/submit'
import Verify from './components/verify/verify'
import * as mappers from './constants/mappers'

class UserCreateEmail extends React.Component {
  render() {
    const { token } = this.props

    return (
      <div id='user-create-email'>
        <form>
          {!token ?
          <>
            <Inputs />
            <Consents />
            <Submit />
          </>
          :
          <Verify />}
        </form>
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmail);