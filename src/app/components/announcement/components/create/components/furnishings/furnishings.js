import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { ManagedMultipleCheckbox } from 'managed-inputs'
import { furnishingsManager } from './functions/managers'
import '../features/styles/styles.scss'

class AnnouncementCreateFurnishings extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.furnishingsManager = furnishingsManager.bind(this)
  }

  render() {
    return (
      <div id='announcement-create-furnishings' className='section'>
        <div className='box'>
          <ManagedMultipleCheckbox {...this.furnishingsManager()} />
        </div>
        <div className='scroll'>
          <i className='fas fa-sort'></i>
        </div>
        <div className='float-clear' />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateFurnishings)