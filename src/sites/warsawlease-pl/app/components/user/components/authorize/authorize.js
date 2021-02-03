import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler } from '../../../../functions/lang-handler'
import UserAuthorizeEmailTrack from './components/email-password/email-password'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import Header from '../../../support/components/header/header'

class UserAuthorize extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const { svgs } = this.props

    const headerText = this.langHandler('Zaloguj', 'Sign In')
    const headerSvgPathData = svgs && svgs.sign_in

    return (
      <div id='user-authorize'>
        <Header tier={1} text={headerText} svgPathData={headerSvgPathData} />
        <UserAuthorizeEmailTrack />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserAuthorize))
