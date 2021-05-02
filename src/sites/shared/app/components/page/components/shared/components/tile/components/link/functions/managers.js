import React from 'react'


export function linkManager({ clientUrl, changeRoute, nodeContent }) {
  const { pathname, hrefLang, title, description, image } = nodeContent
  const href = `${clientUrl}/${pathname}`

  return {
    classNames: { container: '' },
    href,
    hrefLang,
    title,
    label: (
      <>
       <img src={image} loading='lazy' />
       <div className='title'>
         {title}
       </div>
       <div className='description'>
         {description}
       </div>
      </>
    ),
    onClick: () => changeRoute({ href })
  }
}