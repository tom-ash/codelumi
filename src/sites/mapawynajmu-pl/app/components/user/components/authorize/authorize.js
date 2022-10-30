import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../functions/lang-handler'
import UserAuthorizeEmailTrack from './components/email-password/email-password'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { Heading } from '../../../support/components/heading'

class UserAuthorize extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const headerText = this.langHandler({ pl: 'Zaloguj', en: 'Sign In' })

    return (
      <div id='user-authorize'>
        <Heading tier={1} text={headerText} />
        <UserAuthorizeEmailTrack />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserAuthorize))
