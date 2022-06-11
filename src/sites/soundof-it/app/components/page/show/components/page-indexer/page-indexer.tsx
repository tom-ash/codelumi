import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import { connect } from 'react-redux'
import { mapStateToProps } from './constants/mappers'
import IndexLink from '../../../../../../../shared/app/components/page/components/shared/components/tile/components/index-link/index-link'

interface PageIndexerProps {
  clientUrl: string,
  changeRoute(props: object): void,
  node: {
    collection: string
  },
  tutorials: {
    logo: string,
    image: string,
    title: string,
    description: string,
    category: string,
    subcategory: string,
    pathname: string,
    hrefLang: string,
    modifiedOn: string
  }[],
  articles: {
    logo: string,
    image: string,
    title: string,
    description: string,
    category: string,
    subcategory: string,
    pathname: string,
    hrefLang: string,
    modifiedOn: string
  }[]
}

const PageIndexer = (props: PageIndexerProps) => {
  useStyles(styles)

  console.log("QWEQWE")

  const { tutorials: learningCollection, articles, node: { collection: collectionName }, clientUrl, changeRoute } = props

  if (collectionName === 'learning') {
    return (
      <>
        <div className='page-indexer'>
          {learningCollection.map((link, index) => {
            const { logo, title, description, category, subcategory, pathname, hrefLang, modifiedOn } = link
            const linkProps = { collectionName, clientUrl, changeRoute, logo, title, description, category, subcategory, pathname, hrefLang, modifiedOn }

            return <IndexLink {...{ ...linkProps, key: index }} />
          })}
          <div className='float-clear' />
        </div>
      </>
    )
  }

  console.log("HERE")

  if (collectionName === 'articles') {
    return (
      <>
        <div className='page-indexer'>
          {articles.map((link, index) => {
            const { logo, image, title, description, category, subcategory, pathname, hrefLang, modifiedOn } = link
            const linkProps = { collectionName, clientUrl, changeRoute, logo, image, title, description, category, subcategory, pathname, hrefLang, modifiedOn }

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
