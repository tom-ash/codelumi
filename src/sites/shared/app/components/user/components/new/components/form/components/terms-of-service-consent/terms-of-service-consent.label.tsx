import React from 'react'
import { LinkObject } from '../../../../../../../../../../mapawynajmu-pl/app/app.d'

interface TermsOfServiceConsentLabelProps {
  syntheticLabel: string
  termsOfServiceLink: LinkObject
  termsOfService: string
}

export const TermsOfServiceConsentLabel = (props: TermsOfServiceConsentLabelProps) => {
  const { syntheticLabel, termsOfServiceLink, termsOfService } = props

  const label = syntheticLabel.split(/({.+?})/).map((element: string) => {
    if (element === '{termsOfService}') {
      const { href, hrefLang } = termsOfServiceLink

      return (
        <a
          className='link'
          href={href}
          hrefLang={hrefLang}
          target='_blank'
          onMouseOver={e => e.stopPropagation()}
          onClick={e => e.stopPropagation()}
        >
          {termsOfService}
        </a>
      )
    }

    return element
  })

  return <>{label}</>
}
