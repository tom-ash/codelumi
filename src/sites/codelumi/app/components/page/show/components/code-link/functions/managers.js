import React from 'react'
import SVG from '../../../../../../../../shared/app/components/support/svg/svg.js'
import categoryNames from '../constants/category-names.js'

export const linkManager = props => {
  const { published, clientUrl, changeRoute, nodeContent } = props
  const { pathname, hrefLang, category, title, description, iconHref } = nodeContent
  const classNames = { container: `code-link ${category}` }
  const categoryName = categoryNames[category]
  if (!categoryName) return null
  
  const name = categoryName[hrefLang]
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      <div className='picture'>
        <img src={iconHref} />
      </div>
      <div className='text'>
        <div className='title'>
          {title}
        </div>
        <div className='description'>
          {description}
        </div>
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
