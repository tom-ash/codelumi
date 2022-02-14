// @ts-ignore
import React from 'react'
// @ts-ignore
import useStyles from 'isomorphic-style-loader/useStyles'
// @ts-ignore
import styles from './styles/styles.scss'

interface TitleBoardProps {
  device: string,
  node: {
    title: string,
    image: string,
    author: string,
    authorLink: string,
    logo: string,
    lastUpdatedOn: string,
    desktopTop: number
  }
}

import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'

const TitleBoard = (props: TitleBoardProps) => {
  useStyles(styles)

  const {
    device,
    node: {
      title,
      image,
      author,
      authorLink,
      logo,
      lastUpdatedOn,
      desktopTop
    }
  } = props

  const logoImg = logo && <img className='logo' src={logo} />
  
  let coverTop = 0

  if (device === 'largePc') {
    coverTop = desktopTop
  }

  return (
    <header id='title-board'>
      <img
        src={image}
        className='cover'
        style={{
          top: coverTop
        }}
      />
      <h1>
        {title}
      </h1>
      {logoImg}
      <a
        className='author'
        href={authorLink}
        target='_blank'
      >
        <SVG name='penClip' /> {author}
      </a>
      <div className='updated-on'>
        <SVG name='calendar' /> {lastUpdatedOn}
      </div>
    </header>
  )
}

export default TitleBoard
