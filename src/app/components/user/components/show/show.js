import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedButton, ManagedLink } from 'managed-inputs'
import { pageHeaderProvider } from '../../../../functions/header-providers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import * as managers from './functions/managers'
import { labelProvider } from './functions/label-provider'
import { changeRoute } from '../../../../functions/routers'

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.listAnnouncementsManager = managers.listAnnouncementsManager.bind(this)
    this.accountManager = managers.accountManager.bind(this)
    this.deAuthorizeManager = managers.deAuthorizeManager.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changeRoute = changeRoute.bind(this)
  }

  render() {
    return (
      <div
        id='user-show-account'
        className='container narrow-container shadowed'
        onClick={e => e.stopPropagation()}
      >
        <ManagedLink {...this.addAnnouncementManager()} />
        <ManagedLink {...this.listAnnouncementsManager()} />
        <ManagedLink {...this.accountManager()} />
        <ManagedButton {...this.deAuthorizeManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)