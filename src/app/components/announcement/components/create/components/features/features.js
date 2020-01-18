import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { ManagedMultipleCheckbox } from 'managed-inputs'
import { featuresManager } from './functions/managers'

import { pickElementsForCategory } from '../../functions/pick-elements'

class AnnouncementCreateFeatures extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.featuresManager = featuresManager.bind(this)
    this.pickElementsForCategory = pickElementsForCategory.bind(this)
  }
  render() {
    return (
      <React.Fragment>
        <div className='hint'>
          <i className='fas fa-info-circle' />
          {this.languageObjectHandler({
            pl: 'Elementy wybrane z listy dodawane są automatycznie w języku polskim oraz angielskim.',
            en: 'Elements selected from the list are automatically added in Polish and English languages.'
          })}
        </div>
        <div id='announcement-create-features' className='section'>
          <div className='box'>
            <ManagedMultipleCheckbox {...this.featuresManager()} />
          </div>
          <div className='scroll'>
            <i className="fas fa-sort"></i>
          </div>
          <div className='float-clear' />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFeatures)