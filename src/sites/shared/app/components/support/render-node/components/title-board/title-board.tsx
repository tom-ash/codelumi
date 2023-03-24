import React from 'react'
import { SVG } from '../../../svg/svg'

interface TitleBoardProps {
  imageSrc?: string
  imageAlt?: string
  authorName?: string
  authorLink?: string
  title?: string
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
    title,
  } = props

  return (
    <header className='title-board'>
      <div className='cover'>{imageSrc && imageAlt && <Image {...{ imageSrc, imageAlt }} />}</div>
      {authorName && authorLink && <Author {...{ authorName, authorLink }} />}
      {title && <h1>{title}</h1>}
    </header>
  )
}

export default TitleBoard
