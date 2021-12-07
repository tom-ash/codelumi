import React from 'react'
import SVG from '../../../../../../../../support/svg/svg.js'

export function linkManager({ clientUrl, changeRoute, nodeContent }) {
  const { pathname, hrefLang, category, title, description, image } = nodeContent

  // TODO CHANGE ROUTE
  const href = `${clientUrl}/${pathname}`

  return {
    classNames: { container: '' },
    href,
    hrefLang,
    title,
    label: (
      <>
        {image && <img src={image} loading='lazy' />}
        <div className='category'>
          <SVG name='ruby' /> {category}
         </div>
         <div className='title'>
          {title}
         </div>
         {/* <div className='description'>
           {description}
         </div> */}
      </>
    ),
    onClick: () => changeRoute({ href })
  }
}