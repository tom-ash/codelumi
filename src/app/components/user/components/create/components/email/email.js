import React from 'react'
import { connect } from 'react-redux'
import UserCreateEmailInputs from './components/inputs/inputs'
import UserCreateConsents from '../consents/consents'
import UserCreateSubmit from './components/submit/submit'
import UserCreateConnecting from '../connecting/connecting'
import UserCreateEmailVerify from './components/verify/verify'
import * as mappers from './constants/mappers'
import './styles/styles.scss'

class UserCreateEmail extends React.Component {  
  render() {
    return (
      <div id='user-create-email'>
        {
        !this.props.token ?
        <div>
          {
          !this.props.connecting ?
          <div>
            <UserCreateEmailInputs />
            <UserCreateConsents />
            <UserCreateSubmit />
          </div>
          :
          <UserCreateConnecting />
          }
        </div>
        :
        <div>
          {
          !this.props.connecting ?
          <UserCreateEmailVerify />
          :
          <UserCreateConnecting />
          }
        </div>
        }
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreateEmail);