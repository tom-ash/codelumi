import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import { componentDidUpdate } from './functions/lifecycle'
import { changeRoute } from '../../../../functions/routers'
import UserCreateEmail from './components/email/email'
import { CloseButton } from '../../../../components/support/components/close-button/close-button'
import * as lifecycle from './functions/lifecycle'
import { languageHandler } from '../../../../functions/language-handler'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidUpdate = componentDidUpdate.bind(this)
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.changeRoute = changeRoute.bind(this)
    this.languageHandler = languageHandler.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        <CloseButton classNames='page narrow'/>
        <div
          id='user-create-container'
          className='container narrow-container shadowed'
          onClick={e => e.stopPropagation()}
        >
          <h2 className='page-header'>
            <i className='fas fa-user-plus' /> {this.languageHandler('Zarejestruj', 'Sign Up')}
          </h2>
          {this.props.success === null &&
          <UserCreateEmail />}
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreate);
