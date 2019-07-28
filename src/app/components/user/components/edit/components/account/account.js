import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount, componentWillUnmount } from './functions/lifecycle'
import UserEditAccountCell from './components/cell/cell'
import './styles/styles.scss'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount.bind(this)
    this.componentWillUnmount = componentWillUnmount.bind(this)
  }

  render() {
    return (
      <div id='user-edit-account'>
        <UserEditAccountCell item='businessName' />
        <UserEditAccountCell item='taxIdentification' />
        <UserEditAccountCell item='phone'/>
        <UserEditAccountCell item='email'/>
        <UserEditAccountCell item='password'/>
        <UserEditAccountCell item='destroy'/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccount)