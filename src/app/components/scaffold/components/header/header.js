import React from 'react'
import { connect } from 'react-redux'
import * as reduxMappers from './constants/mappers'
import { ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { changeRoute } from '../../../../functions/routers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { labelProvider } from '../../../user/components/show/functions/label-provider'
import './styles/styles.scss'

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
    const { changeControl, device, resetAnnouncementIndexControl, resetAnnouncementIndexInputs, resetAnnouncementIndexData,
            changeAnnouncementIndexControl, authorized } = this.props
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
          <h1
            onClick={() => {
              resetAnnouncementIndexControl()
              resetAnnouncementIndexInputs()
              changeAnnouncementIndexControl({ fetch: true })
              this.changeRoute({ showAnnouncementIndexVisitor: true })
            }}
            { ...!isLargePc && { className: 'shifted' } }
          >
            <span className='city'>
              WARSAW
            </span>
            <span className='lease'>
              LEASE
            </span>
          </h1>
          <div className='top-links'>
            {isLargePc && <ManagedButton {...this.addAnnouncementManager()} />}
            {isLargePc && <ManagedButton {...this.signUpManager()} />}
            {isLargePc && <ManagedButton {...this.signInManager()} />}
            {isLargePc && <ManagedButton {...this.myAccountManager()} />}
            <ManagedButton {...this.languageManager()} />
          </div>
          {this.props.showLinks &&
          <div className='side-links-cover' onClick={() => changeControl({ showLinks: false })}>
            <div className='side-links'>
              <ManagedButton {...this.addAnnouncementManager()} />
              <ManagedButton {...this.signUpManager()} />
              <ManagedButton {...this.signInManager()} />
            </div>
          </div>}
        </div>
      </div>
    )
  }
}

export default connect(reduxMappers.mapStateToProps, reduxMappers.mapDispatchToProps)(Header)
