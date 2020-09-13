import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { languageHandler, languageObjectHandler } from '../../../../../../../../functions/language-handler'
import { changeInput } from './functions/change-input'
import { labelProvider } from './functions/label-provider'
import { buildSelectCategories } from '../../../../../../functions/build-select-categories'
import { buildSelectDistricts } from '../../../../../../functions/build-select-districts'
import { buttonLabelHandler } from './functions/button-label-handler'
import { subInputValueParser } from './functions/sub-input-value-parser'
import { buttonManager } from './functions/managers'
import { subInputNames } from './constants/sub-input-names'
import * as managers from './functions/managers'
import {
  compositeManagerProvider,
  subInputMinManagerProvider,
  subInputMaxManagerProvider
} from './functions/managerProviders'
import { compositeInputProvider } from './functions/composite-input-provider'
import { parseCurrency } from '../../../../../../functions/currency-parsers'
import { ManagedSelect, ManagedLink } from 'managed-inputs'
import withStyles from 'isomorphic-style-loader/withStyles'
import styles from './styles/styles.scss'

class AnnouncementIndexPanelVisitor extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.parseCurrency = parseCurrency.bind(this)
    this.compositeInputProvider = compositeInputProvider.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.compositeManagerProvider = compositeManagerProvider.bind(this)
    this.subInputMinManagerProvider = subInputMinManagerProvider.bind(this)
    this.subInputMaxManagerProvider = subInputMaxManagerProvider.bind(this);
    subInputNames.map(inputName => {
      this[`${inputName}Manager`] = this.compositeManagerProvider(inputName)
      this[`${inputName}MinManager`] = this.subInputMinManagerProvider(inputName)
      this[`${inputName}MaxManager`] = this.subInputMaxManagerProvider(inputName)
    })
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.availabilityDateManager = managers.availabilityDateManager.bind(this)
    this.subInputValueParser = subInputValueParser.bind(this)
    this.buildSelectCategories = buildSelectCategories.bind(this)
    this.buildSelectDistricts = buildSelectDistricts.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.changeInput = changeInput.bind(this)
    this.buttonManager = buttonManager.bind(this)
    this.buttonLabelHandler = buttonLabelHandler.bind(this)
  }

  render() {
    return (
      <div id='announcement-index-panel-visitor'>
        <form>
          <div className='pane primary'>
            <ManagedSelect {...this.categoryManager()} />
            {this.compositeInputProvider('area')}
            <ManagedSelect {...this.districtManager()}/>
            {this.compositeInputProvider('rent')}
            <div className='float-clear' />
          </div>
          <ManagedLink {...this.buttonManager()}/>
          <div className='pane secondary'>
            {this.compositeInputProvider('rooms')}
            {this.compositeInputProvider('floor')}
            {this.compositeInputProvider('totalFloors')}
            <ManagedSelect {...this.availabilityDateManager()}/>
            <div className='float-clear' />
          </div>
          <div className='float-clear' />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AnnouncementIndexPanelVisitor))
