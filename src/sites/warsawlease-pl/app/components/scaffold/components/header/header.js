import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import * as reduxMappers from './constants/mappers'
import { ManagedLink } from 'managed-inputs'
import { addAnnouncementManager, titleManager, signUpManager, signInManager, myAccountManager, langManager } from './functions/managers'
import langHandler from '../../../../functions/lang-handler'
import { HeaderProvider } from '../../../announcement/components/index/functions/header-provider'
import { linksProvider } from './functions/links-provider'
import { SHOW_MENU } from './constants/tracks'
import AppContext from '../../../../constants/context.js'
const MenuButton = loadable(() => import('./components/menu-button/menu-button.js'))

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.titleManager = titleManager.bind(this)
    // this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    // this.signUpManager = signUpManager.bind(this)
    // this.signInManager = signInManager.bind(this)
    // this.myAccountManager = myAccountManager.bind(this)
    this.langHandler = langHandler.bind(this)
    this.linksProvider = linksProvider.bind(this)
  }

  static contextType = AppContext

  render() {
    const { authorized, device, renderMap, renderCatalogue, renderMenu, changeRender, changeControl } = this.props
    const links = this.linksProvider({ ...this.props, addAnnouncementManager, signUpManager, signInManager, myAccountManager })
    const smallMobile = ['smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

    return (
      <div id='header'>
        <div className='inner'>
          <ManagedLink {...this.titleManager()} />
          {(renderMap || renderCatalogue) &&
          <h1 className='page-header'>
            <HeaderProvider renderMap={renderMap} renderCatalogue={renderCatalogue} langHandler={this.langHandler} />
          </h1>}
          {smallMobile && <MenuButton authorized={authorized} smallMobile={smallMobile} changeRender={changeRender} changeControl={changeControl} />}
          <div className='links'>
            {!smallMobile && links}
            <ManagedLink {...langManager(this.props)} />
          </div>
          <div className='float-clear' />
        </div>
        {renderMenu &&
        <div className='menu-cover' onClick={() => changeControl({ [SHOW_MENU]: false })}>
          <div className='menu'>
          {links}
          </div>
        </div>}
      </div>
    )
  }
}

export default connect(reduxMappers.mapStateToProps, reduxMappers.mapDispatchToProps)(Header)
