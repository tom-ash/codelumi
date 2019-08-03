import React from 'react'
import { connect } from 'react-redux'
import * as reduxMappers from './constants/mappers'
import { ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import './styles/styles.scss'
import { changeRoute } from '../../../../functions/routers'
import { languageHandler } from '../../../../functions/language-handler'

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
  }

  render() {
    return (
      <div id='header'>
        <div className='inner'>
          <h1 onClick={() => this.changeRoute(null, '/')}>
            <div>
              WARSAW
            </div>
            <div className='first-letter'>
              LEASE
            </div>
            <div className='float-clear' />
          </h1>
          <div className='language'>
            <ManagedButton manager={this.languageManager} />
          </div>
          {
          this.props.screenSize != 'largePhone' &&
          this.props.screenSize != 'smallTablet' &&
          !this.props.name &&
          <div className='sign-in'>
            <ManagedButton manager={this.signInManager} />
          </div>
          }
          {
          this.props.screenSize != 'largePhone' &&
          this.props.screenSize != 'smallTablet' &&
          !this.props.name &&
          <div className='sign-up'>
            <ManagedButton manager={this.signUpManager} />
          </div>
          }
          {
          this.props.screenSize != 'largePhone' &&
          this.props.screenSize != 'smallTablet' &&
          this.props.name &&
          <div className='my-account'>
            <ManagedButton manager={this.myAccountManager} />
          </div>
          }
          {
          this.props.screenSize != 'largePhone' &&
          <div className='add-announcement'>
            <ManagedButton manager={this.addAnnouncementManager} />
          </div>
          }
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(reduxMappers.mapStateToProps, reduxMappers.mapDispatchToProps)(Header);