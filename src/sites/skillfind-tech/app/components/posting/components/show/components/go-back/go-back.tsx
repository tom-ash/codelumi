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
    <div className='go-back'>
      <SVG name='arrowRight' />
    </div>
  )

  return (
    <Link
      href={href}
      hrefLang={hrefLang}
      title={title}
      label={label}
    />
  )
}
