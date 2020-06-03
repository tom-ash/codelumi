import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementCreatePrimary from './components/primary/primary'
import AnnouncementCreatePictures from './components/pictures/pictures'
import AnnouncementCreateFeatures from './components/features/features'
import AnnouncementCreateFurnishings from './components/furnishings/furnishings'
import AnnouncementCreateDescription from './components/description/description'
import AnnouncementCreateMap from './components/map/map'
import AnnouncementCreatePublishing from './components/publishing/publishing'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { getAnnouncement } from './functions/get-announcement'
import { sectionHeaderProvider } from '../../../../functions/providers/headers'
import * as lifecycle from './functions/lifecycle'
import AnnouncementCreateAdditional from './components/additional/additional'
import { AnnouncementCreateSteps } from './components/steps/steps'
import { AnnouncementCreateEditorial } from './components/editorial/editorial'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.getAnnouncement = getAnnouncement.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
  }

  render() {
    const {
      showDescription,
      changeControl
    } = this.props

    return (
      <React.Fragment>
        <div id='announcement-create'>
            <AnnouncementCreateEditorial
              languageObjectHandler={this.languageObjectHandler}
              showDescription={showDescription}
              changeControl={changeControl}
            />
            <AnnouncementCreateSteps />
          <div className='inner'>
            <h1>
              {this.languageHandler(<span>Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w&nbsp;Warszawie</span>, 'Add Free Announcement of Real Estate Lease in Warsaw')}
            </h1>
            <AnnouncementCreatePrimary />
            <div className='input-label'>
              {this.languageObjectHandler({ pl: 'Zdjęcia', en: 'Pictures' })}
            </div>
            <AnnouncementCreatePictures />
            <div className='input-label'>
              {this.languageObjectHandler({ pl: 'Lokalizacja', en: 'Location' })}
            </div>
            <AnnouncementCreateMap />
            <h2>
              <div className='text'>{this.languageObjectHandler({ pl: 'Dane opcjonalne', en: 'Optional data' })}</div>
              <div className='float-clear' />
            </h2>
            <AnnouncementCreateAdditional />
            <AnnouncementCreateFeatures />
            <AnnouncementCreateFurnishings />
            <AnnouncementCreateDescription />
          </div>
          <AnnouncementCreatePublishing />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreate)
