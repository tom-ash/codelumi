import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount, componentWillUnmount } from './functions/lifecycle'
import UserEditAccountCell from './components/cell/cell'
import { languageHandler } from '../../../../../../functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount.bind(this)
    this.componentWillUnmount = componentWillUnmount.bind(this)
    this.languageHandler = languageHandler.bind(this)
  }

  render() {
    const { accountType } = this.props

    return (
      <div id='user-edit-account' className='container narrow-container shadowed'>
        <h2 className='page-header'>
          <i className='fas fa-cog' /> {this.languageHandler('Ustawienia', 'Settings')}
        </h2>
        {accountType == 'private' ?
        <React.Fragment>
          <UserEditAccountCell key='firstName' item='firstName' />
          <UserEditAccountCell key='lastName' item='lastName' />
        </React.Fragment>
        :
        <React.Fragment>
          <UserEditAccountCell key='businessName' item='businessName' />
          <UserEditAccountCell key='taxNumber' item='taxNumber' />
        </React.Fragment>}
        <UserEditAccountCell item='phone'/>
        <UserEditAccountCell item='email'/>
        <UserEditAccountCell item='password'/>
        <UserEditAccountCell item='destroy'/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserEditAccount))
