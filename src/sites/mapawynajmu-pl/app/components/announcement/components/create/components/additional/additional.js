import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedSelect } from 'managed-inputs'
import * as managers from './functions/managers'
import langHandler from '../../../../../../functions/lang-handler'
import { onSelectHandler } from './functions/on-select-handler'
import { floorsProvider } from './functions/floors-provider'
import NameInput from './components/name'
import LinkInput from './components/link'

// 0 => 'office'
// 1 => 'usable_premises'
// 2 => 'apartment'
// 3 => 'house'
// 4 => 'room'
// 5 => 'parking_space'
// 6 => 'virtual_office'
// 7 => 'coworking_spaces'

const showRent = category => [0, 1, 2, 3, 4, 5].includes(category)
const showRooms = category => [0, 1, 2, 3, 4, 5].includes(category)
const showName = category => [6, 7].includes(category)
const showLink = category => [6, 7].includes(category)

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
    const { category, name, link, changeInputs } = this.props

    const nameInputProps = {
      name,
      changeInputs,
    }

    const linkInputProps = {
      link,
      changeInputs,
    }

    return (
      <div id='listing-create-additional' className='section'>
        {showRent(category) && (
          <div className='rent-inputs-container'>
            <ManagedText {...this.rentAmountManager()} />
            <ManagedSelect {...this.rentCurrencyManager()} />
            <div className='float-clear' />
          </div>
        )}
        {showRooms(category) && <ManagedSelect {...this.roomsManager()} />}
        {showName(category) && <NameInput {...nameInputProps} />}
        {showLink(category) && <LinkInput {...linkInputProps} />}
        <ManagedSelect {...this.floorManager()} />
        <ManagedSelect {...this.totalFloorsManager()} />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateAdditional)
