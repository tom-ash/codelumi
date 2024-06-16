import React from 'react'
import { useData } from '../../../../../../../../shared/app/functions/store/use-data'
import { Position as PositionPartial } from '../../../common/position/position'

interface PositionInterface {
  (props: {}): React.ReactElement
}

export const Position: PositionInterface = () => {
  const {
    posting: { position },
  } = useData()

  return (
    <PositionPartial position={position} />
  )
}
