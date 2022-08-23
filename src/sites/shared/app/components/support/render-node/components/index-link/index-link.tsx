import React from 'react'
import { ManagedLink } from 'managed-inputs'
import prettifyDate from '../../../../../functions/time/prettify-date'
import SVG from '../../../../support/svg/svg'

interface IndexLinkProps {
  clientUrl: string,
  changeRoute(props: object): void,
  pathname: string,
  hrefLang: string,
  title: string,
  modifiedOn: string,
  description: string,
  category: string,
  subcategory: string,
  image?: string,
  collectionName: string
}

const IndexLink = (props: IndexLinkProps) => {
  const {
    clientUrl,
    changeRoute,
    pathname,
    hrefLang,
    title,
    modifiedOn,
    category,
    subcategory,
    image,
    collectionName
  } = props
  const classNames = { container: `index-link ${subcategory} ${collectionName}` }  
  const href = `${clientUrl}/${pathname}`
  const label = (
    <>
      {image && <img src={image} alt={title}/>}
      <div className='link-data'>
        <div className='category-and-subcategory'>
          <span className={category}>{category}</span><span className={subcategory}>{subcategory}</span>
        </div>
        <div className='modified-on'>
          {/* @ts-ignore */}
          <SVG name='calendar' /> {modifiedOn && prettifyDate({ date: modifiedOn, lang: hrefLang })}
        </div>
        <div className='title'>
          {title}
        </div>
      </div>
    </>
  )
  const onClick = () => changeRoute({ href })
  const linkProps = { classNames, href, hrefLang, title, label, onClick }

  return <ManagedLink {...linkProps} />
}

export default IndexLink