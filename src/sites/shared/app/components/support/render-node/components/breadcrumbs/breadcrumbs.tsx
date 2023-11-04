import React from 'react'
import { useData } from '../../../../../functions/store/use-data'
import { SVG } from '../../../svg/svg'
import { Link } from '../../../link/link'

interface Breadcrumb {
  name: string
  lang: Lang;
  item: string
}

export const Breadcrumbs = () => {
  const breadcrumbs = useData().breadcrumbs as Breadcrumb[]

  return (
    <ul className='breadcrumbs'>
      {breadcrumbs.map((breadcrumb) => {
        console.log(breadcrumb.name)
        return (
          <li key={breadcrumb.item}>
            <Link
              href={breadcrumb.item}
              hrefLang={breadcrumb.lang}
              label={breadcrumb.name}
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
