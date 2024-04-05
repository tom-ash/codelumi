import React from 'react'
import { MapMarker } from '../../../../../../../../shared/app/components/support/map-marker/map-marker'
import { Instructions } from '../../../../../../../../shared/app/components/support/instructions/instructions'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useErrors } from '../../../../../../../../shared/app/functions/store/use-errors'

export const LOCATION_ID = 'location'

export const Location = () => {

  const {
    locationHeading,
    locationInstructions,
  } = useTexts()
  const { isLocationError: isError } = useErrors()

  const classNames = ['location']
  if (isError) {
    classNames.push('error')
  }

  return (
    <div
      id={LOCATION_ID}
      className={classNames.join(' ')}
    >
      <h2>{locationHeading}</h2>
      <Instructions text={locationInstructions} />
      <MapMarker />
    </div>
  )
}
