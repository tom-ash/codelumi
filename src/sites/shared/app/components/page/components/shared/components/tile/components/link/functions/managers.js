import React from 'react'
import SVG from '../../../../../../../../support/svg/svg.js'

export function linkManager(props) {
  const { changeRoute, buildUrl, nodeContent } = props
  const { pathname, hrefLang, category, title, image } = nodeContent
  const href = buildUrl({ path: pathname })

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
      </>
    ),
    onClick: () => changeRoute({ href })
  }
}