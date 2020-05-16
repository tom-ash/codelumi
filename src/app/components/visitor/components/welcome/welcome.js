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
        <div className='container'>
          <div className='logo'>
            <Logo fill='red' width="42px" height="42px"/>
          </div>
          <h1>
            {this.languageObjectHandler({ pl: 'Odnajdź się w Warszawie', en: 'Find Yourself in Warsaw' })}
          </h1>
          <div className='text'>
            {this.languageObjectHandler({ pl, en })}
          </div>
        </div>
      </div>
    )
  }
}

const pl = (
  <React.Fragment>
    <p className='blog-paragraph'>
      Na <span className='title'>warsawlease.pl</span> możesz dodawać i przeglądać darmowe ogłoszenia wynajmu mieszkań, lokali użytkowych i biur w&nbsp;Warszawie.
    </p>
  </React.Fragment>
)

const en = (
  <React.Fragment>
    <p className='blog-paragraph'>
      On <span className='title'>warsawlease.pl</span> you can add and peruse free announcements of lease of apartments, usable premises and offices in Warsaw.
    </p>
    <p className='blog-paragraph last'>
      The announcements are presented in an ergonomic manner on the map and on the list.
    </p>
  </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(VisitorWelcome)