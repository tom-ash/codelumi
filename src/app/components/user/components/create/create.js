import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import { componentDidUpdate } from './functions/lifecycle'
import { changePath } from '../../../../functions/routers/change-path'
import UserCreateEmail from './components/email/email'
import { CloseButton } from '../../../../components/support/components/close-button/close-button'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../functions/language-handler'
import { hideUser } from '../../functions/hide-user'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidUpdate = componentDidUpdate.bind(this)
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.changePath = changePath.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.hideUser = hideUser.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        <div
          id='user-create-container'
          className='container narrow-container shadowed'
        >
          <h1 className='page-header'>
            <i className='fas fa-user-plus' /> {this.languageHandler('Zarejestruj', 'Sign Up')}
          </h1>
          <CloseButton onClick={this.hideUser} classNames='page narrow'/>
          {this.props.success === null &&
          <UserCreateEmail />}
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreate);
