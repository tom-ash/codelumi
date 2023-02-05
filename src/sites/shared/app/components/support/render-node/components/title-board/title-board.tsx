import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import SVG from '../../../svg/svg'
import prettifyDate from '../../../../../functions/time/prettify-date'

interface TitleBoardProps {
  imageSrc?: string
  imageAlt?: string
  authorName?: string
  authorLink?: string
  publishedOn?: string
  modifiedOn?: string
  title?: string
  appName: string
  lang: string
  langHandler(langs: { pl: string; en: string }): string
}

const Image = (props: { imageSrc: string; imageAlt: string }) => {
  const { imageSrc, imageAlt } = props

  const imageProps = {
    src: imageSrc,
    alt: imageAlt,
    className: 'cover-image',
  }

  return <img {...imageProps} />
}

const Author = (props: { authorName: string; authorLink: string }) => {
  const { authorName, authorLink } = props

  return (
    <div className='author'>
      <div className='name'>
        {/* @ts-ignore */}
        <SVG name='penClip' />
        <a
          href={authorLink}
          target='_blank'
        >
          {authorName}
        </a>
      </div>
    </div>
  )
}

const TitleBoard = (props: TitleBoardProps) => {
  const {
    imageSrc,
    imageAlt,
    authorName,
    authorLink,
    // publishedOn,
    // modifiedOn,
    title,
    appName,
    // lang,
    // langHandler
  } = props

  useStyles(require(`../../../../../../../${appName}/app/components/page/styles/article/header.scss`))

  return (
    <header className='title-board'>
      <div className='cover'>{imageSrc && imageAlt && <Image {...{ imageSrc, imageAlt }} />}</div>
      {authorName && authorLink && <Author {...{ authorName, authorLink }} />}
      {title && <h1>{title}</h1>}
    </header>
  )
}

export default TitleBoard
