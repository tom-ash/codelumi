import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import SVG from '../../../../../../../../../support/svg/svg.js'
import prettifyDate from '../../../../../../../../../../functions/time/prettify-date'

interface TitleBoardProps {
  title: string
  author?: { n: string, l: string }
  image?: { s: string, a: string, ar?: string }
  logo?: { s: string, a: string }
  publishedOn?: string
  modifiedOn?: string
  appName: string
  lang: string
  langHandler(langs: { pl: string, en: string }): string
}

const Image = (image: { s: string, a: string, ar?: string }) => {
  const {
    s: src,
    a: alt,
    ar: aspectRatio
  } = image
  const imageProps = {
    src,
    alt,
    className: 'cover-image',
    style: { aspectRatio }
  }

  return <img {...imageProps} />
}

const Logo = (logo: { s: string, a: string }) => {
  const {
    s: src,
    a: alt
  } = logo
  const logoProps = {
    src,
    alt,
    className: 'logo'
  }
  
  return <img {...logoProps} />
}

const Author = (author: { n: string, l: string }) => {
  const {
    n: name,
    l: link
  } = author

  return (
    <div className='author'>
      <div className='name'>
        {/* @ts-ignore */}
        <SVG name='penClip' />
        <a
          href={link}
          target='_blank'
        >
          {name}
        </a>
      </div>
    </div>
  )
}

const TitleBoard = (props: TitleBoardProps) => {
  const {
    title,
    author,
    image,
    logo,
    publishedOn,
    modifiedOn,
    appName,
    lang,
    langHandler
  } = props

  useStyles(require(`../../../../../../../../../../../../${appName}/app/components/page/styles/article/header.scss`))

  return (
    <header className='title-board'>
      <div className='cover'>
        {image && <Image {...image} />}
        {logo && <Logo {...logo} />}
      </div>
      {author && <Author {...author} />}
      <div className='dates'>
        <span>
          {langHandler({ pl: 'Opublikowano w dniu', en: 'Published on'})} {publishedOn && prettifyDate({ date: publishedOn, lang })}.
        </span>
        <span>
          {langHandler({ pl: 'Ostatnio zmodyfikowano w dniu', en: 'Modified on'})} {modifiedOn && prettifyDate({ date: modifiedOn, lang })}.
        </span>
      </div>
      <h1>
        {title}
      </h1>
    </header>
  )
}

export default TitleBoard
