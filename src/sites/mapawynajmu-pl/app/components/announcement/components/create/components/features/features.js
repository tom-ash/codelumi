import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import langHandler from '../../../../../../functions/lang-handler'
import { ManagedCheckbox, ManagedMultipleCheckbox } from 'managed-inputs'
import { addFeaturesManager, featuresManager } from './functions/managers'
import { pickElementsForCategory } from '../../functions/pick-elements'

class AnnouncementCreateFeatures extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.addFeaturesManager = addFeaturesManager.bind(this)
    this.featuresManager = featuresManager.bind(this)
    this.pickElementsForCategory = pickElementsForCategory.bind(this)
  }
  render() {
    const { addFeatures } = this.props

    return (
      <div id='listing-create-features'>
        <ManagedCheckbox {...this.addFeaturesManager()} />
        {addFeatures && (
          <>
            <div className='hint'>
              {this.langHandler({
                pl: 'Elementy wybrane z listy dodawane są automatycznie w języku polskim oraz angielskim.',
                en: 'Elements selected from the list are automatically added in Polish and English languages.',
              })}
            </div>
            <div className='box-with-scroll'>
              <div className='box'>
                <ManagedMultipleCheckbox {...this.featuresManager()} />
              </div>
              <div className='float-clear' />
            </div>
          </>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFeatures)
