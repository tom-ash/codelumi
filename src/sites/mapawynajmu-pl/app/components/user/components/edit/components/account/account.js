import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import UserEditAccountCell from './components/cell/cell'
import { langHandler } from '../../../../../../functions/lang-handler'
import { Heading } from '../../../../../support/components/heading'
import { HEADER_TEXT } from './constants/texts.js'
import { Line } from '../../../../../support/components/line/line'

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
        <Heading tier={1} text={headerText} svg='userCog' />
        {accountType == 'private' ? (
          <UserEditAccountCell key='firstName' item='firstName' />
        ) : (
          <>
            <UserEditAccountCell key='businessName' item='businessName' />
            <Line />
            <UserEditAccountCell key='taxNumber' item='taxNumber' />
          </>
        )}
        <Line />
        <UserEditAccountCell item='phone' />
        <Line />
        <UserEditAccountCell item='email' />
        <Line />
        <UserEditAccountCell item='password' />
        <Line />
        <UserEditAccountCell item='destroy' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserEditAccount))
