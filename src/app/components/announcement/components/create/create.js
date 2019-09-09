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
import { changeRoute } from '../../../../functions/routers'
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
    this.changeRoute = changeRoute.bind(this)
    this.redirectToUserCreate = redirectToUserCreate.bind(this)
    this.getAnnouncement = getAnnouncement.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
  }

  render() {
    return (
      <div id='announcement-create'>
        {/* {console.log(this.props)} */}
        {
        !this.props.publishing &&
        <div>
          <h2 className='page-header'>
            <i className='fas fa-plus' /> {this.languageHandler('Dodawanie ogłoszenia', 'Announcement Adding')}
          </h2>
          {this.monitBuilder()}
          {this.sectionHeaderProvider('fas fa-info-circle', { polish: 'Dane podstawowe', english: 'Primary Data'})}
          <AnnouncementCreatePrimary />
          {this.sectionHeaderProvider('fas fa-images', { polish: 'Zdjęcia', english: 'Pictures'})}
          <AnnouncementCreatePictures />
          {this.sectionHeaderProvider('fas fa-list', { polish: 'Zalety', english: 'Features'})}
          <AnnouncementCreateFeatures />
          {this.sectionHeaderProvider('fas fa-list', { polish: 'Wyposażenie', english: 'Furnishings'})}
          <AnnouncementCreateFurnishings />
          {this.sectionHeaderProvider('fas fa-align-left', { polish: 'Opis', english: 'Description'})}
          <AnnouncementCreateDescription />
          {this.sectionHeaderProvider('fas fa-map-marker-alt', { polish: 'Mapa', english: 'Map'})}
          <AnnouncementCreateMap />
        </div>
        }
        {
        !this.props.publishing &&
        <div>
          {this.sectionHeaderProvider('fas fa-play', { polish: 'Publikowanie', english: 'Publishing' })}
        </div>
        }
        <AnnouncementCreatePublishing />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreate)
