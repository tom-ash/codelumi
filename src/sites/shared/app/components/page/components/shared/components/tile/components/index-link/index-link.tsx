import React from 'react'
import { ManagedLink } from 'managed-inputs'

interface IndexLinkProps {
  clientUrl: string,
  changeRoute(props: object): void,
  pathname: string,
  hrefLang: string,
  title: string,
  modifiedOn: string,
  description: string,
  category: string,
  subcategory: string
}

const IndexLink = (props: IndexLinkProps) => {
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

  const classNames = { container: `index-link ${subcategory}` }  
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

  const linkProps = { classNames, href, hrefLang, title, label, onClick }

  return <ManagedLink {...linkProps} />
}

export default IndexLink