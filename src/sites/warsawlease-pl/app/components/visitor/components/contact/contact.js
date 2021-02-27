import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import langHandler from '../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorContact extends React.Component {
  constructor(props) {
    super(props)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.langHandler = langHandler.bind(this)
  }
  
  render() {
    return(
      <React.Fragment>
        <div
          id='visitor-contact'
          className='container'
          onClick={e => e.stopPropagation()}
        >
          <h1 className='page-header'>
            {this.langHandler({ pl: 'Kontakt', en: 'Contact' })}
          </h1>
          <div className='company'>
            Warsaw Digital Sp. z o.o.
          </div>
          <div className='address'>
            {this.langHandler({ pl: 'ul. Twarda 18', en: 'Twarda 18 St.' })}
          </div>
          <div className='address'>
            {this.langHandler({ pl: '00-105 Warszawa', en: '00-105 Warsaw' })}
          </div>
          <div className='email'>
            <i>
              {this.langHandler({ pl: 'kontakt@warsaw.digital', en: 'contact@warsaw.digital' })}
            </i>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorContact))
