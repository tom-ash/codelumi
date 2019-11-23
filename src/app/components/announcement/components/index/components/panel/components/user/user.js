import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import * as managers from './functions/managers'
import { ManagedSelect, ManagedMultipleCheckbox } from 'managed-inputs'
import './styles/styles.scss'

class AnnouncementIndexPanelUser extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.switchesManager = managers.switchesManager.bind(this)
    this.sortManager = managers.sortManager.bind(this)
  }

  render() {
    return (
      <div id='announcement-index-panel-user'>
        <div className='switches'>
          <div className='switches-label'>
            {this.languageHandler('Pokaż', 'Show')}
          </div>
          <ManagedMultipleCheckbox {...this.switchesManager()} />
        </div>
        <ManagedSelect {...this.sortManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexPanelUser)