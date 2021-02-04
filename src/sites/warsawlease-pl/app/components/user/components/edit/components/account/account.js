import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount, componentWillUnmount } from './functions/lifecycle'
import UserEditAccountCell from './components/cell/cell'
import { langHandler, langObjHandler } from '../../../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Header from '../../../../../support/components/header/header.js'
import { HEADER_TEXT } from './constants/texts.js'

class UserEditAccount extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = componentDidMount.bind(this)
    this.componentWillUnmount = componentWillUnmount.bind(this)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
  }

  render() {
    const { accountType, svgs } = this.props
    const headerText = this.langObjHandler(HEADER_TEXT)
    const headerSvgPathData = svgs && svgs.user_cog

    return (
      <div id='user-edit-account' className='container narrow-container shadowed'>
        <Header viewBox={'0 0 640 512'} tier={1} text={headerText} svgPathData={headerSvgPathData} />
        {accountType == 'private' ?
        <UserEditAccountCell key='firstName' item='firstName' />
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
