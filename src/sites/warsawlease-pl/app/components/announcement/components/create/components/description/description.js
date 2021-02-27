import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedCheckbox, ManagedTextarea } from 'managed-inputs'
import {
  addPolishDescriptionManager,
  addEnglishDescriptionManager,
  polishManager,
  englishManager
} from './functions/managers'
import { langObjHandler } from '../../../../../../functions/lang-handler'

class AnnouncementCreateDescription extends React.Component {
  constructor(props) {
    super(props)
    this.langObjHandler = langObjHandler.bind(this)
    this.addPolishDescriptionManager = addPolishDescriptionManager.bind(this)
    this.polishManager = polishManager.bind(this)
    this.addEnglishDescriptionManager = addEnglishDescriptionManager.bind(this)
    this.englishManager = englishManager.bind(this)
  }
  render() {
    const {
      addPolishDescription,
      addEnglishDescription
    } = this.props

    return (
      <div id='announcement-create-description' className='section'>
        <ManagedCheckbox {...this.addPolishDescriptionManager()} />
        {addPolishDescription && <ManagedTextarea {...this.polishManager()} />}
        <ManagedCheckbox {...this.addEnglishDescriptionManager()} />
        {addEnglishDescription && <ManagedTextarea {...this.englishManager()} />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateDescription)