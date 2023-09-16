import React from 'react'
import { presentRooms } from '../primary/functions/present-rooms';
import { presentFloor } from '../primary/functions/present-floor';
import { presentTotalFloors } from '../primary/functions/present-total-floors';
import { presentAvailabilityDate } from '../primary/functions/present-availability-date';
import { SVG } from '../../../../../../../../../../shared/app/components/support/svg/svg';

interface ListingTileShowSecondaryInterface {
  (props: {
    rooms: number;
    category: number;
    floor: number;
    totalFloors: number;
    availabilityDate: string;
  }): React.ReactElement
}

const ListingTileShowSecondary: ListingTileShowSecondaryInterface = (props) => {
  const {
    rooms,
    category,
    floor,
    totalFloors,
    availabilityDate,
  } = props

  return (
    <div className='secondary'>
      {rooms !== null && (
        <div className='item rooms'>
          {/* TODO: LANG! */}
          <SVG name='room' /> {rooms} {presentRooms({ rooms, category })['pl']}
        </div>
      )}
      {floor !== null && <div className='item floor'><SVG name='layers' /> {presentFloor({ floor })['pl']}</div>}
      {totalFloors !== null && (
        // TODO: LANG!
        <div className='item total-floors'><SVG name='apartment' /> {presentTotalFloors({ totalFloors })['pl']}</div>
      )}
      {availabilityDate !== null && (
        <div className='item available-from'>
          {/* TODO: LANG! */}
          <SVG name='calendar' /> {presentAvailabilityDate({ availabilityDate, category })['pl']}
        </div>
      )}
    </div>
  )
}

export default ListingTileShowSecondary
