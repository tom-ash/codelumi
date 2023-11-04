import React from 'react'
import { useData } from '../../../../../functions/store/use-data'
import { SVG } from '../../../svg/svg'
import { Link } from '../../../link/link'
// import { enrichText } from '../../helpers/enrich-text/enrich-text'

interface Breadcrumb {
  name: string
  item: string
}

export const Breadcrumbs = () => {
  const breadcrumbs = useData().breadcrumbs as Breadcrumb[]

  // TODO: REMOVE
  if (!breadcrumbs) {
    return null
  }

  return (
    <ul className='breadcrumbs'>
      {breadcrumbs.map((breadcrumb) => {
        console.log(breadcrumb.name)
        return (
          <li key={breadcrumb.item}>
            <Link
              href={breadcrumb.item}
              // hrefLang?: Lang // TODO: ADD!
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
