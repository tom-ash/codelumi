import React from 'react'
import { useLinks } from '../../../../../../../../shared/app/functions/store/use-links'
import { Link } from '../../../../../../../../shared/app/components/support/link/link'
import { SVG } from '../../../../../../../../shared/app/components/support/svg/svg'

interface GoBackInterface {
  (props: {}): React.ReactElement
}

export const GoBack: GoBackInterface = () => {
  const {
    root: { href, hrefLang, title },
  } = useLinks()

  const label = (
    <SVG name='arrowLong' />
  )

  return (
    <Link
      href={href}
      hrefLang={hrefLang}
      title={title}
      label={label}
      customClassNames='go-back'
    />
  )
}
