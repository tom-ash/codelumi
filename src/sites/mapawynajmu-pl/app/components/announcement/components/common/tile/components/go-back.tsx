import React from 'react'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'
import centerMap from '../../../index/components/map/functions/center-map'
import { buildUrl } from '../../../../../../../shared/functions/builders/url'
import { updateUrl } from '../../../../../../../../shared/app/functions/routes/updaters/update-url'

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
        updateUrl({ href: buildUrl(goBackLink), retainQueryParams: true, withScroll: false })
      }}
      className='go-back-to-list'
    >
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
