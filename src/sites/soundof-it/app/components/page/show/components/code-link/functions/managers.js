import React from 'react'
import prettifyDate from '../../../../../../../../shared/app/functions/time/prettify-date'

export const linkManager = props => {
  const {
    clientUrl,
    changeRoute,
    pathname,
    hrefLang,
    title,
    modifiedOn,
    description,
    category,
    subcategory
  } = props

  const classNames = { container: `code-link ${subcategory}` }  
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      <div className='category-and-subcategory'>
        <span className={category}>{category}</span><span className={subcategory}>{subcategory}</span>
      </div>
      <div className='title'>
        {title}
      </div>
      <div className='description'>
        {description}
      </div>
      <div className='modified-on'>
        {modifiedOn}
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
