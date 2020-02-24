import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedSelect } from 'managed-inputs'
import { ManagedRadio, ManagedText } from 'managed-inputs'
import * as managers from './functions/managers'
import { languageHandler, languageObjectHandler } from '../../../../../../functions/language-handler'
import { handleErrorOnSelect, handleErrorOnValidate } from './functions/errors-handler'
import { onSelectHandler } from './functions/on-select-handler'
import Calendar from 'react-calendar/dist/entry.nostyle'
import { parseDate } from '../../../../../../functions/date-parsers'
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
    this.roomsManager = managers.roomsManager.bind(this)
    this.floorManager = managers.floorManager.bind(this)
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    this.handleErrorOnSelect = handleErrorOnSelect.bind(this)
    this.handleErrorOnValidate = handleErrorOnValidate.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
    this.availabilityDateSelectManager = managers.availabilityDateSelectManager.bind(this)
    this.labelProvider = labelProvider.bind(this)
    this.getRentAmounts = getRentAmounts.bind(this)
    this.floorsProvider = floorsProvider.bind(this)
    this.sectionHeaderProvider = sectionHeaderProvider.bind(this)
  }
  
  render() {
    return (
      <div id='announcement-create-primary' className='section'>
        {this.sectionHeaderProvider('fas fa-info-circle', { pl: 'Dane podstawowe (wymagane)', en: 'Primary Data (required)'})}
          <div className='radio-container'>
            <div className='title'>
              <i className='icon far fa-list-alt' /> {this.languageObjectHandler({ pl: 'Kategoria', en: 'Category' })}
            </div>
            <ManagedRadio {...this.categoryManager()}/>
          </div>
          <ManagedSelect {...this.districtManager()}/>
          <ManagedText {...this.areaManager()}/>
          <ManagedText {...this.rentAmountManager()}/>
          <div className='radio-container currency'>
            <div className='title'>
              <i className='icon fas fa-coins' /> {this.languageObjectHandler({ pl: 'Waluta ceny (czynszu)', en: 'Price (Rent) Currency' })}
            </div>
            <ManagedRadio {...this.rentCurrencyManager()}/>
          </div>
          <div className='float-clear'/>
          {this.sectionHeaderProvider('fas fa-info-circle', { pl: 'Dane dodatkowe (opcjonalne)', en: 'Additional Data (optional)'}, 'additional-data')}
          <ManagedSelect {...this.roomsManager()}/>
          <ManagedSelect {...this.floorManager()}/>
          <ManagedSelect {...this.totalFloorsManager()}/>
          <div className='radio-container availability-date-select'>
            <div className='title'>
              <i className='far fa-calendar-alt' /> {this.languageObjectHandler({ pl: 'Dostępne od', en: 'Available from' })}
            </div>
          </div>
          <div
          className='calendar'>
            <div>
              <Calendar 
              onChange = {(date) => {
                this.props.changeInputs({ availabilityDate: parseDate(date) })
                this.props.changeControl({ availabilityDateFocus: false })
              }}
              locale={this.props.language == 'pl' ? 'pl' : 'en'}/>
            </div>
          </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreatePrimary);