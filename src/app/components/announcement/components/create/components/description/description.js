import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedTextarea } from 'managed-inputs'
import { polishManager, englishManager } from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'

class AnnouncementCreateDescription extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.polishManager = polishManager.bind(this)
    this.englishManager = englishManager.bind(this)
  }
  render() {
    return (
      <div id='announcement-create-description' className='section'>
        <div className='hint'>
          <i className='fas fa-info-circle' />
          {this.languageObjectHandler({
            pl: <span>Dodanie opisu nie jest wymagane. Ponadto, opis możesz dodać w obu językach lub tylko w&nbsp;jednym.</span>,
            en: 'Adding description is not required. Furthermore, you can add description in both languages or in one only.'
          })}
        </div>
        <ManagedTextarea {...this.polishManager()} />
        <ManagedTextarea {...this.englishManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateDescription)