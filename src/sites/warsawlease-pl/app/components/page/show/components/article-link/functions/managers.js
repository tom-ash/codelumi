import React from 'react'

export const linkManager = props => {
  const { changeRoute, buildUrl, nodeContent } = props
  const { pathname, lang, picture, title, description, customClassNames } = nodeContent
  let classNamesArray = ['article-link']
  if (customClassNames) classNamesArray = classNamesArray.concat(customClassNames)
  const classNames = { container: classNamesArray.join(' ') }
  const href = buildUrl({ path: pathname })
  const hrefLang = lang

  const label = (
    <>
      <div className='picture-and-title'>
        <img src={picture} />
        <span className='title'>
          {title}
        </span>
      </div>
      <div className='description'>
        {description}
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
