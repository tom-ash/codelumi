import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedSelect } from 'managed-inputs'
import * as managers from './functions/managers'
import langHandler from '../../../../../../functions/lang-handler'
import { onSelectHandler } from './functions/on-select-handler'
import { floorsProvider } from './functions/floors-provider'
import NameInput from './components/name'

class AnnouncementCreateAdditional extends React.Component {
  constructor(props) {
    super(props)
    this.langHandler = langHandler.bind(this)
    this.roomsManager = managers.roomsManager.bind(this)
    this.floorManager = managers.floorManager.bind(this)
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    this.onSelectHandler = onSelectHandler.bind(this)
    this.floorsProvider = floorsProvider.bind(this)
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    this.rentAmountManager = managers.rentAmountManager.bind(this)
  }

  
  
  render() {
    const {
      name,
      changeInputs
    } = this.props

    const nameInputProps = {
      name,
      changeInputs
    }

    return (
      <div id='announcement-create-additional' className='section'>
        <NameInput {...nameInputProps} />
        <div className='rent-inputs-container'>
          <ManagedText {...this.rentAmountManager()}/>
          <ManagedSelect {...this.rentCurrencyManager()}/>
          <div className='float-clear'/>
        </div>
        <ManagedSelect {...this.roomsManager()}/>
        <ManagedSelect {...this.floorManager()}/>
        <ManagedSelect {...this.totalFloorsManager()}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateAdditional)
