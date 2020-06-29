import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { ManagedRadio } from 'managed-inputs'
import { statisticsConsentManager, marketingConsentManager } from './functions/managers'
import { pageHeaderProvider } from '../../../../../../../../functions/header-providers'
import { textsProvider } from './functions/texts-provider'
import { CloseButton } from '../../../../../../../../components/support/components/close-button/close-button'

class VisitorPrivacySettings extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.statisticsConsentManager = statisticsConsentManager.bind(this)
    this.marketingConsentManager = marketingConsentManager.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.textsProvider = textsProvider.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        <div
          id='visitor-privacy-settings'
          className='container__legal'
          onClick={e => e.stopPropagation()}
        >
          <h1>
            {this.languageObjectHandler({ pl: 'Ustawienia prywatności', en: 'Privacy Settings' })}
          </h1>
          <div className='text'>
            {this.languageObjectHandler(this.textsProvider('statistics'))}
          </div>
          <div className='consent'>
            <ManagedRadio {...this.statisticsConsentManager()} />
          </div>
          <div className='text'>
            {this.languageObjectHandler(this.textsProvider('marketing'))}
          </div>
          <div className='consent'>
            <ManagedRadio {...this.marketingConsentManager()} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorPrivacySettings)
