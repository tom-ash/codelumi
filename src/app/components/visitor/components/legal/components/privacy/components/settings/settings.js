import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { ManagedRadio } from 'managed-inputs'
import { additionalFunctionsConsentManager, statisticsAndMarketingConsentManager } from './functions/managers'
import { pageHeaderProvider } from '../../../../../../../../functions/header-providers'
import { textsProvider } from './functions/texts-provider'
import { CloseButton } from '../../../../../../../../components/support/components/close-button/close-button'
import './styles/styles.scss'

class VisitorPrivacySettings extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.additionalFunctionsConsentManager = additionalFunctionsConsentManager.bind(this)
    this.statisticsAndMarketingConsentManager = statisticsAndMarketingConsentManager.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.textsProvider = textsProvider.bind(this)
  }

  render() {
    return (
      <React.Fragment>
        <CloseButton classNames='page narrow'/>
        <div
          id='visitor-privacy-settings'
          className='container narrow-container shadowed'
          onClick={e => e.stopPropagation()}
        >
          {this.pageHeaderProvider('fas fa-user-shield',
                                  { pl: 'Ustawienia prywatności', en: 'Privacy Settings' } )}
          <div className='text'>
            {this.languageObjectHandler(this.textsProvider('statistics'))}
          </div>
          <div className='consent'>
            <ManagedRadio {...this.additionalFunctionsConsentManager()} />
          </div>
          <div className='text'>
            {this.languageObjectHandler(this.textsProvider('marketing'))}
          </div>
          <div className='consent'>
            <ManagedRadio {...this.statisticsAndMarketingConsentManager()} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorPrivacySettings)
