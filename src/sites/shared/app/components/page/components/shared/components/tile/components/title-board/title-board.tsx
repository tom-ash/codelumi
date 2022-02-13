// @ts-ignore
import React from 'react'

// @ts-ignore
import useStyles from 'isomorphic-style-loader/useStyles'
// @ts-ignore
import styles from './styles/styles.scss'

interface TitleBoardProps {
  node: {
    title: string,
    image: string,
    author: string,
    authorLink: string,
    logo: string,
    lastUpdatedOn: string
  }
}

import SVG from '../../../../../../../../../../shared/app/components/support/svg/svg.js'

const TitleBoard = (props: TitleBoardProps) => {
  useStyles(styles)

  const {
    node: {
      title,
      image,
      author,
      authorLink,
      logo,
      lastUpdatedOn
    }
  } = props

  console.log(title)

  return (
    <header
      id='title-board'
      style={{ backgroundImage: `url('${image}')` }}
    >
      <h1>
        {title}
      </h1>
      <img src={logo} />
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
