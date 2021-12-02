import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedButton, ManagedLink } from 'managed-inputs'
import langHandler from '../../../../functions/lang-handler'
import * as managers from './functions/managers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { USER_SHOW_TRACK } from '../../../../../shared/constants/tracks/tracks'
import AppContext from '../../../../constants/context.js'

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.myAnnouncementsManager = managers.myAnnouncementsManager.bind(this)
    this.accountManager = managers.accountManager.bind(this)
    this.deAuthorizeManager = managers.deAuthorizeManager.bind(this)
    this.langHandler = langHandler.bind(this)
  }

  static contextType = AppContext

  render() {
    const {
      lang,
      links
    } = this.props

    return (
      <div id='user-show' onClick={() => 'TODO'}>
        <div id='user-show-account' onClick={e => e.stopPropagation()}>
          <ManagedLink {...this.addAnnouncementManager({ links, lang })} />
          <ManagedLink {...this.myAnnouncementsManager({ links, lang })} />
          <ManagedLink {...this.accountManager({ links, lang })} />
          <ManagedButton {...this.deAuthorizeManager({ links, lang })} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserShow))
