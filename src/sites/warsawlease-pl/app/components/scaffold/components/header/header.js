import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import * as reduxMappers from './constants/mappers'
import { ManagedLink } from 'managed-inputs'
import * as managers from './functions/managers'
import langHandler from '../../../../functions/lang-handler'
import { HeaderProvider } from '../../../announcement/components/index/functions/header-provider'
import { linksProvider } from './functions/links-provider'
import { SHOW_MENU } from './constants/tracks'
import AppContext from '../../../../constants/context.js'
const MenuButton = loadable(() => import('./components/menu-button/menu-button.js'))

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.titleManager = managers.titleManager.bind(this)
    this.signUpManager = managers.signUpManager.bind(this)
    this.signInManager = managers.signInManager.bind(this)
    this.myAccountManager = managers.myAccountManager.bind(this)
    this.langManager = managers.langManager.bind(this)
    this.langHandler = langHandler.bind(this)
    this.linksProvider = linksProvider.bind(this)
  }

  static contextType = AppContext

  render() {
    const { authorized, device, renderMap, renderCatalogue, renderMenu, changeRender, changeControl } = this.props
    const links = this.linksProvider({ authorized, smallMobile })
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
            <ManagedLink {...this.langManager()} />
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
