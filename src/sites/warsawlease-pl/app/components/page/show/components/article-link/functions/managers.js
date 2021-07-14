import React from 'react'

export const linkManager = props => {
  const { clientUrl, changeRoute, nodeContent } = props
  const { pathname, hrefLang, title } = nodeContent
  const classNames = { container: 'article-link' }
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      {/* <div>
        PICTURE
      </div> */}
      <div className='title'>
        {title}
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
