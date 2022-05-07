import React from 'react'
import useStyles from 'isomorphic-style-loader/useStyles'
import styles from './styles/styles.scss'
import CodeLink from '../code-link/code-link'
import { connect } from 'react-redux'
import { mapStateToProps } from './constants/mappers'

interface PageIndexerProps {
  tutorials: {
    logo: string,
    image: string,
    title: string,
    category: string,
    pathname: string,
    hrefLang: string,
    modifiedOn: string
  }[]
}

const PageIndexer = (props: PageIndexerProps) => {
  useStyles(styles)

  const links = props.tutorials

  return (
    <div className='page-indexer'>
      {links.map((link, index) => {
        const { logo, image, title, category, pathname, hrefLang, modifiedOn } = link
        const linkProps = { ...props, logo, image, title, category, pathname, hrefLang, modifiedOn }

        return <CodeLink {...{ ...linkProps, key: index }} />
      })}
    </div>
  )
}

export default connect(mapStateToProps)(PageIndexer)
