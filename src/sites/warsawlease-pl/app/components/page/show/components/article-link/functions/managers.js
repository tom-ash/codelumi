import React from 'react'

export const linkManager = props => {
  const { changeRoute, buildUrl, nodeContent } = props
  const { pathname, hrefLang, title } = nodeContent
  const classNames = { container: 'article-link' }
  const href = buildUrl({ path: pathname })

  const label = (
    <>
      <div className='title'>
        {title}
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
