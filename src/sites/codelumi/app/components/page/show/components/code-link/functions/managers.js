import React from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg.js'
import categoryNames from '../constants/category-names.js'

export const linkManager = props => {
  const { clientUrl, changeRoute, nodeContent } = props
  const { pathname, hrefLang, category, title } = nodeContent
  const classNames = { container: `code-link ${category}` }
  const categoryName = categoryNames[category]
  if (!categoryName) return null
  
  const name = categoryName[hrefLang]
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      <div className='category'>
        <SVG name={category} /> {name}
      </div>
      <div className='title'>
        {title}
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
