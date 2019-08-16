import React from 'react'
import { connect } from 'react-redux'
import * as reduxMappers from './constants/mappers'
import { ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import './styles/styles.scss'
import { changeRoute } from '../../../../functions/routers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { labelProvider } from './functions/label-provider'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.addAnnouncementManager = managers.addAnnouncementManager.bind(this)
    this.signUpManager = managers.signUpManager.bind(this)
    this.signInManager = managers.signInManager.bind(this)
    this.myAccountManager = managers.myAccountManager.bind(this)
    this.languageManager = managers.languageManager.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    return (
      <div id='header'>
        <div className='inner'>
          <h1 onClick={() => {
            this.props.changeIndexControl({ searchInitiated: false })
            this.changeRoute(null, '/')
          }}>
            <div>
              WARSAW
            </div>
            <div className='first-letter'>
              LEASE
            </div>
            <div className={`map-marker ${this.props.searchInitiated ? 'visible' : 'hidden'}`}>
              &nbsp;<i className='fas fa-map-marker-alt' />
            </div>
            <div className='float-clear' />
          </h1>
          <div className='language'>
            <ManagedButton manager={this.languageManager} />
          </div>
          {
          this.props.screenSize == 'largePhone' &&
          <div 
          className='links-icon-container'
          onClick={() => this.props.changeControl({ showLinks: !this.props.showLinks })}>
            <div className='links-icon'>
              <div className='link-icon' />
              <div className='link-icon' />
              <div className='link-icon' />
            </div>
          </div>
          }
          <div className={`links${this.props.showLinks ? '' : ' hidden'}`}>
            {
            <ManagedButton manager={this.addAnnouncementManager} />
            }
            {
            !this.props.name &&
            <ManagedButton manager={this.signUpManager} />
            }
            {
            !this.props.name &&
            <ManagedButton manager={this.signInManager} />
            }
            {
            this.props.name &&
            <ManagedButton manager={this.myAccountManager} />
            }
            <div className='float-clear' />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(reduxMappers.mapStateToProps, reduxMappers.mapDispatchToProps)(Header);