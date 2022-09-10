import React from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg'

interface GoToLinkProps {
  name: string
  link: string
  langHandler: LangHandler
}


const GoToLink = (props: GoToLinkProps) => {
  const {
    name,
    link,
    langHandler
  } = props


  return (
    <div className='go-to-link'>
      <div className='icon'>
        {/* @ts-ignore */}
        <SVG name='globe' />
      </div>
      <a
        href={link}
        target='_blank'
      >
        {/* @ts-ignore */}
        {langHandler({ pl: 'Idź do', en: 'Go to' })} {name}
      </a>
    </div>
  )
}

export default GoToLink
