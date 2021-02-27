import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import langObjHandler from '../../../../functions/lang-handler'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class VisitorContact extends React.Component {
  constructor(props) {
    super(props)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
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
            {this.langObjHandler({ pl: 'Kontakt', en: 'Contact' })}
          </h1>
          <div className='company'>
            Warsaw Digital Sp. z o.o.
          </div>
          <div className='address'>
            {this.langObjHandler({ pl: 'ul. Twarda 18', en: 'Twarda 18 St.' })}
          </div>
          <div className='address'>
            {this.langObjHandler({ pl: '00-105 Warszawa', en: '00-105 Warsaw' })}
          </div>
          <div className='email'>
            <i>
              {this.langObjHandler({ pl: 'kontakt@warsaw.digital', en: 'contact@warsaw.digital' })}
            </i>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorContact))
