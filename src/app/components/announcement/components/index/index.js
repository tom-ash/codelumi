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
import { OffsetSwitcher } from './components/offset-switcher/offset-switcher'

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
  }

  render() {
    const {
      showVisitor,
      showUser,
      changeInputs,
      changeControl,
      offset,
      amount
    } = this.props

    return (
      <div id='announcement-index'>
        <AnnouncementIndexPanel />
        {showVisitor &&
        <React.Fragment>
          {/* <OffsetSwitcher
            changeInputs={changeInputs}
            changeControl={changeControl}
            offset={offset}
            amount={amount}
            languageHandler={this.languageHandler}
            classNames={'shared'}
          /> */}
          <AnnouncementIndexFull />
          <AnnouncementIndexMap />
        </React.Fragment>}
        {showUser && <AnnouncementIndexList />}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexSearch)