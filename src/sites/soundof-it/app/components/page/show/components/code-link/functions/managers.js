import React from 'react'

export const linkManager = props => {
  const {
    clientUrl,
    changeRoute,
    pathname,
    hrefLang,
    title,
    image,
    logo
  } = props

  const classNames = { container: `code-link` }
  
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      <div className='logo'>
        <img src={logo} />
      </div>
      <div className='title-and-meta'>
        <div className='title'>
          {title}
        </div>
        <div className='last-updated-at'>
          January 24<sup>th</sup>, 2022
        </div>
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })

  return { classNames, href, hrefLang, title, label, onClick }
}
