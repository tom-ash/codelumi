import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { changePath } from '../../../../functions/routers/change-path'
import { pageHeaderProvider } from '../../../../functions/providers/headers'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'

import Logo from '../../../../assets/logo-welcome.svg'

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
        <div className='container medium-container small-shadow'>
          <div className='logo'>
            <Logo fill='red' width="48px" height="48px"/>
          </div>
          <h1>
            {this.languageObjectHandler({ pl: 'Odnajdź się w Warszawie', en: 'Find Yourself in Warsaw' })}
          </h1>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisitorWelcome)