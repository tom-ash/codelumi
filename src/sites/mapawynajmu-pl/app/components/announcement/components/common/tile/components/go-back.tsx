import React from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg'
import centerMap from '../../../index/components/map/functions/center-map'
import { buildUrl } from '../../../../../../../shared/functions/builders/url'
import { changeUrl } from '../../../../../../../../shared/app/functions/routes/changers/route-generic'

interface GoBackProps {
  id: number
  goBackLink: any // TODO
}

const GoBack = (props: GoBackProps) => {
  const { goBackLink } = props

  return (
    <button
      onClick={() => {
        centerMap()
        changeUrl({ href: buildUrl(goBackLink), retainQueryParams: true })
      }}
      className='go-back-to-list'
    >
      {/* @ts-ignore */}
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
