import React from 'react'
import { connect } from 'react-redux'
import * as reduxMappers from './constants/mappers'
import { ManagedLink } from 'managed-inputs'
import * as managers from './functions/managers'
import { changePath } from '../../../../functions/routers/change-path'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { labelProvider } from '../../../user/components/show/functions/label-provider'
import { matchPathToLanguage } from '../../../../functions/routers/match-path-to-language'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.titleManager = managers.titleManager.bind(this)
    this.signUpManager = managers.signUpManager.bind(this)
    this.signInManager = managers.signInManager.bind(this)
    this.myAccountManager = managers.myAccountManager.bind(this)
    this.languageManager = managers.languageManager.bind(this)
    this.changePath = changePath.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.matchPathToLanguage = matchPathToLanguage.bind(this)
  }

  render() {
    const { changeControl, device, authorized } = this.props
    const isLargePc = device === 'largePc'

    return (
      <div id='header'>
        <div className='inner'>
          {!isLargePc &&
          <div
            className='links-icon-container'
            onClick={() => {
              if (!authorized) {
                this.props.changeControl({ showLinks: !this.props.showLinks })
              } else {
                this.props.changeApp({ showUserShow: !this.props.showUserShow })
              }
            }}
          >
            <div className='links-icon'>
              <div className='link-icon' />
              <div className='link-icon' />
              <div className='link-icon' />
            </div>
          </div>}
          <div
            id='warsaw-lease'
            { ...!isLargePc && { className: 'shifted' } }
          >
            <ManagedLink {...this.titleManager()} />
          </div>
          <div className='top-links'>
            {isLargePc && <ManagedLink {...this.addAnnouncementManager()} />}
            {isLargePc && <ManagedLink {...this.signUpManager()} />}
            {isLargePc && <ManagedLink {...this.signInManager()} />}
            {isLargePc && <ManagedLink {...this.myAccountManager()} />}
            <ManagedLink {...this.languageManager()} />
          </div>
          {this.props.showLinks &&
          <div className='side-links-cover' onClick={() => changeControl({ showLinks: false })}>
            <div className='side-links'>
              <ManagedLink {...this.addAnnouncementManager()} />
              <ManagedLink {...this.signUpManager()} />
              <ManagedLink {...this.signInManager()} />
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default connect(reduxMappers.mapStateToProps, reduxMappers.mapDispatchToProps)(Header)
