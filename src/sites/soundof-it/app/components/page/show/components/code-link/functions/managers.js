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
