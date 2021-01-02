import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedButton, ManagedLink } from 'managed-inputs'
import { languageObjectHandler } from '../../../../functions/language-handler'
import * as managers from './functions/managers'
import { labelProvider } from './functions/label-provider'
import { changeRoute } from '../../../../functions/routers/change-route'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import { USER_SHOW_TRACK } from '../../../../../shared/constants/tracks/tracks'

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.myAnnouncementsManager = managers.myAnnouncementsManager.bind(this)
    this.accountManager = managers.accountManager.bind(this)
    this.deAuthorizeManager = managers.deAuthorizeManager.bind(this)
    this.languageHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    const {
      language: hrefLang,
      changeRender
    } = this.props

    return (
      <div
        id='user-show'
        onClick={() => changeRender({ [USER_SHOW_TRACK]: false })}
      >
        <div
          id='user-show-account'
          onClick={e => e.stopPropagation()}
        >
          <ManagedLink {...this.addAnnouncementManager({ hrefLang })} />
          <div className='line' />
          <ManagedLink {...this.myAnnouncementsManager({ hrefLang })} />
          <div className='line' />
          <ManagedLink {...this.accountManager({ hrefLang })} />
          <div className='line' />
          <ManagedButton {...this.deAuthorizeManager({ hrefLang })} />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UserShow))
