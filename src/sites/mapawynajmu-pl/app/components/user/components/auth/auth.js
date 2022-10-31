import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { langHandler } from '../../../../functions/lang-handler'
import UserAuthorizeEmailTrack from './components/email/email'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { Heading } from '../../../support/components/heading'
import { Line } from '../../../support/components/line/line'

class UserAuth extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
  }

  render() {
    const headerText = this.langHandler({ pl: 'Zaloguj', en: 'Sign In' })

    return (
      <div id='user-authorize'>
        <div className='container'>
          <Heading tier={1} text={headerText} />
          <Line />
          <UserAuthorizeEmailTrack />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserAuth))
