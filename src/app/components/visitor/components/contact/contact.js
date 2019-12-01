import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import './styles/styles.scss'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }
  
  render() {
    return(
      <div id='visitor-contact' className='shadowed'>
        {this.pageHeaderProvider('far fa-envelope', { polish: 'Kontakt', english: 'Contact' })}
        <div className='company'>
          Warsaw Digital Sp. z o.o.
        </div>
        <div className='address'>
          {this.languageHandler('ul. Twarda 18', 'Twarda 18 St.')}
        </div>
        <div className='address'>
          {this.languageHandler('00-105 Warszawa', '00-105 Warsaw')}
        </div>
        <div className='email'>
          Email: <i>{this.languageHandler('kontakt@warsaw.digital', 'contact@warsaw.digital')}</i>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)