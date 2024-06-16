import React, { useMemo } from 'react'
import { MapMarker } from '../../../../../../../../shared/app/components/support/map-marker/map-marker'
import { InstructionsDeprecated } from '../../../../../../../../shared/app/components/support/instructions_deprecated/instructions_deprecated'
import { useTexts } from '../../../../../../../../shared/app/functions/store/use-texts'
import { useErrors } from '../../../../../../../../shared/app/functions/store/use-errors'
import { useInputs } from '../../../../../../../../shared/app/functions/store/use-inputs'
import { useStore } from 'react-redux'
import { pinBuilder } from './functions/pin-builder'

export const LOCATION_ID = 'location'

export const Location = () => {
  const { locationHeading, locationInstructions } = useTexts()
  const { isLocationError: isError } = useErrors()

  const classNames = ['location']
  if (isError) {
    classNames.push('error')
  }

  const { longitude, latitude, category } = useInputs()

  const {
    // @ts-ignore
    assets: { svgs },
  } = useStore().getState()

  const item = useMemo(() => {
    return {
      longitude,
      latitude,
      category,
      svgs,
    }
  }, [longitude, latitude, category])

  return (
    <div
      id={LOCATION_ID}
      className={classNames.join(' ')}
    >
      <h2>{locationHeading}</h2>
      <InstructionsDeprecated text={locationInstructions} />
      <MapMarker
        item={item}
        pinBuilder={pinBuilder}
      />
    </div>
  )
}
