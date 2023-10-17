import React from 'react'
import { SVG } from '../../../../../../../../../shared/app/components/support/svg/svg'

interface GoToLinkProps {
  name: string
  link: string
}

const GoToLink = (props: GoToLinkProps) => {
  const { link } = props

  if (!link) return null

  return (
    <div className='go-to-link'>
      <SVG name='link' />
      <a
        href={link}
        target='_blank'
      >
        {link.replace(/https?:\/\//, '')}
      </a>
    </div>
  )
}

export default GoToLink
