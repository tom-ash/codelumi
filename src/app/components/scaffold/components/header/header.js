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
    const { screenSize, resetAnnouncementIndexControl, resetAnnouncementIndexInputs, resetAnnouncementIndexData,
            changeAnnouncementIndexControl } = this.props
    const isLargePc = screenSize === 'largePc'

    return (
      <div id='header'>
        <div className='inner'>
          <div
            className='links-icon-container'
            onClick={() => this.props.changeControl({ showLinks: !this.props.showLinks })}
          >
            <div className='links-icon'>
              <div className='link-icon' />
              <div className='link-icon' />
              <div className='link-icon' />
            </div>
          </div>
          <h1 onClick={() => {
            resetAnnouncementIndexControl()
            resetAnnouncementIndexInputs()
            resetAnnouncementIndexData()
            changeAnnouncementIndexControl({ fetch: true })
            this.changeRoute({ showAnnouncementIndexVisitor: true })
          }}>
            <span className='city'>
              WARSAW
            </span>
            <span className='lease'>
              LEASE
            </span>
          </h1>
          <div className='links'>
            {isLargePc && <ManagedButton {...this.addAnnouncementManager()} />}
            {isLargePc && <ManagedButton {...this.signUpManager()} />}
            {isLargePc && <ManagedButton {...this.signInManager()} />}
            {isLargePc && <ManagedButton {...this.myAccountManager()} />}
            <ManagedButton {...this.languageManager()} />
            {this.props.showLinks &&
              <div
                className='side-links-cover'
                onClick={() => this.props.changeControl({ showLinks: false })}
              >
                <div className='side-links'>
                  <ManagedButton {...this.addAnnouncementManager()} />
                  <ManagedButton {...this.signUpManager()} />
                  <ManagedButton {...this.signInManager()} />
                  <ManagedButton {...this.myAccountManager()} />
                </div>
              </div>
              }
          </div>
        </div>
      </div>
    )
  }
}

export default connect(reduxMappers.mapStateToProps, reduxMappers.mapDispatchToProps)(Header);