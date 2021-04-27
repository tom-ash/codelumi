import React from 'react'
import loadable from '@loadable/component'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import AnnouncementIndexPanel from './components/panel/panel'
import AnnouncementIndexCatalogue from './components/catalogue/catalogue'
import AnnouncementIndexMap from './components/map/map'
const AnnouncementIndexMy = loadable(() => import('./components/my/my'))
import { buildRequestParameters } from './functions/build-parameters'
import { paramsReader } from './functions/params-reader'
import { paramsBuilder } from './functions/params-builder'
import langHandler from '../../../../functions/lang-handler'
import { parseCurrency } from '../../functions/currency-parsers'
import { parseCategoryForUrl } from '../../functions/category-parsers'
import { parseDistrictForUrl } from '../../functions/district-parsers'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementIndexSearch extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.paramsReader = paramsReader.bind(this)
    this.buildRequestParameters = buildRequestParameters.bind(this)
    this.paramsBuilder = paramsBuilder.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.parseCategoryForUrl = parseCategoryForUrl.bind(this)
    this.parseDistrictForUrl = parseDistrictForUrl.bind(this)
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
        {(renderMap || renderCatalogue) && <AnnouncementIndexPanel />}
        {renderMap && <AnnouncementIndexMap />}
        {renderCatalogue && <AnnouncementIndexCatalogue />}
        {renderMy && <AnnouncementIndexMy />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexSearch))
