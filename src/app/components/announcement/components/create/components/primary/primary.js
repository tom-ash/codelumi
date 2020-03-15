import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedSelect, ManagedRadio, ManagedText, ManagedCheckbox } from 'managed-inputs'
import * as managers from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { handleErrorOnSelect, handleErrorOnValidate } from './functions/errors-handler'
import { onSelectHandler } from './functions/on-select-handler'
import { labelProvider } from '../../../../../../functions/providers/label'
import { getRentAmounts } from '../../functions/get-rent-amounts'
import { floorsProvider } from './functions/floors-provider'
import { sectionHeaderProvider } from '../../../../../../functions/providers/headers'

class AnnouncementCreatePrimary extends React.Component {
  constructor(props) {
    super(props)
    this.languageHandler = languageHandler.bind(this)
    this.languageObjectHandler = languageObjectHandler.bind(this)
    this.categoryManager = managers.categoryManager.bind(this)
    this.districtManager = managers.districtManager.bind(this)
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.rentAmountManager = managers.rentAmountManager.bind(this)
    this.areaManager = managers.areaManager.bind(this)
    
    this.handleErrorOnSelect = handleErrorOnSelect.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.getRentAmounts = getRentAmounts.bind(this)
    this.floorsProvider = floorsProvider.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
  }
  
  render() {
    return (
      <div id='announcement-create-primary' className='section'>
        <h2>
          <div className='number'>1</div>
          <div className='text'>{this.languageObjectHandler({ pl: 'Kategoria', en: 'Category' })}</div>
          <div className='float-clear' />
        </h2>
        <div className='radio-container'>
          <ManagedRadio {...this.categoryManager()}/>
        </div>
        <h2>
          <div className='number'>2</div>
          <div className='text'>{this.languageObjectHandler({ pl: 'Dane wymagane', en: 'Required Data' })}</div>
          <div className='float-clear' />
        </h2>
        <ManagedSelect {...this.districtManager()}/>
        <ManagedText {...this.areaManager()}/>
        <div className='rent-inputs-container'>
          <ManagedText {...this.rentAmountManager()}/>
          <ManagedSelect {...this.rentCurrencyManager()}/>
          <div className='float-clear'/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary);