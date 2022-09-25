import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import UserEditAccountCell from './components/cell/cell'
import langHandler from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Header from '../../../../../support/components/heading'
import { HEADER_TEXT } from './constants/texts.js'
import SeparationLine from '../../../../../support/components/separation-line/separation-line.js'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { accountType } = this.props
    const headerText = this.langHandler(HEADER_TEXT)

    return (
      <div id='user-edit-account'>
        <Header tier={1} text={headerText} svg='userCog' />
        {accountType == 'private' ?
        <UserEditAccountCell key='firstName' item='firstName' />
        :
        <>
          <UserEditAccountCell key='businessName' item='businessName' />
          <SeparationLine />
          <UserEditAccountCell key='taxNumber' item='taxNumber' />
        </>}
        <SeparationLine />
        <UserEditAccountCell item='phone'/>
        <SeparationLine />
        <UserEditAccountCell item='email'/>
        <SeparationLine />
        <UserEditAccountCell item='password'/>
        <SeparationLine />
        <UserEditAccountCell item='destroy'/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserEditAccount))
