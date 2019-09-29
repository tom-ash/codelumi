import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedTextarea } from 'managed-inputs'
import { polishManager, englishManager } from './functions/managers'
import { languageHandler } from '../../../../../../functions/language-handler'
import './styles/styles.scss'

class AnnouncementCreateDescription extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.polishManager = polishManager.bind(this)
    this.englishManager = englishManager.bind(this)
  }
  render() {
    return (
      <div id='announcement-create-description' className='section'>
        <ManagedTextarea {...this.polishManager()} />
        <ManagedTextarea {...this.englishManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateDescription)