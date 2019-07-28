import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changeRoute } from '../../../../functions/routers'
import './styles/styles.scss'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.changeRoute = changeRoute.bind(this)
  }
  render() {
    return(
      <div id='footer'>
        <div className='inner'>
          <div className='links'>
            <div
            className='link'
            onClick={() => this.changeRoute(null, 'about')}>
              <span>O Serwisie</span>
            </div>
            <div
            className='link'
            onClick={() => this.changeRoute(null, 'contact')}>
              <span>Kontakt</span>
            </div>
            <div
            className='link'
            onClick={() => this.changeRoute(null, 'termsOfService')}>
              <span>Regulamin</span>              
            </div>
            <div
            className='link'
            onClick={() => this.changeRoute(null, 'cookiesPolicy')}>
              <span>Polityka Plików Cookies</span>              
            </div>
            <div
            className='link'
            onClick={() => this.changeRoute(null, 'privacyPolicy')}>
              <span>Polityka prywatności</span>              
            </div>
            <div
            className='link'
            onClick={() => this.changeRoute(null, 'privacySettings')}>
              <span>Ustawienia Prywatności</span>              
            </div>
          </div>
          <div className='copyright'>
            WarsawLease.com 2019
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)