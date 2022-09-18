import React from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg'

interface GoBackProps {
  closeButtonOnClick(): void
}

const GoBack = (props: GoBackProps) => {
  const {
    closeButtonOnClick
  } = props


  return (
    <button
      onClick={closeButtonOnClick}
      className='go-back-to-list'
    >
      {/* @ts-ignore */}
      <SVG name='arrowRight' />
    </button>
  )
}

export default GoBack
