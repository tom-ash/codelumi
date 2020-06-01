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
import { provideDescription } from './functions/provide-description'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.getAnnouncement = getAnnouncement.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
    this.provideDescription = provideDescription.bind(this)
  }

  render() {
    const { publishing, language } = this.props

    return (
      <div id='announcement-create' className='container medium-container small-shadow'>
        <div>
          <h1>
            {this.languageHandler(<span>Dodaj bezpłatne ogłoszenie wynajmu nieruchomości w&nbsp;Warszawie</span>, 'Add Free Announcement of Real Estate Lease in Warsaw')}
          </h1>
          {this.provideDescription()}
          <AnnouncementCreatePrimary />
          <div className='input-label'>
            <i className='fas fa-images' /> {this.languageObjectHandler({ pl: 'Zdjęcia', en: 'Pictures' })}
          </div>
          <AnnouncementCreatePictures />
          <div className='input-label'>
            <i className='fas fa-map-marker-alt' /> {this.languageObjectHandler({ pl: 'Lokalizacja', en: 'Location' })}
          </div>
          <AnnouncementCreateMap />
          <h2>
            <div className='number'>3</div>
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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreate)
