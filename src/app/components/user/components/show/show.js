import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { componentDidMount, componentDidUpdate } from './functions/lifecycle'
import { changeRoute } from '../../../../functions/routers'
import { ManagedButton } from 'managed-inputs'
import { pageHeaderProvider } from '../../../../functions/header-providers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import * as managers from './functions/managers'
import { labelProvider } from './functions/label-provider'
import './styles/styles.scss'

class UserShow extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.listAnnouncementsManager = managers.listAnnouncementsManager.bind(this)
    this.accountManager = managers.accountManager.bind(this)
    this.deAuthorizeManager = managers.deAuthorizeManager.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.componentDidMount = componentDidMount.bind(this)
    this.componentDidUpdate = componentDidUpdate.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    return (
      <div
        id='user-show-account'
        className='container narrow-container shadowed'
        onClick={e => e.stopPropagation()}
      >
        <ManagedButton {...this.addAnnouncementManager()} />
        <ManagedButton {...this.listAnnouncementsManager()} />
        <ManagedButton {...this.accountManager()} />
        <ManagedButton {...this.deAuthorizeManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow)