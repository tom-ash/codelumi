import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler } from '../../../../../../functions/language-handler'
import { languageObjectHandler } from '../../../../../../functions/language-handler'
import { ManagedSelect, ManagedButton } from 'managed-inputs'
import * as managers from './functions/managers'
import { buttonLabelHandler } from '../../functions/button-label-handler'
import { getAnnouncements } from '../../functions/get-announcements'
import { buildUrlParameters, buildRequestParameters } from '../../functions/build-parameters'
import * as lifecycle from './functions/lifecycle'
import './styles/styles.scss'

class AnnouncementIndexMini extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = lifecycle.componentDidMount
    this.shouldComponentUpdate = lifecycle.shouldComponentUpdate
    this.componentDidUpdate = lifecycle.componentDidUpdate
    this.componentWillUnmount = lifecycle.componentWillUnmount
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.buttonManager = managers.buttonManager.bind(this)
    this.getAnnouncements = getAnnouncements.bind(this)
    this.buttonLabelHandler = buttonLabelHandler.bind(this)
    this.buildUrlParameters = buildUrlParameters.bind(this)
    this.buildRequestParameters = buildRequestParameters.bind(this)
  }

  render() {
    return (
      <div id='announcement-show-index-search-mini'>
        <ManagedSelect manager={this.categoryManager} />
        <ManagedSelect manager={this.districtManager} />
        <ManagedButton manager={this.buttonManager} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementIndexMini)