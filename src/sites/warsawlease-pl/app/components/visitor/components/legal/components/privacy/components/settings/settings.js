import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../../../functions/lang-handler'
import { ManagedRadio } from 'managed-inputs'
import { statisticsConsentManager, marketingConsentManager } from './functions/managers'
import { textsProvider } from './functions/texts-provider'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'
import AppContext from '../../../../../../../../constants/context.js'

class VisitorPrivacySettings extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.statisticsConsentManager = statisticsConsentManager.bind(this)
    this.marketingConsentManager = marketingConsentManager.bind(this)
    this.textsProvider = textsProvider.bind(this)
  }

  static contextType = AppContext

  render() {
    return (
      <React.Fragment>
        <div
          id='visitor-privacy-settings'
          className='container__legal'
          onClick={e => e.stopPropagation()}
        >
          <h1 className='page-header'>
            {this.langHandler({ pl: 'Ustawienia prywatności', en: 'Privacy Settings' })}
          </h1>
          <div className='text'>
            {this.langHandler(this.textsProvider('statistics'))}
          </div>
          <div className='consent'>
            <ManagedRadio {...this.statisticsConsentManager()} />
          </div>
          <div className='text'>
            {this.langHandler(this.textsProvider('marketing'))}
          </div>
          <div className='consent'>
            <ManagedRadio {...this.marketingConsentManager()} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(VisitorPrivacySettings))
