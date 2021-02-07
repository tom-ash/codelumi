import React from 'react'
import { connect } from 'react-redux'
import * as reduxMappers from './constants/mappers'
import { ManagedLink } from 'managed-inputs'
import * as managers from './functions/managers'
import { langObjHandler } from '../../../../functions/lang-handler'
import { labelProvider } from '../../../user/components/show/functions/label-provider'
import { matchPathToLanguage } from '../../../../functions/routers/match-path-to-lang'
import { HeaderProvider } from '../../../announcement/components/index/functions/header-provider'
import { linksProvider } from './functions/links-provider'
import { RENDER_SIDE_LINKS_TRACK } from './constants/tracks'
import { ThemeContext } from '../../../../constants/contexts.js'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.titleManager = managers.titleManager.bind(this)
    this.signUpManager = managers.signUpManager.bind(this)
    this.signInManager = managers.signInManager.bind(this)
    this.myAccountManager = managers.myAccountManager.bind(this)
    this.languageManager = managers.languageManager.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.matchPathToLanguage = matchPathToLanguage.bind(this)
    this.linksProvider = linksProvider.bind(this)
  }

  static contextType = ThemeContext

  render() {
    const {
      renderMap,
      renderCatalogue,
      renderSideLinks,
      changeControl,
      device,
      authorized
    } = this.props
    const isLargePc = device === 'largePc'
    const showAddAnnouncement = ['largePc', 'smallPc', 'largeTablet'].indexOf(device) !== -1
    const links = this.linksProvider({ authorized })

    return (
      <div id='header'>
        <div className='inner'>
          {!isLargePc &&
          <div className='links-icon-container'>
            <div
              className='links-icon'
              onClick={() => changeControl({ [RENDER_SIDE_LINKS_TRACK]: true })}
            >
              <div className='link-icon' />
              <div className='link-icon' />
              <div className='link-icon' />
            </div>
          </div>}
          <div id='warsaw-lease'>
            <ManagedLink {...this.titleManager()} />
          </div>
          {(renderMap || renderCatalogue) &&
          <h1 className='title'>
            <HeaderProvider
              renderMap={renderMap}
              renderCatalogue={renderCatalogue}
              langObjHandler={this.langObjHandler}
            />
          </h1>}
          <div className='top-links'>
            {showAddAnnouncement && <ManagedLink {...this.addAnnouncementManager()} />}
            {isLargePc && links}
            <ManagedLink {...this.languageManager()} />
          </div>
          {renderSideLinks &&
          <div
            className='side-links-cover'
            onClick={() => changeControl({ [RENDER_SIDE_LINKS_TRACK]: false })}
          >
            <div className='side-links'>
              <ManagedLink {...this.addAnnouncementManager()} />
              {links}
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default connect(reduxMappers.mapStateToProps, reduxMappers.mapDispatchToProps)(Header)
