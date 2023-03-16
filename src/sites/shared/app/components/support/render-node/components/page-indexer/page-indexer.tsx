import React from 'react'
import useStyles from 'isomorphic-style-loader-react18/useStyles'
import styles from './styles/styles.scss'
import { connect } from 'react-redux'
import { mapStateToProps } from './constants/mappers'
import IndexLink from '../index-link/index-link'

interface PageIndexerProps {
  collection: string
  tutorials: {
    logo: string
    image: string
    title: string
    description: string
    category: string
    subcategory: string
    pathname: string
    hrefLang: string
  }[]
  articles: {
    logo: string
    image: string
    title: string
    description: string
    category: string
    subcategory: string
    pathname: string
    hrefLang: string
  }[]
}

const PageIndexer = (props: PageIndexerProps) => {
  useStyles(styles)

  const { tutorials: learningCollection, articles, collection: collectionName } = props

  if (collectionName === 'learning') {
    return (
      <>
        <div className='page-indexer'>
          {learningCollection.map((link, index) => {
            const { logo, image, title, description, category, subcategory, pathname, hrefLang } = link
            const linkProps = {
              collectionName,
              logo,
              image,
              title,
              description,
              category,
              subcategory,
              pathname,
              hrefLang,
            }

            return <IndexLink {...{ ...linkProps, key: index }} />
          })}
          <div className='float-clear' />
        </div>
      </>
    )
  }

  if (collectionName === 'articles') {
    return (
      <>
        <div className='page-indexer'>
          {articles.map((link, index) => {
            const { logo, image, title, description, category, subcategory, pathname, hrefLang } = link
            const linkProps = {
              collectionName,
              logo,
              image,
              title,
              description,
              category,
              subcategory,
              pathname,
              hrefLang,
            }

            return <IndexLink {...{ ...linkProps, key: index }} />
          })}
          <div className='float-clear' />
        </div>
      </>
    )
  }

  return null
}

export default connect(mapStateToProps)(PageIndexer)
