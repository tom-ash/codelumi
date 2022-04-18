import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import SVG from '../../../../../../../support/svg/svg.js'

interface TitleBoardProps {
  appName: string,
  device: string,
  langHandler(langs: { pl: string, en: string }): string,
  node: {
    title: string,
    image: string,
    author: string,
    authorLink: string,
    authorPicture: string,
    logo: string,
    imageTop: number,
    imageLargePcTop: number,
    imageSmallPcTop: number,
    imageLargeTabletTop: number,
    imageSmallTabletTop: number,
    imageLargePhoneTop: number,
    imageSmallPhoneTop: number
  },
  publishedOn: string,
  modifiedOn: string
}

const TitleBoard = (props: TitleBoardProps) => {
  const {
    appName,
    device,
    langHandler,
    node: {
      title,
      image,
      author,
      authorLink,
      authorPicture,
      logo,
      imageTop,
      imageLargePcTop,
      imageSmallPcTop,
      imageLargeTabletTop,
      imageSmallTabletTop,
      imageLargePhoneTop,
      imageSmallPhoneTop,
    },
    publishedOn,
    modifiedOn
  } = props

  useStyles(require(`../../../../../../../../../../${appName}/app/components/page/styles/article/header.scss`))

  const logoImg = logo && <img className='logo' src={logo} />

  let mediaQueryImageTop = imageTop || 0

  if (device === 'largePc') {
    mediaQueryImageTop = imageLargePcTop || 0
  }

  return (
    <header>
      <div className='cover'>
        <img
          src={image}
          className='cover-image'
          style={{
            top: mediaQueryImageTop
          }}
        />
        <div className='logos'>
          {logoImg}
        </div>
      </div>
      <div className='author'>
        {authorPicture &&
        <div className='picture'>
          {/* <SVG name='userNinja' /> */}
        </div>}
        <div className='name'>
          {/* @ts-ignore */}
          <SVG name='penClip' />
          <a
            href={authorLink}
            target='_blank'
          >
            {author}
          </a>
        </div>
      </div>
      <div className='dates'>
        <span>
          {langHandler({ pl: 'Opublikowano w dniu', en: 'Published on'})} {publishedOn}
        </span>
        <span>
        {langHandler({ pl: 'Ostatnio zmodyfikowano w dniu', en: 'Last updated on'})} {modifiedOn}
        </span>
      </div>
      <h1>
        {title}
      </h1>
    </header>
  )
}

export default TitleBoard
