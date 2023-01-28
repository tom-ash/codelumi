import React, { useContext } from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg'
import AppContext from '../../../../../../constants/context'
import centerMap from '../../../index/components/map/functions/center-map'
import { buildUrl } from '../../../../../../../shared/functions/builders/url'

interface GoBackProps {
  id: number
  goBackLink: any // TODO
}

const GoBack = (props: GoBackProps) => {
  const { changeRoute } = useContext(AppContext)
  const { goBackLink } = props

  return (
    <button
      onClick={() => {
        centerMap()
        changeRoute({ href: buildUrl(goBackLink), retainQueryParams: true })
      }}
      className='go-back-to-list'
    >
      {/* @ts-ignore */}
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
