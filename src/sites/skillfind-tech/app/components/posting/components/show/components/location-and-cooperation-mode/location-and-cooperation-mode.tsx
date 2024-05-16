import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { LocationAndCooperationMode as LocationAndCooperationModePartial } from '../../../common/location-and-cooperation-mode/location-and-cooperation-mode'

interface LocationAndCooperationModeInterface {
  (props: {}): React.ReactElement
}

export const LocationAndCooperationMode: LocationAndCooperationModeInterface = () => {
  const {
    posting: { locality, country, cooperationMode },
  } = useData()

  return (
    <LocationAndCooperationModePartial
      locality={locality}
      country={country}
      cooperationMode={cooperationMode}
    />
  )
}
