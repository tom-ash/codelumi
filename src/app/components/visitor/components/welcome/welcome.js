import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changePath } from '../../../../functions/routers/change-path'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'

import LogoFull from '../../../../assets/logo-full.svg';

class VisitorWelcome extends React.Component {
  constructor(props) {
    super(props)
    this.changePath = changePath.bind(this)
    this.pageHeaderProvider = pageHeaderProvider.bind(this)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
  }

  render() {
    const {
      showAnnouncementIndexMap,
      showAnnouncementIndexList
    } = this.props

    if (!showAnnouncementIndexMap) return null

    return (
      <div id='visitor-welcome' className={showAnnouncementIndexList ? 'hidden' : 'visible'}>
        <div className='logo-full'>
          <LogoFull width='12em' fill="#F9E79F" />
        </div>
        <h1>
          {this.languageObjectHandler({ pl: 'Odnajdź się w Warszawie', en: 'Find Yourself in Warsaw' })}
        </h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorWelcome)