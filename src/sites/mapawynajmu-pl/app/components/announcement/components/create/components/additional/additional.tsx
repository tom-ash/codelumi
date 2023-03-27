import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './constants/mappers'
import { ManagedText, ManagedSelect } from 'managed-inputs'
import * as managers from './functions/managers'
import { onSelectHandler } from './functions/on-select-handler'
import { floorsProvider } from './functions/floors-provider'
import NameInput from './components/name'
// import LinkInput from './components/link'
import { AreaInput } from './components/area/area.input'
import { Description } from './components/description/description'
import { LinkInput } from './components/link/link.input'

// 0 => 'office'
// 1 => 'usable_premises'
// 2 => 'apartment'
// 3 => 'house'
// 4 => 'room'
// 5 => 'parking_space'
// 6 => 'virtual_office'
// 7 => 'coworking_spaces'

// @ts-ignore
const showRent = category => [0, 1, 2, 3, 4, 5].includes(category)
// @ts-ignore
const showRooms = category => [0, 1, 2, 3, 4, 5].includes(category)
// @ts-ignore
const showName = category => [6, 7].includes(category)
// @ts-ignore
const showLink = category => [6, 7].includes(category)

class AnnouncementCreateAdditional extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props)
    // @ts-ignore
    this.roomsManager = managers.roomsManager.bind(this)
    // @ts-ignore
    this.floorManager = managers.floorManager.bind(this)
    // @ts-ignore
    this.totalFloorsManager = managers.totalFloorsManager.bind(this)
    // @ts-ignore
    this.onSelectHandler = onSelectHandler.bind(this)
    // @ts-ignore
    this.floorsProvider = floorsProvider.bind(this)
    // @ts-ignore
    this.rentCurrencyManager = managers.rentCurrencyManager.bind(this)
    // @ts-ignore
    this.rentAmountManager = managers.rentAmountManager.bind(this)
  }

  render() {
    // @ts-ignore
    const { category, name, link, setInputs } = this.props

    const nameInputProps = {
      name,
      setInputs,
    }

    return (
      <>
        <AreaInput />
        {showRent(category) && (
          <div className='rent-inputs-container'>
            {/* @ts-ignore */}
            <ManagedText {...this.rentAmountManager()} />
            {/* @ts-ignore */}
            <ManagedSelect {...this.rentCurrencyManager()} />
            <div className='float-clear' />
          </div>
        )}
        {/* @ts-ignore */}
        {showRooms(category) && <ManagedSelect {...this.roomsManager()} />}
        {showName(category) && <NameInput {...nameInputProps} />}
        {showLink(category) && <LinkInput />}
        {/* @ts-ignore */}
        <ManagedSelect {...this.floorManager()} />
        {/* @ts-ignore */}
        <ManagedSelect {...this.totalFloorsManager()} />
        <Description />
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementCreateAdditional)
