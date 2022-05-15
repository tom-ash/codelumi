import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import CodeLink from '../code-link/code-link'
import { connect } from 'react-redux'
import { mapStateToProps } from './constants/mappers'

interface PageIndexerProps {
  node: {
    collection: string
  },
  tutorials: {
    logo: string,
    image: string,
    title: string,
    description: string,
    category: string,
    pathname: string,
    hrefLang: string,
    modifiedOn: string
  }[]
}

const PageIndexer = (props: PageIndexerProps) => {
  useStyles(styles)

  const { tutorials: learningCollection, node: { collection: collectionName } } = props

  if (collectionName === 'learning') {
    return (
      <div className='page-indexer'>
        {learningCollection.map((link, index) => {
          const { logo, image, title, description, category, pathname, hrefLang, modifiedOn } = link

          const linkProps = { ...props, logo, image, title, description, category, pathname, hrefLang, modifiedOn, collectionName }

          return <CodeLink {...{ ...linkProps, key: index }} />
        })}
      </div>
    )
  }

  return null
}

export default connect(mapStateToProps)(PageIndexer)
