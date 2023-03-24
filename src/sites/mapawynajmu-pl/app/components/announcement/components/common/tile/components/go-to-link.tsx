import React from 'react'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'

interface GoToLinkProps {
  name: string
  link: string
}

const GoToLink = (props: GoToLinkProps) => {
  const { name, link } = props

  return (
    <div className='go-to-link'>
      <div className='icon'>
        <SVG name='globe' />
      </div>
      <a
        href={link}
        target='_blank'
      >
        {/* TODO: LANG! */}
        Idź do
      </a>
    </div>
  )
}

export default GoToLink
