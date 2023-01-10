import React from 'react'
import { ManagedCheckbox } from 'managed-inputs'
import { Dispatch } from 'redux'
import { termsAndServiceConsentValidator } from './terms-and-privacy-consent.validator'

interface TermsAndPrivacyConsentLabelProps {
  langHandler: LangHandler
  buildUrl: BuildUrl
  links: any // TODO
}

export const TermsAndPrivacyConsentLabel = (props: TermsAndPrivacyConsentLabelProps) => {
  const { links, langHandler, buildUrl } = props
  const termsOfServiceLinkData = links['visitor/terms-of-service']
  const privacyPolicyLinkData = links['visitor/privacy-policy']
  const termsAndServiceHref = buildUrl({ path: termsOfServiceLinkData && termsOfServiceLinkData.path })
  const privacyPolicyHref = buildUrl({ path: privacyPolicyLinkData && privacyPolicyLinkData.path })

  return (
    <span>
      {/* @ts-ignore */}
      {langHandler({ pl: 'Akceptuję', en: 'I accept' })}&nbsp;
      <a
        className='link'
        href={termsAndServiceHref}
        target='_blank'
        onMouseOver={e => e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      >
        {/* @ts-ignore */}
        {langHandler({ pl: 'Regulamin', en: 'the Terms of Service' })}
      </a>
      {/* @ts-ignore */}
      &nbsp;{langHandler({ pl: 'i', en: 'and' })}&nbsp;
      <a
        className='link'
        href={privacyPolicyHref}
        target='_blank'
        onMouseOver={e => e.stopPropagation()}
        onClick={e => e.stopPropagation()}
      >
        {/* @ts-ignore */}
        {langHandler({ pl: 'Politykę Prywatności', en: 'the Privacy Policy' })}
      </a>
      .
    </span>
  )
}
