import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorContact extends React.Component {
  constructor(props) {
    super(props)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }
  
  render() {
    return(
      <React.Fragment>
        <div
          id='visitor-contact'
          className='container'
          onClick={e => e.stopPropagation()}
        >
          <h1>
            {this.languageObjectHandler({ pl: 'Kontakt', en: 'Contact' })}
          </h1>
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
            <i>
              {this.languageHandler('kontakt@warsaw.digital', 'contact@warsaw.digital')}
            </i>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorContact))
