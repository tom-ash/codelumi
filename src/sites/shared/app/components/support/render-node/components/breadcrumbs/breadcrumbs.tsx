import React from 'react'
import { useData } from '../../../../../functions/store/use-data'
import { SVG } from '../../../svg/svg'
import { DeprecatedLink } from '../../../deprecated-link/deprecated-link'

interface Breadcrumb {
  name: string
  lang: Lang
  item: string
}

export const Breadcrumbs = () => {
  const breadcrumbs = useData().breadcrumbs as Breadcrumb[]

  return (
    <ul className='breadcrumbs'>
      {breadcrumbs.map((breadcrumb, index) => {
        const label = index === 0 ? <SVG name='home' /> : breadcrumb.name

        return (
          <li key={breadcrumb.item}>
            <DeprecatedLink
              href={breadcrumb.item}
              hrefLang={breadcrumb.lang}
              label={label}
              title={breadcrumb.name}
            />
            <SVG name='chevron' />
          </li>
        )
      })}
    </ul>
  )
}

export default Breadcrumbs
