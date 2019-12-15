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
import { monitBuilder } from '../create/functions/monit-builder'
import { redirectToUserCreate } from '../create/functions/redirect-to-user-create'
import { getAnnouncement } from './functions/get-announcement'
import { sectionHeaderProvider } from '../../../../functions/providers/headers'
import * as lifecycle from './functions/lifecycle'
import './styles/styles.scss'

class AnnouncementCreate extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.monitBuilder = monitBuilder.bind(this)
    this.redirectToUserCreate = redirectToUserCreate.bind(this)
    this.getAnnouncement = getAnnouncement.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
  }

  render() {
    const { publishing } = this.props

    return (
      <div id='announcement-create' className='container medium-container shadowed'>
        <div>
          <h2 className='page-header'>
            <i className='fas fa-plus' /> {this.languageHandler('Dodawanie ogłoszenia', 'Announcement Adding')}
          </h2>
          {this.sectionHeaderProvider('fas fa-info-circle', { pl: 'Dane podstawowe', en: 'Primary Data'})}
          <AnnouncementCreatePrimary />
          {this.sectionHeaderProvider('fas fa-images', { pl: 'Zdjęcia', en: 'Pictures'})}
          <AnnouncementCreatePictures />
          {this.sectionHeaderProvider('fas fa-list', { pl: 'Zalety', en: 'Features'})}
          <AnnouncementCreateFeatures />
          {this.sectionHeaderProvider('fas fa-list', { pl: 'Wyposażenie', en: 'Furnishings'})}
          <AnnouncementCreateFurnishings />
          {this.sectionHeaderProvider('fas fa-align-left', { pl: 'Opis', en: 'Description'})}
          <AnnouncementCreateDescription />
          {this.sectionHeaderProvider('fas fa-map-marker-alt', { pl: 'Mapa', en: 'Map'})}
          <AnnouncementCreateMap />
        </div>
        <AnnouncementCreatePublishing />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreate)
