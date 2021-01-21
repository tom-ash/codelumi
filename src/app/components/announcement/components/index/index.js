import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
import AnnouncementIndexCatalogue from './components/catalogue/catalogue'
import AnnouncementIndexMap from './components/map/map'
const AnnouncementIndexMy = loadable(() => import('./components/my/my'))
import { buildRequestParameters } from './functions/build-parameters'
import { fetchAnnouncements } from './functions/fetch-announcements'
import { paramsReader } from './functions/params-reader'
import { paramsBuilder } from './functions/params-builder'
import { langHandler, langObjHandler } from '../../../../functions/lang-handler'
import { parseCurrency } from '../../functions/currency-parsers'
import { parseCategoryForUrl } from '../../functions/category-parsers'
import { parseDistrictForUrl } from '../../functions/district-parsers'
import { ManagedLink } from 'managed-inputs'
import { addAnnouncementManager } from '../../../../components/scaffold/components/header/functions/managers'
import { labelProvider } from '../../../../components/user/components/show/functions/label-provider'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.langObjHandler = langObjHandler.bind(this)
    this.paramsReader = paramsReader.bind(this)
    this.fetchAnnouncements = fetchAnnouncements.bind(this)
    this.buildRequestParameters = buildRequestParameters.bind(this)
    this.paramsBuilder = paramsBuilder.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
    this.addAnnouncementManager = addAnnouncementManager.bind(this)
    this.labelProvider = labelProvider.bind(this)
  }

  render() {
    const {
      renderMap,
      renderCatalogue,
      renderMy,
      device
    } = this.props

    const showAddAnnouncement = [null, 'smallTablet', 'largePhone', 'smallPhone'].indexOf(device) !== -1

    return (
      <div id='announcement-index'>
        <div>
          {showAddAnnouncement && <ManagedLink {...this.addAnnouncementManager()} />}
        </div>
        {(renderMap || renderCatalogue) && <AnnouncementIndexPanel />}
        {renderMap && <AnnouncementIndexMap />}
        {renderCatalogue && <AnnouncementIndexCatalogue />}
        {renderMy && <AnnouncementIndexMy />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexSearch))
