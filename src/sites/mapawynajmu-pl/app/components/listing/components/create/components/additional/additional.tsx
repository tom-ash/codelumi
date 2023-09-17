import React from 'react'
import { useStore } from '../../../../../../../../shared/app/functions/store/useStore'
import { AreaInput } from './components/area/area.input'
import { Description } from './components/description/description'
import { LinkInput } from './components/link/link.input'
import { NameInput } from './components/name/name.input'
import { AvailabilityDate } from './components/availability-date/availability_date'
import { TotalFloorsSelect } from './components/total-floors/total-floors.select'
import { FloorSelect } from './components/floor/floor.select'
import { RoomsSelect } from './components/rooms/rooms.select'
import { Rent } from './components/rent/rent'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'

// 0 => 'office'
// 1 => 'usable_premises'
// 2 => 'apartment'
// 3 => 'house'
// 4 => 'room'
// 5 => 'parking_space'
// 6 => 'virtual_office'
// 7 => 'coworking_spaces'

// @ts-ignore
const showRooms = category => [0, 1, 2, 3, 4, 5].includes(category)
// @ts-ignore
const showName = category => [6, 7].includes(category)
// @ts-ignore
const showLink = category => [6, 7].includes(category)

export const Additional = () => {
  const { category } = useInputs()

  return (
    <section>
      <AreaInput />
      <Rent />
      {showRooms(category) && <RoomsSelect />}
      {showName(category) && <NameInput />}
      {showLink(category) && <LinkInput />}
      <FloorSelect />
      <TotalFloorsSelect />
      <AvailabilityDate />
      <Description />
    </section>
  )
}
