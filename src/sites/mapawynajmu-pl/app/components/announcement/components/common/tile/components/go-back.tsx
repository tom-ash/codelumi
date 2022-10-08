import React, { useContext } from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg'
import AppContext from '../../../../../../constants/context'

interface GoBackProps {
  closeButtonOnClick(): void
}

const GoBack = (props: GoBackProps) => {
  const {
    closeButtonOnClick
  } = props

  const { changeRoute } = useContext(AppContext)

  return (
    <button
      onClick={() => changeRoute({ href: '/' })}
      className='go-back-to-list'
    >
      {/* @ts-ignore */}
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
