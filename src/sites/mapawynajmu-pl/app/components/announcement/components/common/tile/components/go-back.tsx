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
        centerMap()
        changeRoute({ href: '/', retainQueryParams: true })
      }}
      className='go-back-to-list'
    >
      {/* @ts-ignore */}
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
