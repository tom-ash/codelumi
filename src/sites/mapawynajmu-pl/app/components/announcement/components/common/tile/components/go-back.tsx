import React, { useContext } from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg'
import AppContext from '../../../../../../constants/context'
import centerMap from '../../../index/components/map/functions/center-map'

interface GoBackProps {
  id: number
}

const GoBack = (props: GoBackProps) => {
  const { changeRoute } = useContext(AppContext)
  const { id } = props

  return (
    <button
      onClick={() => {
        const pin = document.getElementById(`googl-map-pin-${id}`)
        if (pin) pin.classList.remove('current')
        centerMap()
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
