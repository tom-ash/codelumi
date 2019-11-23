import React from 'react'
import { connect } from 'react-redux'
import * as mappers from './constants/mappers'
import { componentDidUpdate } from './functions/lifecycle'
import { changeRoute } from '../../../../functions/routers'
import UserCreateEmail from './components/email/email'
import './styles/styles.scss'
import * as lifecycle from './functions/lifecycle'

class UserCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidUpdate = componentDidUpdate.bind(this)
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    return (
      <div
        id='user-create-container'
        onClick={e => e.stopPropagation()}
      >
        <h2 className='page-header'>
          <i className='fas fa-user-plus' /> Rejestracja konta
        </h2>
        {
        this.props.success === null &&
        <UserCreateEmail />
        }
      </div>
    )
  }
}

export default connect(mappers.mapStateToProps, mappers.mapDispatchToProps)(UserCreate);
