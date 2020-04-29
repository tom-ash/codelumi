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
    const { publishing } = this.props

    const pl = (
      <React.Fragment>
        <p className='blog-paragraph'>
          Dodaj darmowe ogłoszenie wynajmu mieszkania, lokalu użytkowego lub biura w&nbsp;Warszawie.
        </p>
        <p className='blog-paragraph'>
          Twoje ogłoszenie prezentowane będzie na mapie oraz na liście.
        </p>
      </React.Fragment>
    )
    
    const en = (
      <React.Fragment>
        <p className='blog-paragraph'>
          Add a free announcement of lease of an apartment, usable premises or an office in Warsaw.
        </p>
        <p className='blog-paragraph'>
          Your announcement shall be presented on the map and on the list.
        </p>
      </React.Fragment>
    )

    return (
      <div id='announcement-create' className='container medium-container small-shadow'>
        <div>
          <h1>
            <i className='fas fa-plus' /> {this.languageHandler('Dodaj bezpłatne ogłoszenie', 'Add Free Announcement')}
          </h1>
          <div className='text'>
            {this.languageObjectHandler({ pl, en })}
          </div>
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
