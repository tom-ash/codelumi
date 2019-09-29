import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { ManagedButton } from 'managed-inputs'
import { changeRoute } from '../../../../../../../../functions/routers'
import { agreeManager, settingsManager } from './functions/manager'
import { languageManager } from '../../../../../../../scaffold/components/header/functions/managers'
import './styles/styles.scss'
import { textsProvider } from './functions/texts-provider'

class VisitorPrivacyMonit extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.changeRoute = changeRoute.bind(this)
    this.agreeManager = agreeManager.bind(this)
    this.settingsManager =  settingsManager.bind(this)
    this.languageManager = languageManager.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.textsProvider = textsProvider.bind(this)
  }

  render() {
    return (
      <div id='visitor-privacy-monit'>
        <div className='text-buttons'>
          <div className='text-container'>
            <div className='text-line'>
              <div className='icon'>
                <i className='fas fa-cookie'/>
              </div>
              <div className='text'>
                {this.languageObjectHandler(this.textsProvider('cookies'))}
              </div>
            </div>
            <div className='text-line'>
              <div className='icon'>
                <i className='fas fa-user-shield'/> 
              </div>
              <div className='text'>
                {this.languageObjectHandler(this.textsProvider('dataProcessing'))}
              </div>
            </div>
          </div>
          <div className='buttons'>
            <ManagedButton {...this.agreeManager()} />
            <ManagedButton {...this.settingsManager()} />
            <div className='float-clear' />
          </div>
          <div className='float-clear' />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorPrivacyMonit)
