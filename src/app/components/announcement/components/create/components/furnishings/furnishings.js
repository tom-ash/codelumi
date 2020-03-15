import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { ManagedCheckbox, ManagedMultipleCheckbox } from 'managed-inputs'
import { addFurnishingsManager, furnishingsManager } from './functions/managers'

import { pickElementsForCategory } from '../../functions/pick-elements'

class AnnouncementCreateFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.addFurnishingsManager = addFurnishingsManager.bind(this)
    this.furnishingsManager = furnishingsManager.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.pickElementsForCategory = pickElementsForCategory.bind(this)
  }

  render() {
    const {
      addFurnishings
    } = this.props

    return (
      <div id='announcement-create-furnishings'>
        <ManagedCheckbox {...this.addFurnishingsManager()} />
        {addFurnishings &&
        <>
          <div className='hint'>
            <i className='fas fa-info-circle' />
            {this.languageObjectHandler({
              pl: 'Elementy wybrane z listy dodawane są automatycznie w językach polskim oraz angielskim.',
              en: 'Elements selected from the list are automatically added in Polish and English languages.'
            })}
          </div>
          <div className='box-with-scroll'>
            <div className='box'>
              <ManagedMultipleCheckbox {...this.furnishingsManager()} />
            </div>
            <div className='scroll'>
              <i className='fas fa-sort'></i>
            </div>
            <div className='float-clear' />
          </div>
        </>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFurnishings)