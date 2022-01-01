import React from 'react'
import categoryNames from '../constants/category-names.js'

export const linkManager = props => {
  const { clientUrl, changeRoute, nodeContent } = props
  const { pathname, hrefLang, category, title, description, iconHref } = nodeContent
  const classNames = { container: `code-link ${category}` }
  const categoryName = categoryNames[category]
  if (!categoryName) return null
  
  const href = `${clientUrl}/${pathname}`
  const label = (
    <div className='picture-and-title'>
      {iconHref && <img src={iconHref} />}
      <div className='title'>
        {title}
      </div>
    </div>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
