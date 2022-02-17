// @ts-ignore
import React from 'react'
// @ts-ignore
import useStyles from 'isomorphic-style-loader/useStyles'
// // @ts-ignore

interface TitleBoardProps {
  appName: string,
  device: string,
  langHandler(langs: { pl: string, en: string }): string,
  node: {
    title: string,
    image: string,
    author: string,
    authorLink: string,
    logo: string,
    publishedOn: string,
    lastUpdatedOn: string,
    desktopTop: number,
    hashtags: string
  }
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
      logo,
      publishedOn,
      lastUpdatedOn,
      desktopTop,
      hashtags
    }
  } = props

  useStyles(require(`../../../../../../../../../../${appName}/app/components/page/styles/article/header.scss`))

  const logoImg = logo && <img className='logo' src={logo} />
  
  let coverTop = 0

  if (device === 'largePc') {
    coverTop = desktopTop
  }

  const parsedHashtags = (hashtags || '').split(', ')

  return (
    <header>
      <div className='cover'>
        <img
          src={image}
          style={{
            top: coverTop
          }}
        />
        <div className='logos'>
          {logoImg}
        </div>
      </div>
      <div className='author'>
        <div className='picture'>
          {/* <SVG name='userNinja' /> */}
        </div>
        <div className='name'>
          <a
          className='author'
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
        {langHandler({ pl: 'Ostatnio zmodyfikowano w dniu', en: 'Last updated on'})} {lastUpdatedOn}
        </span>
      </div>
      <h1>
        {title}
      </h1>
      <div className='hashtags'>
        {parsedHashtags.map(hashtag => <span key={hashtag}>#{hashtag}</span>)}
      </div>
    </header>
  )
}

export default TitleBoard
