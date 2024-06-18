import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { CooperationModeAndLocation as CooperationModeAndLocationPartial } from '../../../common/cooperation-mode-and-location/cooperation-mode-and-location'

interface CooperationModeAndLocationInterface {
  (props: {}): React.ReactElement
}

export const CooperationModeAndLocation: CooperationModeAndLocationInterface = () => {
  const {
    posting: { locality, country, cooperationMode },
  } = useData()

  return (
    <CooperationModeAndLocationPartial
      locality={locality}
      country={country}
      cooperationMode={cooperationMode}
    />
  )
}
