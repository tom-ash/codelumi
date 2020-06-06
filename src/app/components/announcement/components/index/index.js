import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
import AnnouncementIndexFull from './components/full/full'
import AnnouncementIndexMap from './components/map/map'
import AnnouncementIndexList from './components/list/list'
import { buildRequestParameters } from './functions/build-parameters'
import { fetchAnnouncements } from './functions/fetch-announcements'
import { paramsReader } from './functions/params-reader'
import * as lifecycle from './functions/lifecycle'
import { paramsBuilder } from './functions/params-builder'
import { languageHandler, languageObjectHandler } from '../../../../functions/language-handler'
import { parseCurrency } from '../../functions/currency-parsers'
import { parseCategoryForUrl } from '../../functions/category-parsers'
import { parseDistrictForUrl } from '../../functions/district-parsers'

import { ManagedLink } from 'managed-inputs'
import { addAnnouncementManager } from '../../../../components/scaffold/components/header/functions/managers'

import { labelProvider } from '../../../../components/user/components/show/functions/label-provider'
import { changePath } from '../../../../functions/routers/change-path'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.componentDidMount = lifecycle.componentDidMount
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.paramsReader = paramsReader.bind(this)
    this.fetchAnnouncements = fetchAnnouncements.bind(this)
    this.buildRequestParameters = buildRequestParameters.bind(this)
    this.paramsBuilder = paramsBuilder.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
    this.addAnnouncementManager = addAnnouncementManager.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changePath = changePath.bind(this)
  }

  render() {
    const {
      showVisitor,
      showUser,
      changeInputs,
      changeControl,
      offset,
      amount,
      device
    } = this.props

    const showAddAnnouncement = [null, 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

    const mainHeader = {
      pl: 'Odnajdź się w Warszawie! Wynajem nieruchomości - Warszawa - ogłoszenia. Mieszkania, lokale użytkowe i biura.',
      en: 'Find Yourself in Warsaw! Real Estate Lease - Warsaw - Announcements. Apartments, Usable Premises and Offices.'
    }

    return (
      <div id='announcement-index'>
        <h1 id='header-panel'>
          {this.languageObjectHandler(mainHeader)}
        </h1>
        {showAddAnnouncement && <ManagedLink {...this.addAnnouncementManager()} />}
        <AnnouncementIndexPanel />
        {showVisitor &&
        <React.Fragment>
          <AnnouncementIndexFull />
          <AnnouncementIndexMap />
        </React.Fragment>}
        {showUser && <AnnouncementIndexList />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexSearch)