import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'
import centerMap from '../../../../index/components/map/functions/center-map'
import { buildUrl } from '../../../../../../../../shared/functions/builders/url'
import { updateUrl } from '../../../../../../../../../shared/app/functions/routes/updaters/update-url'
import { useDispatch } from 'react-redux'

interface GoBackProps {
  id: number
  goBackLink: any // TODO
}

const GoBack = (props: GoBackProps) => {
  const dispatch = useDispatch()
  const setControl = (value: any) => dispatch({ type: 'control', value })
  const { goBackLink } = props

  return (
    <button
      onClick={() => {
        centerMap()
        setControl({ currentTileId: null })
        updateUrl({ href: buildUrl(goBackLink), retainQueryParams: true, withScroll: false })
      }}
      className='go-back-to-list'
    >
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
