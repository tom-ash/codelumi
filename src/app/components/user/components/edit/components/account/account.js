import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount, componentWillUnmount } from './functions/lifecycle'
import UserEditAccountCell from './components/cell/cell'
import { languageHandler } from '../../../../../../functions/language-handler'
import './styles/styles.scss'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount.bind(this)
    this.componentWillUnmount = componentWillUnmount.bind(this)
    this.languageHandler = languageHandler.bind(this)
  }

  render() {
    return (
      <div id='user-edit-account'>
        <h2 className='page-header'>
          <i className='fas fa-cog' /> {this.languageHandler('Ustawienia', 'Settings')}
        </h2>
        <UserEditAccountCell item='businessName' />
        <UserEditAccountCell item='taxNumber' />
        <UserEditAccountCell item='phone'/>
        <UserEditAccountCell item='email'/>
        <UserEditAccountCell item='password'/>
        <UserEditAccountCell item='destroy'/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditAccount)