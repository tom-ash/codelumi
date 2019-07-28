import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { ManagedMultipleCheckbox } from 'managed-inputs'
import { featuresManager } from './functions/managers'
import './styles/styles.scss'

class AnnouncementCreateFeatures extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.featuresManager = featuresManager.bind(this)
  }
  render() {
    return (
      <div id='announcement-create-features' className='section'>
        <div className='box'>
          <ManagedMultipleCheckbox manager={this.featuresManager} />
        </div>
        <div className='scroll'>
          <i className="fas fa-sort"></i>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFeatures)