import React from 'react'
import categoryNames from '../constants/category-names.js'

export const linkManager = props => {
  const {
    clientUrl,
    changeRoute,
    pathname,
    hrefLang,
    category,
    title,
    image,
    logo
  } = props

  const classNames = { container: `code-link ${category}` }
  const categoryName = categoryNames[category]
  if (!categoryName) return null
  
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      <img className='image' src={image} />
      <img className='logo' src={logo} />
      <div className='title'>
        {title}
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
