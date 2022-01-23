import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedSelect, ManagedText } from 'managed-inputs'
import * as managers from './functions/managers'
import langHandler from '../../../../../../functions/lang-handler'
import { handleErrorOnSelect, handleErrorOnValidate } from './functions/errors-handler'
import { onSelectHandler } from './functions/on-select-handler'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.areaManager = managers.areaManager.bind(this)
    this.handleErrorOnSelect = handleErrorOnSelect.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
  }
  
  render() {
    return (
      <div id='announcement-create-primary' className='section'>
        <ManagedSelect {...this.categoryManager()}/>
        <ManagedText {...this.areaManager()}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary);