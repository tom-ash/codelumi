import React from 'react'
import { connect } from 'react-redux'
import { ManagedCheckbox, ManagedMultipleCheckbox } from 'managed-inputs'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { addFurnishingsManager, furnishingsManager } from './functions/managers'

class AnnouncementCreateFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.addFurnishingsManager = addFurnishingsManager.bind(this)
    this.furnishingsManager = furnishingsManager.bind(this)
  }

  render() {
    const { category, addFurnishings } = this.props

    if ([0, 1, 2].indexOf(category) === -1) return null

    return (
      <div id='listing-create-furnishings'>
        <ManagedCheckbox {...this.addFurnishingsManager()} />
        {addFurnishings && (
          <>
            <div className='hint'>
              {
                {
                  pl: 'Elementy wybrane z listy dodawane są automatycznie w językach polskim oraz angielskim.',
                  en: 'Elements selected from the list are automatically added in Polish and English languages.',
                }['pl']
              }
            </div>
            <div className='box-with-scroll'>
              <div className='box'>
                <ManagedMultipleCheckbox {...this.furnishingsManager()} />
              </div>
              <div className='float-clear' />
            </div>
          </>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFurnishings)
