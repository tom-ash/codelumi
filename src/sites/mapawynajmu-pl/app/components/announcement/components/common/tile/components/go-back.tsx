import React, { useContext } from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg'
import AppContext from '../../../../../../constants/context'
import centerMap from '../../../index/components/map/functions/center-map'

interface GoBackProps {
  changeCurrentTileId(id: number | null): void
}

const GoBack = (props: GoBackProps) => {
  const { changeRoute } = useContext(AppContext)
  const { changeCurrentTileId } = props

  return (
    <button
      onClick={() => {
        centerMap()
        changeCurrentTileId(null)
        changeRoute({ href: '/' })
      }}
      className='go-back-to-list'
    >
      {/* @ts-ignore */}
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
