import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import centerMap from '../../../../../../../../../shared/app/components/support/map-index/components/results/components/map/functions/center-map'
import { useDispatch } from 'react-redux'
import { changeUrl } from '../../../../../../../../../shared/app/functions/routes/changers/change-url'

interface GoBackProps {
  id: number
  goBackLink: any // TODO
}

const GoBack = (props: GoBackProps) => {
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const {
    goBackLink: { href },
  } = props

  return (
    <button
      onClick={() => {
        centerMap()
        setControl({ currentTileId: null })
        changeUrl({ href, retainQueryParams: true, withScroll: false })
      }}
      className='go-back-to-list'
    >
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
